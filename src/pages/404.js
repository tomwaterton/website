import React from "react";
import { Seo } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import MagnifyingGlassIllustration from "../images/404/magnifying-glass.jpg";

const NotFoundPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Hmm, we can't seem to find that page...</h1>
            <p>
              <em>Error: 404</em>
            </p>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <p className="padding-bottom-small">
              <em>Perhaps you were looking for one of these pages:</em>
            </p>
            <h2>About</h2>
            <ul className="ul-small">
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/speaking">Speaking</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
            </ul>
            <h2>Work</h2>
            <ul className="ul-small">
              <li>
                <Link to="/experience">Experience and skills</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/inventing">Inventing</Link>
              </li>
              <li>
                <Link to="/recommended-books">Recommended books</Link>
              </li>
            </ul>
            <h2>Fun</h2>
            <ul className="ul-small">
              <li>
                <Link to="/brewing">Brewing</Link>
              </li>
              <li>
                <Link to="/cryptic-crosswords">Cryptic crosswords</Link>
              </li>
              <li>
                <Link to="/family">Family</Link>
              </li>
              <li>
                <Link to="/dog">Our dog</Link>
              </li>
              <li>
                <Link to="/reading">Reading fiction</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              alt="A magnifying glass"
              className="block max-w-xs"
              src={MagnifyingGlassIllustration}
            />
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};
export default NotFoundPage;

export const Head = () => (
  <Seo
    description="404: The page you're looking for can't be found."
    title="404: Page not found"
  />
);
