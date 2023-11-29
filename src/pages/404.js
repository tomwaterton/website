import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import MagnifyingGlassIllustration from "../images/404/magnifying-glass.jpg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Hmm, we can't seem to find that page...</h1>
      <p><em>Error: 404</em></p>
    </div>
  </section>


  <section className="row">
    <div className="column">
      <p><em>Perhaps you were looking for one of these pages:</em></p>
      <h4>General</h4>
        <ul className="ul-small">
          <li><Link to="/">Home page</Link></li>
          <li><Link to="/about">About this site</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      <h4>Content design</h4>
        <ul className="ul-small">
          <li><Link to="/experience">Experience and skills</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/speaking">Speaking</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      <h4>More...</h4>
        <ul className="ul-small">
          <li><Link to="/brewing">Brewing</Link></li>
          <li><Link to="/cryptic-crosswords">Cryptic crosswords</Link></li>
          <li><Link to="/dog">Dog</Link></li>
          <li><Link to="/family">Family</Link></li>
          <li><Link to="/inventing">Inventing</Link></li>
          <li><Link to="/reading">Reading</Link></li>
        </ul>
    </div>
    <div className="column">
      <img
        alt="Photo of a magnifying glass"
        className="block max-w-xs"
        src={MagnifyingGlassIllustration}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default NotFoundPage;
