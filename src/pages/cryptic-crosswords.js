import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import crossword_04_thumbnail from "../images/crosswords/crossword_04_thumbnail.png";
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

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Cryptic crosswords</h1>
      <p className="description">Some cryptic crosswords that I've composed (under the pseudonym 'Meles').</p>
    </div>
  </section>

  <section className="flex flex-col md:flex-row items-center padding-bottom">

    <ul className="c-tile-list">

    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/crosswords/04">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_04_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/crosswords/04">Cryptic crossword #4</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                Difficulty: Medium
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Feb 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/crosswords/03">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_03_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
            <Link to="/crosswords/03">Cryptic crossword #3</Link>
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
          <Link to="/crosswords/02">
            <img className="article-thumbnail crossword-thumbnail"
                alt="Crossword image"
                src={crossword_02_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/crosswords/02">Cryptic crossword #2</Link>
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
          <Link to="/crosswords/01">
            <img className="article-thumbnail crossword-thumbnail"
                alt="Crossword image"
                src={crossword_01_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/crosswords/01">Cryptic crossword #1</Link>
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

  </ContentWidth>
    </Layout>
  );
}

export default CrypticCrosswordsPage;