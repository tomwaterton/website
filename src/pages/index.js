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
      <section className="text-center max-w-xl mx-auto">
        <img
          alt="Photo of Tom Waterton"
          className="block mx-auto max-w-xs pb-8"
          src={TomPhoto}
        />

        <h1 className="padding-bottom-small">
          Hi, I'm Tom.
        </h1>
        <p className="text-xl padding-bottom-small">I'm an experienced <Link to="/experience">Content Designer</Link>.</p>
        <p className="text-xl padding-bottom-small">I currently work for <a href="https://www.ibm.com/design/">IBM Design</a> and live in Hampshire, England.</p>
        <p className="padding-bottom-small">~ ~ ~ ~ ~</p>
        <p className="padding-bottom-small">I also enjoy <Link to="/articles">writing&nbsp;articles</Link>, <Link to="/patents">inventing&nbsp;things</Link>, <Link to="/cryptic-crosswords">compiling&nbsp;cryptic&nbsp;crosswords</Link>, <Link to="/reading">reading&nbsp;good&nbsp;books</Link>, <Link to="/brewing">brewing&nbsp;beer</Link>, and spending time with my <Link to="/family">wonderful&nbsp;family</Link>.</p>
      </section>

      </ContentWidth>
    </Layout>
  );
}

export default IndexPage;
