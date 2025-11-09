import React from "react";
import { SEO } from "../components/seo";
import { Link } from "gatsby";
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
            width="350px"
            height="350px"
          />

          <h1 className="padding-bottom-small">Hi, I'm Tom Waterton</h1>
          <p className="padding-bottom-small">
            I'm a <strong>Senior Content Designer</strong>, with 10+ years of
            experience, currently working for{" "}
            <a
              href="https://www.ibm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBM
            </a>
            . I love designing and delivering clear, engaging, user-centered
            content.
          </p>
          <p className="padding-bottom-small">
            This site contains a brief{" "}
            <Link to="/portfolio">portfolio of work</Link>, lists my{" "}
            <Link to="/experience">experience and skills</Link>, provides some{" "}
            <Link to="/testimonials">testimonials</Link>, and features some of
            my <Link to="/articles">articles</Link>.
          </p>
          <p className="padding-bottom-small">
            Outside of work, I live in Hampshire (UK) with my wonderful{" "}
            <Link to="/family">family</Link> and <Link to="/dog">dog</Link>. I
            also enjoy <Link to="/brewing">brewing</Link>,{" "}
            <Link to="/cryptic-crosswords">compiling cryptic crosswords</Link>,
            cricket, hiking, <Link to="/inventing">inventing</Link>, and always
            reading (both <Link to="/reading">fiction</Link> and{" "}
            <Link to="/recommended-books">non-fiction</Link>).
          </p>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Tom Waterton's website: Homepage" />;
