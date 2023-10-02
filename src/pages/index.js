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
          alt="Profile photo of Tom Waterton"
          src={TomPhoto}
        />

        <h1 className="padding-bottom-small">
          Hi, I'm Tom.
        </h1>
        <p className="padding-bottom-small">I'm a <strong>senior content designer</strong>, currently working 
        for <a href="https://www.ibm.com/design/" target="_blank" rel="noopener noreferrer">IBM Design</a>. 
        This site contains a brief <Link to="/portfolio">portfolio of work</Link>, lists some of 
        my <Link to="/experience">experience and skills</Link>, and features some of my <Link to="/articles">articles</Link>.
        </p>
        <p className="padding-bottom-small">Outside of work, I live in the south of England with my 
        wonderful <Link to="/family">family</Link> and <Link to="/dog">dog</Link>. 
        Some of my other interests include <Link to="/brewing">brewing</Link>, 
        compiling <Link to="/cryptic-crosswords">cryptic crosswords</Link>, <Link to="/patents">inventing</Link>, 
        and <Link to="/reading">reading</Link>.
        </p>

      </section>

      </ContentWidth>
    </Layout>
  );
}

export default IndexPage;