---
layout: post
title: Dynamic Neural Garments
description: # Add post description (optional)
img: p6.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Publication]
---
<center>Meng Zhang, Duygu Ceylan, Tuanfeng Wang, Niloy J. Mitra</center>

**Siggraph Asia 2021 (Conditional accept)**

## Abstract
A vital task of the wider digital human effort is the creation of realistic garments on digital avatars, both in the form of characteristic fold patterns and wrinkles in static frames as well as richness of garment dynamics under avatars' motion. Existing workflow of modeling, simulation, and rendering closely replicates the physics behind real garments, but is tedious and requires repeating most of the workflow under changes to characters' motion, camera angle, or garment resizing. Although data-driven solutions exist, they either focus on static scenarios or only handle dynamics of tight garments. We present a solution that, at test time, takes in body joint motion to directly produce realistic dynamic garment image sequences. Specifically, given the target joint motion sequence of an avatar, we propose dynamic neural garments to jointly simulate and render plausible dynamic garment appearance from an unseen viewpoint. Technically, our solution generates a coarse garment proxy sequence, learns deep dynamic features attached to this template, and neurally renders the features to produce appearance changes such as folds, wrinkles, and silhouettes. We demonstrate generalization behavior to both unseen motion and unseen camera views. Further, our network can be fine-tuned to adopt to new body shape and/or background images. We also provide comparisons against existing neural rendering and image sequence translation approaches, and report clear quantitative improvements.  

[Pdf](https://arxiv.org/pdf/2102.11811.pdf){:target="_blank"}, <br />
[Webpage](http://geometry.cs.ucl.ac.uk/projects/2021/DynamicNeuralGarments/){:target="_blank"}, <br />
[Fastforward](https://www.youtube.com/watch?v=HmjUwt8bb1Q){:target="_blank"}, <br />
[Supplementary video](https://www.youtube.com/watch?v=UaB-_5v0Ckc&t){:target="_blank"}, <br />
[Paper talk](https://www.youtube.com/watch?v=HN5uKRROmBs){:target="_blank"}, <br />
[Code](https://github.com/MengZephyr/DynamicNeuralGarments){:target="_blank"}

## BibTex
