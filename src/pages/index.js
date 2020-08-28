import { Link } from 'gatsby';
import React from "react";
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
      <section className="text-center">
        <img
          alt="Photo of Tom Waterton"
          className="block mx-auto w-1/2 padding-bottom"
          src={TomPhoto}
        />

        <h1 className="padding-bottom-small">
          Hi, I'm Tom.
        </h1>
        <p className="lead padding-bottom-small">I'm an experienced <Link to="/content-design">Content Designer</Link>.</p>
        <p className="lead padding-bottom-small">I work for <a href="https://www.ibm.com/design/">IBM Design</a> and live in Hampshire, England.</p>
      </section>

      </ContentWidth>
    </Layout>
  );
}

export default IndexPage;
