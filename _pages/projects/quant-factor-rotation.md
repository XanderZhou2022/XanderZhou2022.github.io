---
layout: page
title: Dynamic Factor Rotation for Quantitative Investment
permalink: /projects/quant-factor-rotation/
description: Dynamic factor rotation strategy for SSE 50 constituents using market regimes and time-series prediction.
nav: false
---

## Dynamic Factor Rotation for Quantitative Investment

<img src="/assets/img/projects/quant-factor-rotation.png" alt="Dynamic factor rotation cumulative returns" class="img-fluid rounded z-depth-1 mb-4">

This course project studied factor rotation in quantitative investment. It constructed factor long-short returns for Shanghai Stock Exchange 50 constituents and used market-regime analysis plus prediction models to dynamically allocate factor weights.

### What It Does

- Builds monthly long-short factor return series for momentum, value, quality, volatility, and size factors.
- Identifies market regimes using index returns, volatility, and trading-volume features.
- Uses time-series modeling to predict next-period factor performance.
- Converts predicted factor returns into dynamic weights and compares the strategy against static and rule-based baselines through backtesting.

### Research Logic

The project follows a pipeline: market states exist, factor performance depends on those states, factor rotation is therefore meaningful, and dynamic weighting may improve risk-adjusted performance.

### Tech Stack

Python, Jupyter Notebook, NumPy, pandas, scikit-learn, LSTM experiments, factor backtesting workflow.

### Links

[GitHub Repository](https://github.com/XanderZhou2022/quant_investment_final_project)

---

[← Back to Projects](/projects/)
