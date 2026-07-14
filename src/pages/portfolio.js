import React, { useState, useEffect } from "react";
import { Seo } from "../components/seo";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";

const FILTERS = [
  { key: "all", label: "All examples" },
  { key: "ai-tooling-design", label: "AI tooling design" },
  { key: "content-design", label: "Content design" },
  { key: "ux-design", label: "UX design" },
  { key: "leadership", label: "Leadership" }
];

const TAG_LABELS = {
  "ai-tooling-design": "AI tooling design",
  "content-design": "Content design",
  "ux-design": "UX design",
  leadership: "Leadership"
};

const PortfolioPage = ({ data, location }) => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const f = params.get("filter");
    if (f && FILTERS.some(({ key }) => key === f)) {
      setFilter(f);
    }
  }, [location.search]);

  const allItems = data.allPortfolioJson.nodes;
  const visibleItems =
    filter === "all"
      ? allItems
      : allItems.filter((item) => item.tags.includes(filter));

  return (
    <Layout>
      <ContentWidth>
        <section>
          <div className="column">
            <h1>Portfolio of work</h1>
            <p>
              My work spans three main areas: <strong>AI tooling design</strong>
              , <strong>content design</strong>, and <strong>UX design</strong>.
              Many projects also involve a <strong>leadership</strong> dimension
              — setting standards, building communities, or creating tools that
              scale good practice across large organisations.
            </p>
            <p>
              <em>
                Related content:{" "}
                <Link to="/experience">experience and skills</Link>,{" "}
                <Link to="/testimonials">testimonials</Link>, and{" "}
                <Link to="/articles">articles</Link>.
              </em>
            </p>
          </div>
        </section>

        <section className="row">
          <div className="filterButtonContainer" id="myBtnContainer">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                className={`btn ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-grid">
          {visibleItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </section>
      </ContentWidth>
    </Layout>
  );
};

// Renders a bullet string, turning [[label|url]] markers into <a> tags.
const renderBullet = (text) => {
  const parts = text.split(/(\[\[.+?\|.+?\]\])/);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[(.+?)\|(.+?)\]\]$/);
    if (match) {
      return (
        <a key={i} href={match[2]} rel="noopener noreferrer" target="_blank">
          {match[1]}
        </a>
      );
    }
    return part;
  });
};

const PortfolioCard = ({ item }) => {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__image-wrap">
        <img
          alt={item.imageAlt}
          className="portfolio-card__image"
          src={`/images/portfolio/${item.image}`}
        />
      </div>
      <p className="portfolio-card__caption">{item.caption}</p>
      <div className="portfolio-card__body">
        <div className="portfolio-card__tags">
          {item.tags.map((tag) => (
            <span key={tag} className={`portfolio-tag portfolio-tag--${tag}`}>
              {TAG_LABELS[tag]}
            </span>
          ))}
        </div>
        <h2 className="portfolio-card__title">{item.title}</h2>
        <p className="portfolio-card__subtitle">{item.subTitle}</p>
        <ul className="portfolio-card__bullets">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{renderBullet(bullet)}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const query = graphql`
  {
    allPortfolioJson {
      nodes {
        title
        subTitle
        image
        imageAlt
        caption
        tags
        bullets
      }
    }
  }
`;

export default PortfolioPage;

export const Head = () => (
  <Seo
    description="Portfolio of AI tooling design, content design, and UX design work by Tom Waterton, Senior UX / Content Designer at IBM."
    title="Portfolio – Tom Waterton"
  />
);
