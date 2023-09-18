import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import TomPhoto from "../images/index/Tom_Waterton.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about`, `tom`, `waterton`, `content`, `design`]}
        title="Home"
      />

  <ContentWidth>
      <section className="homeBody">
        <img
          alt=""
          src={TomPhoto}
        />

        <h1 className="padding-bottom-small">
          Hi, I'm Tom.
        </h1>
        <p className="padding-bottom-small">I'm an experienced <Link to="/experience">content designer</Link>.</p>
        <p className="padding-bottom-small">I live in Southampton (UK) and work for <a href="https://www.ibm.com/design/">IBM Design</a>.</p>
        <p className="padding-bottom-small">On this site you'll find my <Link to="/portfolio">portfolio</Link>, some of my <Link to="/articles">articles</Link>, as well as information about some of my other interests (<Link to="/brewing">brewing</Link>, <Link to="/cryptic-crosswords">cryptic crosswords</Link>, <Link to="/family">my&nbsp;family</Link>, <Link to="/patents">inventing</Link>, and <Link to="/reading">reading</Link>).</p>
      </section>

      </ContentWidth>
    </Layout>
  );
}

export default IndexPage;