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
                aria-pressed={filter === "all"}
                className={filter === "all" ? "btn active" : "btn"}
                onClick={() => setFilter("all")}
                type="button"
              >
                All articles
              </button>
              <button
                aria-pressed={filter === "brewing"}
                className={filter === "brewing" ? "btn active" : "btn"}
                onClick={() => setFilter("brewing")}
                type="button"
              >
                Brewing
              </button>
              <button
                aria-pressed={filter === "comms"}
                className={filter === "comms" ? "btn active" : "btn"}
                onClick={() => setFilter("comms")}
                type="button"
              >
                Communication
              </button>
              <button
                aria-pressed={filter === "content"}
                className={filter === "content" ? "btn active" : "btn"}
                onClick={() => setFilter("content")}
                type="button"
              >
                Content
              </button>
              <button
                aria-pressed={filter === "culture"}
                className={filter === "culture" ? "btn active" : "btn"}
                onClick={() => setFilter("culture")}
                type="button"
              >
                Culture
              </button>
              <button
                aria-pressed={filter === "design"}
                className={filter === "design" ? "btn active" : "btn"}
                onClick={() => setFilter("design")}
                type="button"
              >
                Design
              </button>
              <button
                aria-pressed={filter === "growth"}
                className={filter === "growth" ? "btn active" : "btn"}
                onClick={() => setFilter("growth")}
                type="button"
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
              decoding="async"
              height="500"
              loading="lazy"
              src={`/images/articles/${image}`}
              width="1000"
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
