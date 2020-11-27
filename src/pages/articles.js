import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import article_14_Illustration from "../images/articles/article_thumbnail_14.jpg";
import article_13_Illustration from "../images/articles/article_thumbnail_13.jpg";
import article_12_Illustration from "../images/articles/article_thumbnail_12.jpg";
import article_11_Illustration from "../images/articles/article_thumbnail_11.jpg";
import article_10_Illustration from "../images/articles/article_thumbnail_10.jpg";
import article_9_Illustration from "../images/articles/article_thumbnail_9.jpeg";
import article_8_Illustration from "../images/articles/article_thumbnail_8.jpg";
import article_7_Illustration from "../images/articles/article_thumbnail_7.jpg";
import article_6_Illustration from "../images/articles/article_thumbnail_6.png";
import article_5_Illustration from "../images/articles/article_thumbnail_5.png";
import article_4_Illustration from "../images/articles/article_thumbnail_4.png";
import article_3_Illustration from "../images/articles/article_thumbnail_3.jpg";
import article_2_Illustration from "../images/articles/article_thumbnail_2.jpg";
import article_1_Illustration from "../images/articles/article_thumbnail_1.jpg";

function ArticlesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`articles`, `tom`, `waterton`, `content`, `design`]}
        title="Articles"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Articles</h1>
      <p className="description">Some of my recent articles.</p>
    </div>
  </section>


  <section className="flex flex-col md:flex-row items-center padding-bottom">

    <ul className="c-tile-list">

    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/the-danger-of-being-too-safe-8266babc3c0c">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_14_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/the-danger-of-being-too-safe-8266babc3c0c">
              The danger of being too safe</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              7 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Oct 05, 2020
            </date>
          </footer>
        </article>
      </li>


    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/towards-more-radical-collaboration-a02c21837c5b">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_13_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/towards-more-radical-collaboration-a02c21837c5b">
              Towards more radical collaboration</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              10 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Mar 20, 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/articles/Brewing_a_Mayflower_pale_ale.pdf">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_12_Illustration}
          />
        </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <Link to="/articles/Brewing_a_Mayflower_pale_ale.pdf">
              Brewing a Mayflower pale ale</Link><br/><span className="article-subhead">(Article for Variable magazine)</span>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              6 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Feb 28, 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_11_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">
              Confessions of a content designer</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              10 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jun 18, 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/on-content-design-d8f9830ff302">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_10_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/on-content-design-d8f9830ff302">
              On Content Design</a><br/><span className="article-subhead">(A poem)</span>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              3 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Feb 11, 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_9_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53">
              How to punctuate like a pro</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              9 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Oct 20, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/taking-responsibility-for-our-communication-b677100d61f5">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_8_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/taking-responsibility-for-our-communication-b677100d61f5">
              Taking responsibility for our communication</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              7 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jul 20, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/why-i-read-d044f8a01015">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_7_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/why-i-read-d044f8a01015">
              Why I read</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              8 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              May 02, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <Link to="/articles/The_creation_of_a_studio.pdf">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_6_Illustration}
              />
        </Link>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
            <Link to="/articles/The_creation_of_a_studio.pdf">
              The creation of a studio</Link><br/><span className="article-subhead">(Article for Variable magazine)</span>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              4 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Apr, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/failing-fast-using-feedback-loops-and-the-benefits-of-iterative-design-e0b86d037f50">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_5_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/failing-fast-using-feedback-loops-and-the-benefits-of-iterative-design-e0b86d037f50">
              Failing fast, using feedback loops, and the benefits of iterative design</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              8 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Feb 20, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/how-to-emphasize-key-words-in-your-text-b8738f146972">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_4_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/how-to-emphasize-key-words-in-your-text-b8738f146972">
              How to emphasize key words in your text</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              6 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Sep 13, 2017
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/design-ibm/creating-a-culture-of-design-dfb9a36623b3">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_3_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/design-ibm/creating-a-culture-of-design-dfb9a36623b3">
              Creating a culture of design</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              9 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jun 08, 2017
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/whats-your-passion-c570374a8810">
            <img className="article-thumbnail"
                alt="Article image"
                src={article_2_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/whats-your-passion-c570374a8810">
              What’s your passion?</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              4 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jul 18, 2016
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://medium.com/@tomwaterton/tell-me-a-story-a809032e95d5">
          <img className="article-thumbnail"
          alt="Article image"
          src={article_1_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/tell-me-a-story-a809032e95d5">
              Tell me a story</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              4 min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jul 03, 2016
            </date>
          </footer>
        </article>
      </li>

    </ul>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default ArticlesPage;
