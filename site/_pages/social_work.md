---
layout: page
permalink: /social_work/
title: Social Work
description: Social practice, volunteer service, and community engagement.
nav: true
nav_order: 6
---

<div class="experience-page">
  {% assign groups = site.data.activity_lists.social_work %}
  {% include activity_list.liquid groups=groups %}
</div>
