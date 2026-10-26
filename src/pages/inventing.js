import React from "react";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import AnimatedCount from "../components/animatedCount";
import MI_certificate from "../images/inventing/MI_award_framed.png";
import MI_digital_badge from "../images/inventing/IBM_Master_Inventor.png";

const PatentsPage = ({ data }) => {
  const patents = data.allPatentsJson.nodes;
  const otherInventions = data.allOtherInventionsJson.nodes;
  const pendingCount = patents.filter((patent) => patent.pending).length;
  const grantedCount = patents.length - pendingCount;

  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1 id="top">Inventing</h1>
            <p>
              <em>
                I&apos;ve always enjoyed problem solving and inventing. This
                page lists some of my technical inventions. My Google Scholar
                profile can be found{" "}
                <a
                  href="https://scholar.google.com/citations?user=9tBYOcgAAAAJ&hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </a>
                .
              </em>
            </p>
            <ul className="ul-small do-not-print">
              <li>
                <a href="#patents">Patents</a>
              </li>
              <li>
                <a href="#other-inventions">Other (non-patented) inventions</a>
              </li>
              <li>
                <a href="#master-inventor">An IBM Master Inventor</a>
              </li>
            </ul>
          </div>
          <div className="column inventing-photo-column">
            <img
              alt="My IBM Master Inventor framed certificate"
              className="block tilt-portrait-right"
              src={MI_certificate}
            />
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="patents"></div>
            <h2>Patents</h2>
            <p className="itemCount">
              <AnimatedCount value={patents.length} />{" "}
              {patents.length === 1 ? "patent" : "patents"} ({grantedCount}{" "}
              granted; {pendingCount} pending)
            </p>
          </div>
        </section>

        <section className="flex flex-col padding-bottom">
          <ul className="c-tile-list">
            <RenderPatents patents={data.allPatentsJson.nodes} />
          </ul>
          <div className="backToTop">
            <a href="#top">&uarr; Back to top</a>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="other-inventions"></div>
            <h2>Other (non-patented) inventions</h2>
            <p>
              <em>
                I&apos;ve also had a number of other technical inventions
                published on{" "}
                <a
                  href="https://ip.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IP.com
                </a>
                .
              </em>
            </p>
            <p className="itemCount">
              <AnimatedCount value={otherInventions.length} />{" "}
              {otherInventions.length === 1 ? "invention" : "inventions"}
            </p>
            <ul className="publish-list">
              <RenderOtherInventions inventions={otherInventions} />
            </ul>
            <div className="backToTop">
              <a href="#top">&uarr; Back to top</a>
            </div>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="master-inventor"></div>
            <h2>An IBM Master Inventor</h2>
            <p>
              <em>
                In October 2021 I was awarded the honorary title of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/IBM_Master_Inventor"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IBM Master Inventor
                </a>{" "}
                in recognition of my ongoing contribution to IBM&apos;s patent
                portfolio and inventing community. Link to this{" "}
                <a
                  href="https://www.credly.com/badges/6f04d3d0-ded1-43ba-a6a8-6253e6ee4bda"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  verified digital credential
                </a>
                .
              </em>
            </p>

            <img
              alt="My IBM Master Inventor digital badge"
              className="masterInventor do-not-print"
              src={MI_digital_badge}
            />

            <div className="backToTop">
              <a href="#top">&uarr; Back to top</a>
            </div>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export const query = graphql`
  {
    allPatentsJson {
      nodes {
        title
        url
        image
        min
        date
        pending
      }
    }
    allOtherInventionsJson {
      nodes {
        title
        url
        date
      }
    }
  }
`;

export default PatentsPage;

export const Head = () => (
  <Seo
    description="Tom Waterton's inventions and patents — including multiple issued patents, publications on IP.com, and the honorary IBM Master Inventor title awarded in 2021."
    title="Patents and inventions – Tom Waterton"
  >
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tomwaterton.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Patents and inventions",
            item: "https://tomwaterton.com/inventing/"
          }
        ]
      })}
    </script>
  </Seo>
);

const RenderOtherInventions = ({ inventions }) => {
  return inventions.map((invention) => (
    <li key={invention.url}>
      <a href={invention.url} rel="noopener noreferrer" target="_blank">
        {invention.title}
      </a>
      <span className="date">({invention.date})</span>
    </li>
  ));
};

const RenderPatents = ({ patents }) => {
  return patents.map((patent) => (
    <PatentTile
      date={patent.date}
      image={patent.image}
      key={patent.title}
      min={patent.min}
      pending={patent.pending}
      title={patent.title}
      url={patent.url}
    />
  ));
};

const PatentTile = ({ url, image, title, pending, min, date }) => {
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
              src={`../images/patents/${image}`}
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
            <span className="pending">{pending}</span>
          </div>
        </div>

        <footer className="c-article-tile__footer">
          <span className="c-article-tile__read-time" itemProp="patentRef">
            {min}
          </span>

          <span className="c-article-tile__date" itemProp="datePublished">
            {date}
          </span>
        </footer>
      </article>
    </li>
  );
};
