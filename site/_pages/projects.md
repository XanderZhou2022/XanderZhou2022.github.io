---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 3
---

<div class="project-showcase">
  {% for group in site.data.project_showcase %}
    <section aria-labelledby="projects-{{ group.year }}">
      <h2 class="showcase-year" id="projects-{{ group.year }}">{{ group.year }}</h2>
      {% for project in group.projects %}
        <article class="showcase-card">
          <div class="showcase-media">
            <img src="{{ project.image | relative_url }}" alt="{{ project.alt | escape }}" loading="lazy" decoding="async" width="640" height="400">
          </div>
          <div class="showcase-content">
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            <p class="showcase-meta">{{ project.meta | join: ' · ' }}</p>
            <p class="showcase-description">{{ project.description }}</p>
            <div class="showcase-tags">{% for tag in project.tags %}<span>{{ tag }}</span>{% endfor %}</div>
            <div class="showcase-links">
              <a href="{{ project.url | relative_url }}"><img class="resource-icon resource-icon-project-page" src="{{ '/assets/img/link-icons/project-page.svg' | relative_url }}" width="20" height="20" alt="" aria-hidden="true"> Project</a>
              {% for link in project.links %}
                <a href="{{ link.url }}">{% if link.url contains 'github.com' %}<img class="resource-icon resource-icon-github" src="{{ '/assets/img/link-icons/github.svg' | relative_url }}" width="20" height="20" alt="" aria-hidden="true">{% else %}<img class="resource-icon resource-icon-project-page" src="{{ '/assets/img/link-icons/project-page.svg' | relative_url }}" width="20" height="20" alt="" aria-hidden="true">{% endif %} {{ link.label }}</a>
              {% endfor %}
            </div>
          </div>
        </article>
      {% endfor %}
    </section>
  {% endfor %}
</div>
