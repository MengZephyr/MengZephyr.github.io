---
layout: post
title: Motion Guided Deep Dynamic 3D Garments
description: # Add post description (optional)
img: 7.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Publication]
---
<center>Meng Zhang, Duygu Ceylan, Niloy J. Mitra</center>

**Siggraph Asia 2022**

## Abstract
Realistic dynamic garments on animated characters have many AR/VR applications.
While authoring such dynamic garment geometry is still a challenging
task, data-driven simulation provides an attractive alternative, especially
if it can be controlled simply using the motion of the underlying character.
In this work, we focus on motion guided dynamic 3D garments, especially
for loose garments. In a data-driven setup, we first learn a generative space
of plausible garment geometries. Then, we learn a mapping to this space to
capture the motion dependent dynamic deformations, conditioned on the
previous state of the garment as well as its relative position with respect to
the underlying body. Technically, we model garment dynamics, driven using
the input character motion, by predicting per-frame local displacements
in a canonical state of the garment that is enriched with frame-dependent
skinning weights to bring the garment to the global space. We resolve any
remaining per-frame collisions by predicting residual local displacements.
The resultant garment geometry is used as history to enable iterative roll-out
prediction. We demonstrate plausible generalization to unseen body shapes
and motion inputs, and show improvements over multiple state-of-the-art
alternatives.


[Webpage](https://geometry.cs.ucl.ac.uk/projects/2022/MotionDeepGarment/){:target="_blank"}, <br />
[Code](https://github.com/MengZephyr/Motion-Guided-Deep-Dynamic-3D-Garment){:target="_blank"}

## BibTex
