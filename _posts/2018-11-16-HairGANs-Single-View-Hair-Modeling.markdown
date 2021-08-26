---
layout: post
title: "Hair-GANs: Recovering 3D Hair Structure from a Single Image"
description: # Add post description (optional)
img: p4.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Publication]
---
<center>Meng Zhang and Youyi Zheng </center>

**Visual Informatics 2019**

## Abstract
We introduce *Hair-GANs*, an architecture of generative adversarial networks, to recover the 3D hair structure from a single image. The goal of our networks is to build a parametric transformation from 2D hair maps to 3D hair structure. The 3D hair structure is represented as a 3D volumetric field which encodes both the occupancy and the orientation information of the hair strands. Given a single hair image, we first align it with a bust model and extract a set of 2D maps encoding the hair orientation information in 2D, along with the bust depth map to feed into our *Hair-GANs*. With our generator network, we compute the 3D volumetric field as the structure guidance for the final hair synthesis. The modeling results not only resemble the hair in the input image but also possesses many vivid details in other views. The efficacy of our method is demonstrated by using a variety of hairstyles and comparing with the prior art.

[Pdf](https://arxiv.org/pdf/1811.06229.pdf){:target="_blank"}
[Code](https://github.com/MengZephyr/HairGANs){:target="_blank"}


## BibTex
@article{zhang2019hair,
  title={Hair-GAN: Recovering 3D hair structure from a single image using generative adversarial networks},
  author={Zhang, Meng and Zheng, Youyi},
  journal={Visual Informatics},
  volume={3},
  number={2},
  pages={102--112},
  year={2019},
  publisher={Elsevier}
}


