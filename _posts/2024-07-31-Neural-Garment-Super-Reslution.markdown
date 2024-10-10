---
layout: post
title: Neural Garment Dynamic Super-Resolution
description: # Add post description (optional)
img: p9.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Publication]
---
<center>Meng Zhang(Corresponding author), Jun Li</center>

**Siggraph Asia 2024**

## Abstract
Achieving efficient, high-fidelity, high-resolution garment simulation is challenging due to its computational demands. Conversely, low-resolution garment simulation is more accessible and ideal for low-budget devices like smartphones. In this paper, we introduce a lightweight, learning-based method for garment dynamic super-resolution, designed to efficiently enhance high-resolution, high-frequency details in low-resolution garment simulations. Starting with low-resolution garment simulation and underlying body motion, we utilize a mesh-graph-net to compute super-resolution features based on coarse garment dynamics and garment-body interactions. These features are then used by a hyper-net to construct an implicit function of detailed wrinkle residuals for each coarse mesh triangle. Considering the influence of coarse garment shapes on detailed wrinkle performance, we correct the coarse garment shape and predict detailed wrinkle residuals using these implicit functions. Finally, we generate detailed high-resolution garment geometry by applying the detailed wrinkle residuals to the corrected coarse garment. Our method enables roll-out prediction by iteratively using its predictions as input for subsequent frames, producing fine-grained wrinkle details to enhance the low-resolution simulation. Despite training on a small dataset, our network robustly generalizes to different body shapes, motions, and garment types not present in the training data. We demonstrate significant improvements over state-of-the-art alternatives, particularly in enhancing the quality of high-frequency, fine-grained wrinkle details.


<!-- [Webpage](https://geometry.cs.ucl.ac.uk/projects/2022/MotionDeepGarment/){:target="_blank"}, <br />
[Code](https://github.com/MengZephyr/Motion-Guided-Deep-Dynamic-3D-Garment){:target="_blank"}, <br />
[Paper](https://arxiv.org/pdf/2209.11449.pdf){:target="_blank"}, <br />
[Supplementary video](https://www.youtube.com/watch?v=4CipJBkhg10){:target="_blank"}, <br />
[Fast Forward](https://www.youtube.com/watch?v=eDdhDJyzzcg){:target="_blank"}, <br />
[Paper talk](https://www.youtube.com/watch?v=qHpDg_mMMMA){:target="_blank"} -->


## BibTex
