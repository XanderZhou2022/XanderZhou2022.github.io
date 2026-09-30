# Yixi Zhou — Personal Academic Website

Personal academic website: [xanderzhou2022.github.io](https://xanderzhou2022.github.io/).

## Repository layout

- `site/`: all Jekyll source, including `_config.yml`, pages, layouts, data, plugins, styles, images, and public files.
- `tools/`: build and preview scripts, CSS cleanup configuration, Python dependencies, and formatter dependencies/configuration.
- `.github/workflows/`: GitHub Actions deployment and formatting checks.
- `Gemfile` and `Gemfile.lock`: shared Ruby dependencies, retained at the root for Bundler and GitHub Actions caching. The lockfile is required for reproducible builds.
- `local/` (ignored): machine-only Docker, editor/container, and helper configurations. These are not required for deployment.
- `_site/` (ignored): generated website; GitHub Actions publishes this directory to the `gh-pages` branch.

The root retains README, LICENSE, Git configuration, and Bundler manifests for standard tool discovery. Public files such as `robots.txt`, the favicon, and the Google verification file live in `site/` and are still published at the website root.

## Local development

```bash
bundle install
bash tools/serve.sh
```

Open [localhost:4000](http://localhost:4000). To build without serving:

```bash
bash tools/build.sh
```

Both scripts locate the repository themselves and support Jekyll options, for example:

```bash
bash tools/build.sh --destination /tmp/website-preview
bash tools/serve.sh --port 4001
```

## Content locations

- `site/_pages/`: About, CV, Publications, Projects, Social Work, Teaching, and detail pages.
- `site/_bibliography/papers.bib`: papers, resource links, preview figures, and homepage selections.
- `site/_data/project_showcase.yml`: project cards.
- `site/_data/activity_lists.yml`: Social Work and Teaching.
- `site/assets/json/resume.json`: CV content.
- `site/_news/`: news updates.
- `site/assets/img/`: personal photos, project and publication figures, and organization icons.

All published page and asset URLs are unchanged by the source directory layout.

## Formatting

```bash
npm ci --prefix tools/format
tools/format/node_modules/.bin/prettier . --config tools/format/prettier.config.cjs --ignore-path tools/format/.prettierignore --check
```

## Deployment

The [deployment workflow](.github/workflows/deploy.yml) installs Ruby and Python dependencies, runs `tools/build.sh` in production mode, cleans unused CSS with `tools/purgecss.config.js`, and publishes `_site/` to `gh-pages`. GitHub Pages serves the generated site, not the source in `site/`.

Local caches, installed dependencies, preview outputs, editor settings, and `local/` are ignored by Git. Shared build dependencies and configuration remain versioned because GitHub Actions needs them.

## License

Content and customizations: © Yixi Zhou. Theme: [al-folio](https://github.com/alshedivat/al-folio) (MIT). Preserve LICENSE and third-party asset license notices.

## Image previews

List cards, the profile photo, and organization logos use committed WebP images
from `site/assets/img/optimized/`. Responsive `srcset` selects a suitable size;
all images load immediately while the profile photo loads with high priority.
List thumbnails use 360/640 px variants capped at 20 KB each. Organization logos
use 80 px WebP images capped at 3 KB, embedded in the HTML to avoid extra requests.
Original figures remain available for detail pages.

After adding or replacing a figure, run `python3 tools/optimize-images.py`
(requires Pillow, PyYAML, and `rsvg-convert`), then format
`site/_data/optimized_images.json`. Commit the generated images and manifest.
The site falls back to the original when a preview has not yet been generated;
GitHub Actions does not need the image-generation dependencies.

Small social and resource icons are embedded using `site/_data/inline_icons.json`.
After changing `site/assets/img/link-icons/`, run `python3 tools/embed-icons.py`
(requires Pillow) and format the generated manifest.
