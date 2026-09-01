type PublicationLink = {
  label: string;
  href: string;
};

type Publication = {
  year: string;
  venue: string;
  title: string;
  authors: string;
  summary: string;
  image: string;
  links: PublicationLink[];
};

const publications: Publication[] = [
  {
    year: "2026",
    venue: "SIGGRAPH 2026",
    title: "LoBoFit: Flexible Garment Refitting via Local Bone Mapping Blending",
    authors:
      "Meng Zhang (Corresponding Author), Yu Xin, Feiya Guo, Kaizhang Kang, Mengyu Chu, Ruizhen Hu",
    summary:
      "A robust garment-refitting method that preserves design details and fine wrinkles across avatars with large shape, pose, and topology differences.",
    image: "/materials/p13.jpg",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2605.07450" },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=5HFVixi_ODg&t=1s",
      },
      {
        label: "Code",
        href: "https://github.com/MengZephyr/LoBoFit/tree/main",
      },
    ],
  },
  {
    year: "2026",
    venue: "SIGGRAPH 2026",
    title:
      "Floating-Point Robustness in Parametric Surface Continuous Collision Detection: From Algorithm to Benchmarking",
    authors:
      "Xuwen Chen, Junyu Wang, Cheng Yu, Xingyu Ni, Meng Zhang, Bin Wang, Mengyu Chu, Baoquan Chen",
    summary:
      "The first floating-point-robust continuous collision detection framework and exact benchmark for parametric surfaces.",
    image: "/materials/p12.jpg",
    links: [
      {
        label: "Paper",
        href: "https://xw-c.github.io/publications/sig26CCDdataset.pdf",
      },
    ],
  },
  {
    year: "2025",
    venue: "ICLR 2025",
    title: "Perm: A Parametric Representation for Multi-Style 3D Hair Modeling",
    authors:
      "Chengan He, Xin Sun, Zhixin Shu, Fujun Luan, Sören Pirk, Jorge Alejandro Amador Herrera, Dominik L. Michels, Tuanfeng Y. Wang, Meng Zhang, Holly Rushmeier, Yi Zhou",
    summary:
      "A learned parametric model that disentangles global hair shape and local strand detail for controllable multi-style 3D hair modeling.",
    image: "/materials/p10.jpg",
    links: [
      {
        label: "Project",
        href: "https://cs.yale.edu/homes/che/projects/perm/",
      },
      { label: "Code", href: "https://github.com/c-he/perm" },
      { label: "Paper", href: "https://arxiv.org/pdf/2407.19451" },
    ],
  },
  {
    year: "2024",
    venue: "SIGGRAPH Asia 2024 · Real-Time Live!",
    title: "Digital Salon: An AI and Physics-Driven Tool for 3D Hair Grooming and Simulation",
    authors:
      "Chengan He, Jorge Alejandro Amador Herrera, Yi Zhou, Zhixin Shu, Xin Sun, Yao Feng, Sören Pirk, Dominik L. Michels, Meng Zhang, Tuanfeng Y. Wang, Holly Rushmeier",
    summary:
      "An AI- and physics-driven tool that unifies text-based hair creation, interactive editing, simulation, and high-quality rendering.",
    image: "/materials/p11.jpg",
    links: [{ label: "Project", href: "https://digital-salon.github.io/" }],
  },
  {
    year: "2024",
    venue: "SIGGRAPH Asia 2024",
    title: "Neural Garment Dynamic Super-Resolution",
    authors: "Meng Zhang (Corresponding Author), Jun Li",
    summary:
      "A lightweight learning method that lifts inexpensive low-resolution garment simulations into detailed, high-resolution dynamics.",
    image: "/materials/p9.jpg",
    links: [
      {
        label: "Fast Forward",
        href: "https://www.youtube.com/watch?v=nHkh5UagBc0",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=CIbTsQkDWcs&t",
      },
      {
        label: "Code",
        href: "https://github.com/MengZephyr/Neural-Garment-Dynamic-Super-resolution/tree/main",
      },
      {
        label: "Paper",
        href: "https://github.com/MengZephyr/Neural-Garment-Dynamic-Super-resolution/blob/main/papers/GDSR_SIGA_2024.pdf",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=9cK-bMVARt4&t",
      },
    ],
  },
  {
    year: "2024",
    venue: "Eurographics SCA 2024",
    title: "Garment Animation NeRF with Color Editing",
    authors: "Renke Wang, Meng Zhang (Corresponding Author), Jun Li, Jian Yang",
    summary:
      "A neural rendering approach for synthesizing high-fidelity garment animation from body motion while supporting appearance recoloring.",
    image: "/materials/p8.jpg",
    links: [
      { label: "Code", href: "https://github.com/wrk226/GarmentAnimationNeRF" },
      { label: "Paper", href: "https://arxiv.org/pdf/2407.19774" },
    ],
  },
  {
    year: "2022",
    venue: "SIGGRAPH Asia 2022",
    title: "Motion Guided Deep Dynamic 3D Garments",
    authors: "Meng Zhang, Duygu Ceylan, Niloy J. Mitra",
    summary:
      "A motion-guided model for producing plausible dynamic garments that generalize to unseen body shapes and movements.",
    image: "/materials/7.jpg",
    links: [
      {
        label: "Project",
        href: "https://geometry.cs.ucl.ac.uk/projects/2022/MotionDeepGarment/",
      },
      {
        label: "Code",
        href: "https://github.com/MengZephyr/Motion-Guided-Deep-Dynamic-3D-Garment",
      },
      { label: "Paper", href: "https://arxiv.org/pdf/2209.11449.pdf" },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=4CipJBkhg10",
      },
      {
        label: "Fast Forward",
        href: "https://www.youtube.com/watch?v=eDdhDJyzzcg",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=qHpDg_mMMMA",
      },
    ],
  },
  {
    year: "2021",
    venue: "SIGGRAPH Asia 2021",
    title: "Dynamic Neural Garments",
    authors: "Meng Zhang, Duygu Ceylan, Tuanfeng Wang, Niloy J. Mitra",
    summary:
      "A model that jointly simulates and neurally renders dynamic garment appearance from body-joint motion and unseen viewpoints.",
    image: "/materials/p6.jpg",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2102.11811.pdf" },
      {
        label: "Project",
        href: "http://geometry.cs.ucl.ac.uk/projects/2021/DynamicNeuralGarments/",
      },
      {
        label: "Fast Forward",
        href: "https://www.youtube.com/watch?v=HmjUwt8bb1Q",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=UaB-_5v0Ckc&t",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=HN5uKRROmBs",
      },
      { label: "Code", href: "https://github.com/MengZephyr/DynamicNeuralGarments" },
    ],
  },
  {
    year: "2021",
    venue: "Eurographics 2021 · Honorable Mention Best Paper",
    title: "Deep Detail Enhancement for Any Garment",
    authors: "Meng Zhang, Tuanfeng Wang, Duygu Ceylan, Niloy J. Mitra",
    summary:
      "A data-driven detail-enhancement method that adds plausible high-frequency wrinkles to coarse garment geometry.",
    image: "/materials/p5.jpg",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2008.04367.pdf" },
      {
        label: "Project",
        href: "http://geometry.cs.ucl.ac.uk/projects/2021/DeepDetailEnhance/",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=zDdl3Ufbq50&t",
      },
      {
        label: "Talk",
        href: "https://www.youtube.com/watch?v=9kqQpnLZVb4&t",
      },
      {
        label: "Code",
        href: "https://github.com/MengZephyr/Deep-Detail-Enhancement-for-Any-Garment",
      },
    ],
  },
  {
    year: "2019",
    venue: "Visual Informatics 2019",
    title: "Hair-GANs: Recovering 3D Hair Structure from a Single Image",
    authors: "Meng Zhang, Youyi Zheng",
    summary:
      "A generative adversarial architecture that recovers a strand-guiding 3D volumetric hair field from a single photograph.",
    image: "/materials/p4.jpg",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/1811.06229.pdf" },
      { label: "Code", href: "https://github.com/MengZephyr/HairGANs" },
    ],
  },
  {
    year: "2018",
    venue: "SIGGRAPH Asia 2018",
    title: "Modeling Hair from an RGB-D Camera",
    authors: "Meng Zhang, Pan Wu, Hongzhi Wu, Yanlin Wen, Youyi Zheng, Kun Zhou",
    summary:
      "A fully automatic data-driven pipeline for reconstructing complete strand-level hair models from a single RGB-D camera.",
    image: "/materials/p3.jpg",
    links: [],
  },
  {
    year: "2017",
    venue: "SIGGRAPH 2017",
    title: "A Data-driven Approach to Four-view Image-based Hair Modeling",
    authors: "Meng Zhang, Menglei Chai, Hongzhi Wu, Hao Yang, Kun Zhou",
    summary:
      "A four-view image-based method that reconstructs convincing strand-level 3D hair without requiring all views to show the same hairstyle.",
    image: "/materials/p2.jpg",
    links: [{ label: "Paper", href: "http://www.kunzhou.net/2017/4viewhair.pdf" }],
  },
  {
    year: "2012",
    venue: "Electronics Letters 2012",
    title: "Horizontal Plane Detection from 3D Point Clouds of Buildings",
    authors: "Meng Zhang, Guang Jiang, Chengke Wu, Long Quan",
    summary:
      "A simple and robust method for directly extracting a horizontal plane from architectural 3D point clouds.",
    image: "/materials/p1.jpg",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/6222090/",
      },
    ],
  },
];

const interests = ["Physics simulation", "Digital garments", "3D hair", "Neural rendering"];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Meng Zhang — home">
          <span className="couple-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>Meng Zhang</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#group">Group</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Computer graphics · Nanjing</p>
          <h1>
            Meng Zhang <span>(Zephyr)</span>
          </h1>
          <div className="hero-intro">
            <p>
              I am an Associate Professor at the School of Computer Science and
              Engineering, {" "}
              <a href="https://english.njust.edu.cn/" target="_blank" rel="noreferrer">
                Nanjing University of Science and Technology
              </a>
              {", China. From August 2019 to July 2022, I was a Postdoctoral Researcher with "}
              <a
                href="http://www0.cs.ucl.ac.uk/staff/n.mitra/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Niloy Mitra
              </a>{" "}
              in the {" "}
              <a
                href="http://geometry.cs.ucl.ac.uk/people.php"
                target="_blank"
                rel="noreferrer"
              >
                Smart Geometry Processing Group
              </a>
              {", University College London. I received my Ph.D. in 2019 from Zhejiang University, advised by "}
              <a href="http://kunzhou.net/" target="_blank" rel="noreferrer">
                Prof. Kun Zhou
              </a>
              {", and earned my Bachelor’s (2010) and Master’s (2013) degrees from the School of Telecommunications Engineering, Xidian University."}
            </p>
            <p>
              My research lies in computer graphics, with a recent focus on {" "}
              <strong>
                physics simulation, modeling, rendering, and editing
              </strong>
              {". My work has been published in leading venues in computer graphics, including ACM SIGGRAPH and SIGGRAPH Asia, and I have also served on the SIGGRAPH Asia Technical Papers Committee multiple times. Beyond research, I enjoy reading, traveling, playing badminton, and working on DIY projects."}
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#group">
              Explore more <span aria-hidden="true">↓</span>
            </a>
            <a className="button quiet" href="mailto:lynnzephyr@gmail.com">
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-photo-stack">
          <figure className="hero-photo" aria-label="Meng Zhang in Banff">
            <img
              className="hero-photo-image"
              src="/materials/TravelBanff_202508.jpg"
              alt="Meng Zhang travelling in Banff"
            />
            <figcaption>
              Banff · 2025 · Photo by{" "}
              <a href="https://cocoakang.cn/" target="_blank" rel="noreferrer">
                Kaizhang Kang
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ticker" aria-label="Research interests">
        <div className="ticker-track">
          {interests.map((interest) => (
            <span key={interest}>
              {interest} <i aria-hidden="true">✦</i>
            </span>
          ))}
          {interests.map((interest) => (
            <span key={`echo-${interest}`} aria-hidden="true">
              {interest} <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="group shell" id="group">
        <div className="section-heading group-heading">
          <div className="section-kicker">
            <span>01</span>
            <p>Our Group</p>
          </div>
          <h2>Smart Physics Group</h2>
        </div>

        <div className="group-body">
          <figure className="group-photo">
            <img
              src="/materials/smart-physics-group.jpg"
              alt="Members of the Smart Physics Group together at a conference"
              loading="lazy"
            />
          </figure>

          <div className="group-copy">
            <p>
              I am building the <strong>Smart Physics Group</strong> — a place where
              curiosity meets persistence and creativity. Our vision is to foster a
              supportive and collaborative academic environment that encourages
              exploration and growth. Students who join us are expected to stay
              curious, remain strongly self-motivated, and approach challenges with
              resilience and courage.
            </p>
            <p className="group-motto">
              <strong>
                Curiosity, courage, and persistence — the pillars on which innovation
                stands.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="publications shell" id="publications">
        <div className="section-heading publication-heading">
          <div>
            <div className="section-kicker">
              <span>02</span>
              <p>Research</p>
            </div>
            <h2>Publications</h2>
          </div>
        </div>

        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <div className="publication-inner">
                <div className="paper-visual">
                  <img
                    src={publication.image}
                    alt={`Teaser for ${publication.title}`}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="paper-copy">
                  <div className="paper-meta">
                    <span>{publication.year}</span>
                    <span>{publication.venue}</span>
                  </div>
                  <h3>{publication.title}</h3>
                  <p className="paper-authors">{publication.authors}</p>
                  <p className="paper-summary">{publication.summary}</p>
                  {publication.links.length > 0 && (
                    <div className="paper-links" aria-label={`Resources for ${publication.title}`}>
                      {publication.links.map((link) => (
                        <a key={`${publication.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="paper-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div>
          <p className="eyebrow">Let’s make something move</p>
          <h2>Research starts with a good conversation.</h2>
        </div>
        <a className="contact-link" href="mailto:lynnzephyr@gmail.com">
          <span>lynnzephyr@gmail.com</span>
          <i aria-hidden="true">↗</i>
        </a>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 Meng Zhang (Zephyr)</p>
        <p className="footer-credit">Co-designed with ChatGPT ✦</p>
      </footer>
    </main>
  );
}
