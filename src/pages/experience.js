import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import Tom_at_work_photo from "../images/experience/Tom_at_work.jpg";


function ExperiencePage() {
    return (
      <Layout fullWidth={true}>
        <SEO
          keywords={[`content`, `design`, `strategy`, `copy`, `writing`, `editing`, `ux`, `tom`, `waterton`]}
          title="Experience and skills"
        />
  
  <ContentWidth>
  <section className="row">
      <div className="column">
      <h1>Experience and skills</h1>
        <p className="description">I'm an experienced content designer, having been one of the first 
        content designers hired by IBM. 
        If you're not familiar with this term, think of me as a designer 
        with a specialism in writing and communication.</p>
        <p className="description">I'm used to working highly collaboratively, most commonly with designers, 
        researchers, and engineers. To my mind, content and design are as inseparable as tea and biscuits.</p>
        <p className="description">In all that I do, I strive to deliver user-centered content that is clear, 
        concise, and engaging. To read more about what I do and what I've learned along the way, see my 
        article: <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a content designer</a>.</p>
        <p className="description">See my <Link to="/portfolio">portfolio</Link> for examples of some of my work.</p>
      </div>
      <div className="column">
        <img
          alt="Photo of me working on some designs with colleagues"
          className="block tilt-landscape-left"
          src={Tom_at_work_photo}
        />
      </div>
    </section>

    <section className="row">
    <div className="column">
      <h2>What I actually do</h2>
    </div>
  </section>

  <section className="row">
    <div className="column-1-3">
      <h3>Content design</h3>
        <ul className="ul-small">
          <li>User-centered writing</li>
          <li>Applying voice and tone</li>
          <li>Simplifying the complex</li>
          <li>Writing UI tours</li>
          <li>Writing UI messaging</li>
          <li>Writing UI microcopy</li>
        </ul>
    </div>
    <div className="column-1-3">
      <h3>Strategy</h3>
        <ul className="ul-small">
          <li>Defining content guidance</li>
          <li>Defining voice and tone</li>
          <li>Setting content strategy</li>
          <li>Running content audits</li>
          <li>Advising on information architecture</li>
          <li>Establishing appropriate terminology</li>
        </ul>
    </div>
    <div className="column-1-3">
      <h3>Other</h3>
        <ul className="ul-small">
          <li>Leading teams</li>
          <li>Applying design thinking</li>
          <li>Facilitating workshops</li>
          <li>Writing communications</li>
          <li>Writing articles</li>
          <li>Drinking copious cups of tea 🫖</li>
        </ul>
    </div>
  </section>

  </ContentWidth>

  </Layout>
  );
}

export default ExperiencePage;