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
        keywords={[`cryptic`, `crosswords`, `tom`, `waterton`]}
        title="Cryptic crosswords"
      />

  <section className="row">
    <div className="column">
      <h1>Cryptic crosswords</h1>
      <p className="description">Some cryptic crosswords that I've created (under the pseudonym 'Meles').</p>
    </div>
  </section>

  <section className="flex flex-col md:flex-row items-center padding-bottom">

    <ul className="c-tile-list">

      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="/crosswords/03" target="_blank">
            <img
              className="article-thumbnail"
              alt="Crossword image"
              src={crossword_03_thumbnail}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="/crosswords/03" target="_blank">
                Cryptic crossword #3</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                Difficulty: Medium
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Dec 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="/crosswords/02" target="_blank">
            <img className="article-thumbnail"
                alt="Crossword image"
                src={crossword_02_thumbnail}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="/crosswords/02" target="_blank">
              Cryptic crossword #2</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                Difficulty: Medium
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Aug 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="/crosswords/01" target="_blank">
            <img className="article-thumbnail"
                alt="Crossword image"
                src={crossword_01_thumbnail}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="/crosswords/01" target="_blank">
              Cryptic crossword #1</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                Difficulty: Easy
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jul 2019
            </date>
          </footer>
        </article>
      </li>

    </ul>
  </section>

  <section className="row">
    <div className="column medium-text">
      <p>If you have any feedback on any of my crosswords or would like clues or answers, 
      do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crosswords">get in touch</a> with me.</p>
    </div>
  </section>


    </Layout>
  );
}

export default CrypticCrosswordsPage;
