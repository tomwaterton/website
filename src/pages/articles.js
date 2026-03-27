import React, { useState } from "react";
import { SEO } from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";

const ArticlesPage = ({ data }) => {
  const [filter, setFilter] = useState("all");

  const whichArticlesToRender = () => {
    const allArticles = data.allArticlesJson.nodes;
    let articlesToRenderArray;
    if (filter === "all") {
      articlesToRenderArray = allArticles;
    } else {
      articlesToRenderArray = allArticles.filter((article) =>
        article.categories.includes(filter),
      );
    }
    return articlesToRenderArray;
  };

  return (
    <Layout>
      <ContentWidth>
        <section>
          <div className="column">
            <h1>Articles</h1>
          </div>
        </section>
        <section className="row xs:hidden">
          <div className="flex float-right" id="myBtnContainer">
            <div className="filterButtonContainer">
              <button
                className={`btn ${filter === "all" ? "active" : null}`}
                onClick={() => setFilter("all")}
              >
                all articles
              </button>
              <button
                className={`btn ${filter === "brewing" ? "active" : null}`}
                onClick={() => setFilter("brewing")}
              >
                brewing
              </button>
              <button
                className={`btn ${filter === "comms" ? "active" : null}`}
                onClick={() => setFilter("comms")}
              >
                communication
              </button>
              <button
                className={`btn ${filter === "content" ? "active" : null}`}
                onClick={() => setFilter("content")}
              >
                content
              </button>
              <button
                className={`btn ${filter === "culture" ? "active" : null}`}
                onClick={() => setFilter("culture")}
              >
                culture
              </button>
              <button
                className={`btn ${filter === "design" ? "active" : null}`}
                onClick={() => setFilter("design")}
              >
                design
              </button>
              <button
                className={`btn ${filter === "growth" ? "active" : null}`}
                onClick={() => setFilter("growth")}
              >
                growth
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <ul className="c-tile-list">
            <RenderArticles articles={whichArticlesToRender()} />
          </ul>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export const query = graphql`
  {
    allArticlesJson {
      nodes {
        title
        subTitle
        url
        image
        mins
        date
        categories
      }
    }
  }
`;

export default ArticlesPage;

export const Head = () => (
  <SEO
    description="Articles about content design, communication, culture, and growth written by Tom Waterton"
    title="Tom Waterton's website: Articles"
  />
);

const RenderArticles = ({ articles }) => {
  return articles.map((article) => (
    <ArticleTile
      date={article.date}
      image={article.image}
      key={article.title}
      mins={article.mins}
      subTitle={article.subTitle}
      title={article.title}
      url={article.url}
    />
  ));
};

const ArticleTile = ({ title, subTitle, url, image, mins, date }) => {
  return (
    <li className="c-tile-list__item">
      <article
        className="c-article-tile col3"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="c-article-tile__header">
          <a href={url}>
            <img
              alt="Article thumbnail"
              className="article-thumbnail"
              src={`../images/articles/${image}`}
            />
          </a>
        </div>

        <div className="c-article-tile__body">
          <div>
            <h2 className="c-article-tile__title" itemProp="headline">
              <a href={url}>{title}</a>
            </h2>
            <p className="article-subhead">{subTitle}</p>
          </div>
        </div>

        <footer className="c-article-tile__footer">
          <span className="c-article-tile__read-time" itemProp="readTime">
            {mins} min read
          </span>

          <span className="c-article-tile__date" itemProp="datePublished">
            {date}
          </span>
        </footer>
      </article>
    </li>
  );
};
