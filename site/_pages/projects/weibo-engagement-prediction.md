---
layout: page
title: Predicting Weibo Reposts, Comments, and Likes
permalink: /projects/weibo-engagement-prediction/
description: Machine learning course project on Sina Weibo engagement prediction.
nav: false
---

## Predicting Weibo Reposts, Comments, and Likes

<img src="/assets/img/projects/weibo-engagement-prediction.png" alt="Weibo engagement prediction project pipeline" class="img-fluid rounded z-depth-1 mb-4">

This 2024 machine learning course project studied how to predict user engagement on Sina Weibo, including reposts, comments, and likes after publication. The project treated social media engagement as a supervised prediction problem with content, time, and user-behavior signals.

### What It Does

- Cleans and preprocesses Weibo post data from February to July 2015.
- Extracts content features such as word length, hashtags, mentions, URLs, language markers, and text embeddings.
- Builds temporal features from posting time and analyzes engagement patterns by hour, weekday, and user activity cycles.
- Constructs user-profile features, including historical interaction statistics and low-engagement "zombie user" identification.
- Compares Random Forest, XGBoost, neural networks, SVM, RNN, and BERT-based experiments.
- Uses SHAP, clustering, and visualization to interpret user and content features.

### My Work

- Led data cleaning and feature extraction from Weibo content.
- Built user clustering and user-profile features.
- Implemented model training, testing, hyperparameter experiments, visualization, and final analysis.
- Wrote the thesis/report and prepared the final defense materials.

### Result

Random Forest emerged as the strongest model in the project experiments, and user-profile features provided the largest improvement over the baseline. The final system improved substantially over the initial baseline by integrating content, temporal, and user behavior features.

### Tech Stack

Python, pandas, scikit-learn, XGBoost, PyTorch, Transformers/BERT, jieba, SHAP, Matplotlib, Seaborn, Plotly.

---

[← Back to Projects](/projects/)
