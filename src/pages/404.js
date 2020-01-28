import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import abductionIllustration from "../images/tailwind/abduction-illustration.svg";
import MagnifyingGlassIllustration from "../images/404/magnifying-glass.jpg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Hmm, we can't seem to find that page...</h1>
      <p className="description">Error: 404</p>
    </div>
  </section>


  <section className="row">
    <div className="column">
      <img
        alt="Photo of a magnifying glass"
        className="block max-300"
        src={MagnifyingGlassIllustration}
      />
    </div>
    <div className="column">
      <p className="description">Why not try one of these pages instead:</p>
        <ul className="ul-small">
          <li><Link to="/">Home page</Link></li>
          <li><Link to="/content-design">Content design</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/patents">Patents</Link></li>
          <li><Link to="/cryptic-crosswords">Cryptic crosswords</Link></li>
          <li><Link to="/reading">Reading</Link></li>
          <li><Link to="/brewing">Brewing</Link></li>
          <li><Link to="/family">Family</Link></li>
          <li><Link to="/about">About this site</Link></li>
        </ul>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default NotFoundPage;
