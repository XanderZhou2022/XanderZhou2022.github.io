---
layout: page
title: ELT Data Pipeline with Airbyte, Snowflake, and dbt
permalink: /projects/cs639-elt-pipeline/
description: CS639 project on modern ELT pipelines for survey, stock, FX, and trading-book data.
nav: false
---

## ELT Data Pipeline with Airbyte, Snowflake, and dbt

<img src="/assets/img/projects/cs639-elt-pipeline.png" alt="Snowflake dbt transformation stage" class="img-fluid rounded z-depth-1 mb-4">

This CS639 project built a cloud data pipeline using Airbyte, Snowflake, and dbt. It combined student survey data, CSV trading-book data, Snowflake Marketplace stock data, and foreign exchange data into a transformation workflow for analysis.

### What It Does

- Configures Snowflake warehouses, databases, schemas, roles, and permissions.
- Uses Airbyte to extract and load Google Sheet and CSV sources into Snowflake.
- Uses dbt to clean survey columns, create staging views, and materialize marts tables.
- Runs SQL analysis on survey, stock, FX, and trading-book datasets.

### Tech Stack

Airbyte, Snowflake, dbt, SQL, Python, Jupyter Notebook, Matplotlib.

### Links

[Project Specification](https://github.com/CS639-Data-Management-for-Data-Science/s25/blob/main/p4/README.md)

---

[← Back to Projects](/projects/)
