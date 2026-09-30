#!/usr/bin/env python3
"""Embed small resource icons; requires Pillow. Run after changing link-icons."""
import base64
import io
import json
import re
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / 'site'
icons = {}
for path in sorted((root / 'assets/img/link-icons').iterdir()):
    if path.suffix == '.svg':
        content = re.sub(r'<!--.*?-->', '', path.read_text(), flags=re.S)
        data = re.sub(r'>\s+<', '><', content).strip().encode()
        mime = 'image/svg+xml'
    elif path.suffix == '.png':
        img = Image.open(path).convert('RGBA')
        img.thumbnail((44, 44), Image.Resampling.LANCZOS)
        output = io.BytesIO()
        img.save(output, 'WEBP', quality=65, method=6)
        data, mime = output.getvalue(), 'image/webp'
    else:
        continue
    icons[path.stem] = 'data:' + mime + ';base64,' + base64.b64encode(data).decode()
    print(f'{path.stem}: {len(data)} bytes')
(root / '_data/inline_icons.json').write_text(json.dumps(icons, indent=2) + '\n')
