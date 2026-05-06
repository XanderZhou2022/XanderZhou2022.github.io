---
layout: page
title: Quadratic Programming Solver Benchmarking
permalink: /projects/qp-solver-benchmarking/
description: Numerical optimization course project on QP solver implementation and benchmarking.
nav: false
---

## Quadratic Programming Solver Benchmarking

<img src="/assets/img/projects/qp-solver-benchmarking.png" alt="Quadratic programming solver convergence plots" class="img-fluid rounded z-depth-1 mb-4">

This 2024 numerical optimization course project studied quadratic programming (QP) solvers from both an algorithmic and empirical perspective. The project reviewed the evolution of modern QP optimizers, implemented representative methods, and benchmarked them against widely used open-source solvers.

### What It Does

- Implements IRWA (Iteratively Reweighted Algorithm) and ADAL (Alternating Direction Augmented Lagrangian) methods for QP problems.
- Generates random QP test cases and evaluates solver behavior under controlled settings.
- Benchmarks multiple solvers, including clarabel, cvxopt, daqp, ecos, highs, osqp, piqp, proxqp, qpalm, quadprog, and scs.
- Compares solution time, objective value, equality constraint violation, inequality constraint violation, numerical stability, and success rate.
- Visualizes convergence behavior, including step size, epsilon parameter, objective value, and per-iteration runtime.
- Reviews solver design trends across classical active-set methods, operator splitting, interior-point methods, and embedded optimization systems.

### My Work

- Co-developed the benchmarking framework and the custom solver implementation.
- Built experiments for random QP instances and cross-solver comparison.
- Analyzed solver behavior from speed, accuracy, and robustness perspectives.
- Prepared the project report and visualizations for the numerical optimization final project.

### Result

The benchmark found that solvers such as daqp, piqp, proxqp, and quadprog performed strongly in speed, while clarabel, cvxopt, daqp, and related solvers showed high numerical precision. The custom IRWA and ADAL implementations were slower in broad benchmarks but offered useful insight into convergence dynamics and algorithm design tradeoffs.

### Tech Stack

Python, NumPy, pandas, Matplotlib, qpsolvers, IRWA, ADAL, OSQP, CVXOPT, Clarabel.

---

[← Back to Projects](/projects/)
