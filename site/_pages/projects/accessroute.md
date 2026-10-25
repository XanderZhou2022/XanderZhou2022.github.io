---
layout: page
title: "AccessRoute HK: Accessible Mobility in Hong Kong"
permalink: /projects/accessroute/
description: "Gold Prize (Winner), Track 1: Green Transport and Smart Mobility · Hack for SDGs 2026."
nav: false
---

AccessRoute HK is an accessible first- and last-mile navigation prototype for Hong Kong's vertical city. It connects floor-level indoor maps and pedestrian paths to help travellers plan journeys around their mobility needs, from the first lift to the final street crossing.

## Hack for SDGs 2026 · Gold Prize

Our team, **HumanRoute (Team 1022)**, reached the finals of the [Hong Kong Inter-University GenAI Hackathon for Sustainable Development Goals 2026](https://www.hack4sdg.com/) and won **Gold Prize (Winner)** in **Track 1: Green Transport and Smart Mobility** on **October 24, 2026**.

<div class="row mb-4">
  <figure class="col-md-6 mb-3">
    <a href="{{ '/assets/img/projects/accessroute-gold-prize.jpg' | relative_url }}">
      <img src="{{ '/assets/img/projects/accessroute-gold-prize.jpg' | relative_url }}" alt="Gold Prize award and winner certificate at the Hack for SDGs 2026 final" class="img-fluid rounded" width="1600" height="1200" loading="eager">
    </a>
    <figcaption class="small text-muted mt-2">Gold Prize at the final pitch day, October 24, 2026.</figcaption>
  </figure>
  <figure class="col-md-6 mb-3">
    <a href="{{ '/assets/img/projects/accessroute-certificate.jpg' | relative_url }}">
      <img src="{{ '/assets/img/projects/accessroute-certificate.jpg' | relative_url }}" alt="Hack for SDGs Gold Prize Winner certificate dated October 24, 2026" class="img-fluid rounded" width="1600" height="1200" loading="eager">
    </a>
    <figcaption class="small text-muted mt-2">Gold Prize Winner certificate.</figcaption>
  </figure>
</div>

## What It Does

- **Mobility-aware route planning:** Plans across floors, lifts, footbridges, and outdoor paths using constraints such as stair access and lift requirements, alongside preferences for shelter, distance, effort, or time.
- **AI-assisted preference input:** Turns voice or text into mobility settings that the traveller reviews before applying them.
- **Visual localization and obstacle reporting:** Matches photos and signs to map records. Confirmed locations and facility disruptions update the remaining route from the traveller's current position.
- **Cantonese journey guidance:** Converts confirmed route facts into short instructions with speech playback.

The prototype covers **12 mapped scenes** and **four AI workflows**, with a shared journey session connecting the phone interface and control console. The project website includes a Kowloon Tong field demonstration, technical methods, and validation materials.

## Tech Stack

React, TypeScript, Express, Qwen-compatible text and vision models, graph-based routing, server-sent events, browser speech services, and Hong Kong map and weather data.

## Links

[Project Website](https://xanderzhou2022.github.io/AccessRoute/) · [Live Demo](https://xanderzhou2022.github.io/AccessRoute_small_demo/showcase) · [GitHub](https://github.com/XanderZhou2022/AccessRoute_small_demo) · [Technical Report](https://xanderzhou2022.github.io/AccessRoute/downloads/product-manual.pdf?v=20261018-authors) · [Hack for SDGs](https://www.hack4sdg.com/)

---

[← Back to Projects]({{ '/projects/' | relative_url }})
