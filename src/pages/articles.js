import React, { useState } from "react";
import { Seo } from "../components/seo";
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
        article.categories.includes(filter)
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
        <section className="row">
          <div className="flex float-right" id="myBtnContainer">
            <div className="filterButtonContainer">
              <button
                className={`btn ${filter === "all" ? "active" : null}`}
                onClick={() => setFilter("all")}
              >
                All articles
              </button>
              <button
                className={`btn ${filter === "brewing" ? "active" : null}`}
                onClick={() => setFilter("brewing")}
              >
                Brewing
              </button>
              <button
                className={`btn ${filter === "comms" ? "active" : null}`}
                onClick={() => setFilter("comms")}
              >
                Communication
              </button>
              <button
                className={`btn ${filter === "content" ? "active" : null}`}
                onClick={() => setFilter("content")}
              >
                Content
              </button>
              <button
                className={`btn ${filter === "culture" ? "active" : null}`}
                onClick={() => setFilter("culture")}
              >
                Culture
              </button>
              <button
                className={`btn ${filter === "design" ? "active" : null}`}
                onClick={() => setFilter("design")}
              >
                Design
              </button>
              <button
                className={`btn ${filter === "growth" ? "active" : null}`}
                onClick={() => setFilter("growth")}
              >
                Growth
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
  <Seo
    description="Articles about content design, communication, UX design, culture, growth, and brewing written by Tom Waterton."
    title="Articles – Tom Waterton"
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
          <a href={url} rel="noopener noreferrer" target="_blank">
            <img
              alt={`Thumbnail for: ${title}`}
              className="article-thumbnail"
              src={`/images/articles/${image}`}
            />
          </a>
        </div>

        <div className="c-article-tile__body">
          <div>
            <h2 className="c-article-tile__title" itemProp="headline">
              <a href={url} rel="noopener noreferrer" target="_blank">
                {title}
              </a>
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
