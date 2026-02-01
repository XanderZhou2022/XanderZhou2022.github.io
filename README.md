# Yixi Zhou — Personal Academic Website

Personal website of **Yixi (Xander) Zhou**, built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

- **Site**: [https://xanderzhou2022.github.io/](https://xanderzhou2022.github.io/)
- **Content**: About, CV, Publications, Projects (Life Trajectory), Teaching (CS150A Head TA), News

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

## Build

```bash
bundle exec jekyll build
```

Output is in `_site/`.

## Deploy

Pushed to the `main` branch; [GitHub Actions](.github/workflows/deploy.yml) build and deploy to GitHub Pages.

## Theme

Based on [al-folio](https://github.com/alshedivat/al-folio) (MIT). Customized: personal content, cyan theme, light/dark toggle only, Sass @use migration, tabler-icons font path.

## License

Content and customizations: © Yixi Zhou.  
Theme: [al-folio](https://github.com/alshedivat/al-folio) (MIT).
