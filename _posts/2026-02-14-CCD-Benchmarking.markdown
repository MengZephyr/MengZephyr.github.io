---
layout: post
title: Floating-Point Robustness in Parametric Surface Continuous Collision Detection: From Algorithm to Benchmarking
description: # Add post description (optional)
img: p12.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Publication]
---
<center>Xuwen Chen, Junyu Wang, Cheng Yu, Xingyu Ni, Meng Zhang, Bin Wang, Mengyu Chu, Baoquan Chen</center>

**SIGGRAPH 2026 **

## Abstract
Continuous Collision Detection is essential in simulation and modeling for accurately identifying object collisions. While robust CCD techniques have matured for triangle meshes, ensuring floating-point robustness for parametric surfaces remains an open challenge due to their representational complexity and heightened algorithmic sensitivity. In this paper, we present the first floating-point-robust CCD framework for parametric surfaces. Built on the Time-Dependent Inclusion-Based Method (TDIBM), our approach introduces a novel error decomposition strategy that separates coefficient and arithmetic errors, enabling structured analysis and safety guarantees. To rigorously benchmark robustness, we develop a rational arithmetic-based dataset by inverting the CCD process — we generate exact ground-truth datasets from prescribed collision outcomes. Our construction captures both typical scenarios and near-degenerate cases. We evaluate several CCD algorithms using this benchmark to provide an in-depth analysis. Together, our method and dataset establish a comprehensive foundation for analyzing, benchmarking, and improving floating-point robustness in parametric surface CCD. Code and dataset will be published upon acceptance.

[Paper](https://xw-c.github.io/publications/sig26CCDdataset.pdf){:target="_blank"}, <br />

## BibTex