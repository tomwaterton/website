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
        alt="Ghost getting abducted by aliens"
        className="block max-300"
        src={MagnifyingGlassIllustration}
      />
    </div>
    <div className="column">
      <p className="description">Why not try one of these pages instead:</p>
        <ul className="ul-small">
          <li><a href="/">Home page</a></li>
          <li><a href="/content-design">Content design</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/patents">Patents</a></li>
          <li><a href="/cryptic-crosswords">Cryptic crosswords</a></li>
          <li><a href="/reading">Reading</a></li>
          <li><a href="/brewing">Brewing</a></li>
          <li><a href="/family">Family</a></li>
          <li><a href="/about">About this site</a></li>
        </ul>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default NotFoundPage;
