import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import crossword_03_thumbnail from "../images/crosswords/crossword_03_thumbnail.png";
import crossword_02_thumbnail from "../images/crosswords/crossword_02_thumbnail.png";
import crossword_01_thumbnail from "../images/crosswords/crossword_01_thumbnail.png";


function CrypticCrosswordsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Cryptic crosswords"
      />

  <section class="row">
    <div class="column">
      <h1>Cryptic crosswords</h1>
      <p class="description">Some cryptic crosswords that I've created.</p>
    </div>
  </section>

  <section className="flex flex-col md:flex-row items-center padding-bottom">

    <ul class="c-tile-list">

      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="/crossword_03" target="_blank">
            <img
              class="article-thumbnail"
              alt="Crossword image"
              src={crossword_03_thumbnail}
              />
            </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="/crossword_03" target="_blank">
                Cryptic crossword #3</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                Difficulty: Medium
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
                Dec 2019
            </date>
          </footer>
        </article>
      </li>


      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="/crossword_02" target="_blank">
            <img class="article-thumbnail"
                alt="Crossword image"
                src={crossword_02_thumbnail}
              />
            </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="/crossword_02" target="_blank">
              Cryptic crossword #2</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                Difficulty: Medium
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
                Aug 2019
            </date>
          </footer>
        </article>
      </li>


      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="/crossword_01" target="_blank">
            <img class="article-thumbnail"
                alt="Crossword image"
                src={crossword_01_thumbnail}
              />
        </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="/crossword_01" target="_blank">
              Cryptic crossword #1</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                Difficulty: Easy
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
              Jul 2019
            </date>
          </footer>
        </article>
      </li>

    </ul>
  </section>

  <section class="row">
    <div class="column">
      <p class="description">If you have any feedback on any of my crosswords or would like clues or answers, 
      do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword">get in touch</a> with me.</p>
    </div>
  </section>


    </Layout>
  );
}

export default CrypticCrosswordsPage;
