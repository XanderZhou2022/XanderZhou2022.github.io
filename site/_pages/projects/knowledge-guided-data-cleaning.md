---
layout: page
title: Knowledge-Guided Data Cleaning
permalink: /projects/knowledge-guided-data-cleaning/
description: "A research survey connecting knowledge acquisition to reliable data-cleaning decisions."
nav: false
---

_Knowledge-Guided Data Cleaning: From Knowledge Acquisition to Reliable Decisions_ is a research survey covering **30 studies from 2007 to 2026**. It examines how rules, facts, patterns, and feedback support data repairs, and how those decisions connect to reliable, task-oriented data preparation.

<figure class="mb-4">
  <a href="https://xanderzhou2022.github.io/Knowledge-Guided-Data-Cleaning/">
    <img src="{{ '/assets/img/projects/knowledge-guided-data-cleaning.webp' | relative_url }}" alt="Diagram showing trusted knowledge guiding the repair of a conflicting ZIP and city record" class="img-fluid rounded d-block mx-auto" width="1536" height="1024">
  </a>
  <figcaption class="small text-muted mt-2 text-center">Conceptual illustration: trusted evidence supports selecting a repair for a conflicting record.</figcaption>
</figure>

## Survey Focus

- **Knowledge acquisition:** Where do cleaning rules, trusted facts, data patterns, and user feedback come from?
- **Repair selection:** What evidence supports a particular correction to a record or attribute?
- **Reliability:** When should a system apply a repair, revise its knowledge, or abstain and seek more evidence?
- **Data preparation:** How do semantic interpretation, transformation, joins, and operation order affect the intended analytical result?

The survey distinguishes **factual correctness**, **constraint consistency**, and **downstream task utility**. Its take-home principles emphasize retaining verified knowledge, updating it when conditions change, seeking missing evidence, carrying knowledge across tasks, and checking each operation against the intended result.

## Project Materials

The [project website](https://xanderzhou2022.github.io/Knowledge-Guided-Data-Cleaning/) includes an interactive ZIP–city repair example and a searchable literature map organised by acquisition, repair, reliability, and preparation. Each study can be expanded for a concise explanation.

- [Survey paper](https://xanderzhou2022.github.io/Knowledge-Guided-Data-Cleaning/paper.pdf): a seven-page overview of the literature and its connecting questions.

## Links

[Project Website](https://xanderzhou2022.github.io/Knowledge-Guided-Data-Cleaning/) · [Paper](https://xanderzhou2022.github.io/Knowledge-Guided-Data-Cleaning/paper.pdf) · [GitHub](https://github.com/XanderZhou2022/Knowledge-Guided-Data-Cleaning)

---

[← Back to Projects]({{ '/projects/' | relative_url }})
