---
layout: default
---

### Blogposts

<style>
  .blog-list { list-style: none; padding: 0; margin: 24px 0 0; }
  .blog-list > li {
    padding: 16px 0; border-bottom: 1px solid #e6e1d4;
  }
  .blog-list > li:last-child { border-bottom: none; }

  /* top-level row: thumbnail + title + dek */
  .blog-row {
    display: flex; align-items: center; gap: 20px;
  }
  .blog-row .thumb { flex: 0 0 180px; }
  .blog-row .thumb a {
    display: flex; align-items: center; justify-content: center;
    width: 180px; height: 110px;
    background: #ffffff;
    border: 1px solid #d8d3c4; border-radius: 4px;
    overflow: hidden;
  }
  .blog-row .thumb img {
    max-width: 96%; max-height: 96%;
    width: auto; height: auto;
    object-fit: contain; display: block;
  }
  .blog-row .title { line-height: 1.4; }
  .blog-row .title a {
    font-weight: 500; text-decoration: none; font-size: 1.05em;
  }
  .blog-row .title a:hover { text-decoration: underline; }
  .blog-row .meta {
    display: block; margin-top: 4px;
    font-size: 0.86em; color: #6c6960;
  }

  /* sub-blog group, nested under parent */
  .sublist {
    list-style: none; padding: 0;
    margin: 12px 0 0 200px;
    border-left: 2px solid #e6e1d4;
  }
  .sublist li {
    display: flex; align-items: center; gap: 12px;
    padding: 8px 0 8px 14px;
  }
  .sublist .icon {
    flex: 0 0 28px;
    width: 28px; height: 28px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; line-height: 1;
    background: #fbf7f0;
    border: 1px solid #d8d3c4; border-radius: 4px;
  }
  .sublist .title a {
    text-decoration: none; font-weight: 500; font-size: 0.97em;
  }
  .sublist .title a:hover { text-decoration: underline; }
  .sublist .meta {
    display: block; margin-top: 2px;
    font-size: 0.82em; color: #6c6960;
  }

  @media (max-width: 540px) {
    .blog-row { flex-direction: column; align-items: flex-start; }
    .blog-row .thumb, .blog-row .thumb a { width: 100%; max-width: 360px; height: auto; aspect-ratio: 16 / 10; }
    .sublist { margin-left: 12px; }
  }
</style>

<ul class="blog-list">

  <li>
    <div class="blog-row">
      <span class="thumb">
        <a href="./QLSP_PPA.html">
          <img src="./assets/img/QLSP_algorithm.png" alt="">
        </a>
      </span>
      <span class="title">
        <a href="./QLSP_PPA.html">A Catalyst Framework for the Quantum Linear System Problem via the Proximal Point Algorithm</a>
        <span class="meta">A classical-acceleration recipe — the proximal point algorithm — applied to quantum linear-system solvers.</span>
      </span>
    </div>
  </li>

  <li>
    <div class="blog-row">
      <span class="thumb">
        <a href="./QuantumEigenGame.html">
          <img src="./assets/img/qeig_system.png" alt="">
        </a>
      </span>
      <span class="title">
        <a href="./QuantumEigenGame.html">Quantum EigenGame for Excited-State Calculation</a>
        <span class="meta">A game-theoretic decomposition of eigenvalue problems for quantum simulation of excited states.</span>
      </span>
    </div>
  </li>

  <li>
    <div class="blog-row">
      <span class="thumb">
        <a href="./MaxKCut.html">
          <img src="./assets/img/combined_erdos_ratios.jpg" alt="">
        </a>
      </span>
      <span class="title">
        <a href="./MaxKCut.html">Exploiting Low-Rank Structure in Max-K-Cut Problems</a>
        <span class="meta">Algorithm overview, theoretical guarantees, and benchmarks for low-rank Max-3-Cut at scale.</span>
      </span>
    </div>

    <ul class="sublist">
      <li>
        <span class="icon">🖥️</span>
        <span class="title">
          <a href="./LowRankMaxCut_GPU.html">What Can 15 Obsolete GPUs Do for Combinatorial Optimization?</a>
          <span class="meta">GPU implementation, scaling experiments, interactive visualisations.</span>
        </span>
      </li>
      <li>
        <span class="icon">🧱</span>
        <span class="title">
          <a href="./LowRankMaxCut_Rank1.html">Rank-1 as a Building Block for Million-Node Max-3-Cut</a>
          <span class="meta">Incremental scoring, hybrid warm-starts, and extreme-scale experiments.</span>
        </span>
      </li>
      <li>
        <span class="icon">🎲</span>
        <span class="title">
          <a href="./LowRankMaxCut_RandR2.html">Randomized Rank-2: When Two Eigenvectors Beat One</a>
          <span class="meta">A 3-phase pipeline that beats SA on 6 of 12 graph families with constant sample complexity.</span>
        </span>
      </li>
      <li>
        <span class="icon">🔀</span>
        <span class="title">
          <a href="./LowRankMaxCut_DSatur.html">Spectral vs. Combinatorial: Two Views of Graph Structure</a>
          <span class="meta">A DSatur + spectral ensemble that beats SA on 11 of 13 graph families.</span>
        </span>
      </li>
    </ul>
  </li>

</ul>
