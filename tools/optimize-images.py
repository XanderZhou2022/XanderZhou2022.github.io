#!/usr/bin/env python3
"""Generate committed WebP previews. Requires Pillow, PyYAML and rsvg-convert for SVGs.
Run from any directory; deployment uses the generated assets without these tools.
"""
import io
import json
import re
import subprocess
from pathlib import Path

import yaml
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1] / 'site'
OUT = ROOT / 'assets/img/optimized'
OUT.mkdir(exist_ok=True)
requests = {}
bib = (ROOT / '_bibliography/papers.bib').read_text()
for name in re.findall(r'preview=\{([^}]+)\}', bib):
    if '://' not in name:
        requests['/assets/img/publication_preview/' + name] = (480, 960)
for group in yaml.safe_load((ROOT / '_data/project_showcase.yml').read_text()):
    for project in group['projects']:
        requests[project['image']] = (480, 960)
requests['/assets/img/prof_pic.jpg'] = (240, 480)
for org in yaml.safe_load((ROOT / '_data/organizations.yml').read_text()):
    for field in ['image', 'dark_image']:
        requests['/assets/img/organizations/' + org[field]] = (112,)

manifest = {}
source_bytes = output_bytes = 0
for url, widths in requests.items():
    source = (ROOT / url.lstrip('/')).resolve()
    key = source.relative_to(ROOT / 'assets/img').as_posix().replace('/', '-').rsplit('.', 1)[0]
    if source.suffix == '.svg':
        raster = subprocess.check_output(['rsvg-convert', '--width', str(max(widths)), str(source)])
        original = Image.open(io.BytesIO(raster)).convert('RGBA')
    else:
        original = ImageOps.exif_transpose(Image.open(source)).convert('RGBA')
    variants = []
    for width in widths:
        img = original.copy()
        img.thumbnail((width, 10000), Image.Resampling.LANCZOS)
        dest = OUT / f'{key}-{width}.webp'
        img.save(dest, 'WEBP', quality=84, method=6)
        variants.append({'url': '/' + dest.relative_to(ROOT).as_posix(), 'width': img.width})
    manifest[url] = {'src': variants[0]['url'], 'srcset': ', '.join(f"{v['url']} {v['width']}w" for v in variants), 'width': original.width, 'height': original.height}
    source_bytes += source.stat().st_size
    output_bytes += (ROOT / variants[-1]['url'].lstrip('/')).stat().st_size
(ROOT / '_data/optimized_images.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(f'{len(manifest)} images: originals {source_bytes:,} bytes; largest WebP variants {output_bytes:,} bytes ({1-output_bytes/source_bytes:.1%} smaller).')
