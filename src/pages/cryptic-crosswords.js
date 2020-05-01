import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import crossword_07_thumbnail from "../images/crosswords/crossword_07_thumbnail.png";
import crossword_06_thumbnail from "../images/crosswords/crossword_06_thumbnail.png";
import crossword_05_thumbnail from "../images/crosswords/crossword_05_thumbnail.png";
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
          <Link to="/cryptic-crosswords/07">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_07_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/07">Cryptic crossword #7</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              <em>Flowers scorned by vegans? (9)</em>
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                May 2020
            </date>
          </footer>
        </article>
      </li>


    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/cryptic-crosswords/06">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_06_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/06">Cryptic crossword #6</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              <em>Protection for standing assets? (4,4)</em>
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Apr 2020
            </date>
          </footer>
        </article>
      </li>


    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/cryptic-crosswords/05">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_05_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/05">Cryptic crossword #5</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              <em>Lied about being busy? (4)</em>
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Mar 2020
            </date>
          </footer>
        </article>
      </li>


    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/cryptic-crosswords/04">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_04_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/04">Cryptic crossword #4</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              <em>Orders Gay Times? (8)</em>
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
          <Link to="/cryptic-crosswords/03">
            <img
              className="article-thumbnail crossword-thumbnail"
              alt="Crossword image"
              src={crossword_03_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
            <Link to="/cryptic-crosswords/03">Cryptic crossword #3</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              <em>Film actor without lead part (5)</em>
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
          <Link to="/cryptic-crosswords/02">
            <img className="article-thumbnail crossword-thumbnail"
                alt="Crossword image"
                src={crossword_02_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/02">Cryptic crossword #2</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                <em>Bar king before trouble (4)</em>
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
          <Link to="/cryptic-crosswords/01">
            <img className="article-thumbnail crossword-thumbnail"
                alt="Crossword image"
                src={crossword_01_thumbnail}
              />
          </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/cryptic-crosswords/01">Cryptic crossword #1</Link>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                <em>Immorally desire just this (8)</em>
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
