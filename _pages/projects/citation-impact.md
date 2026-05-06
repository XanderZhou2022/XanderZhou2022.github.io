---
layout: page
title: Predicting Citation Impact from Peer Review Data
permalink: /projects/citation-impact/
description: PeerRead-based data analysis and machine learning project for citation impact prediction.
nav: false
---

## Predicting Citation Impact from Peer Review Data

<img src="/assets/img/projects/citation-impact.png" alt="Citation prediction model comparison" class="img-fluid rounded z-depth-1 mb-4">

This project explored whether peer review scores and paper metadata can predict future citation impact. It used PeerRead data from ACL 2017 and CoNLL 2016 and treated citation count prediction as a data analysis and machine learning problem.

### What It Does

- Cleans and merges peer review, paper metadata, acceptance, and citation-count data.
- Uses PCA, clustering, correlation analysis, and recommendation-level analysis to study review-score structure.
- Compares models including SVR, XGBoost, Random Forest, neural networks, Gaussian processes, and stacked ensembles.
- Discusses selection bias, citation bias, and risks of using predictive models in editorial decision-making.

### Key Takeaway

Peer review metrics contain limited signal for long-term citation prediction. Tree-based and non-linear methods can extract some structure, but the results emphasize the limits of standardized review scores as a proxy for future scientific impact.

### Tech Stack

Python, pandas, scikit-learn, XGBoost, Matplotlib, Seaborn, Jupyter Notebook.

### Links

[GitHub Repository](https://github.com/XanderZhou2022/ECE204_final)

---

[← Back to Projects](/projects/)
