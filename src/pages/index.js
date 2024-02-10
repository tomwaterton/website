import React from "react";
import { SEO } from "../components/seo";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import TomPhoto from "../images/index/Tom_Waterton2.png";

const IndexPage = () => {
  return (
    <Layout>

      <ContentWidth>
      <section className="homeBody">
        <img
          alt="Profile photo of Tom Waterton"
          src={TomPhoto}
          width="350px" height="350px"
        />

        <h1 className="padding-bottom-small">
          Hi, I'm Tom Waterton
        </h1>
        <p className="padding-bottom-small">I'm a <strong>senior content designer</strong>, currently working 
        for <a href="https://www.ibm.com/design/" target="_blank" rel="noopener noreferrer">IBM Design</a>. 
        This site contains a brief <Link to="/portfolio">portfolio of work</Link>, lists some of 
        my <Link to="/experience">experience and skills</Link>, and features some of my <Link to="/articles">articles</Link>.
        </p>
        <p className="padding-bottom-small">Outside of work, I live in the south of England with my 
        wonderful <Link to="/family">family</Link> and <Link to="/dog">our dog</Link>. 
        Other interests include <Link to="/brewing">brewing</Link>, <Link to="/cryptic-crosswords">compiling cryptic crosswords</Link>, <Link to="/inventing">inventing</Link>, 
        and <Link to="/reading">reading</Link>.
        </p>
      </section>

      </ContentWidth>
    </Layout>

  )
}

export default IndexPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Homepage" 
    />
)
