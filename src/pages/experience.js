import React from "react";
import { SEO } from "../components/seo";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import Tom_at_work_photo from "../images/experience/Tom_at_work.jpg";

const ExperiencePage = () => {
  return (
      <Layout fullWidth={true}>
  
  <ContentWidth>
  <section className="row">
      <div className="column">
      <h1>Experience and skills</h1>
        <p><em>I'm an experienced content designer, having been one of the first 
        hired by IBM. If you're not familiar with this term, think of me as a designer 
        with a specialism in writing and communication.</em></p>
        <p><em>I'm used to working highly collaboratively, most commonly with other designers, 
        researchers, and engineers. To my mind, content and design are as inseparable as tea and biscuits.</em></p>
        <p><em>You can read more about what I do and what I've learned along the way in the following articles and links:</em></p>
        <ul>
          <li><a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a content designer</a> (article)</li>
          <li><a href="https://workingincontent.com/resources/inside-content-design-at-ibm/">Inside content design at IBM</a> (interview article)</li>
          <li>Or see my <Link to="/portfolio">portfolio</Link> for some examples of my work</li>
        </ul>
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
  )
}

export default ExperiencePage

export const Head = () => (
  <SEO 
    title="Experience and skills" 
    description="Details about my work experience as a content designer and my related skills (tomwaterton.com)" 
    />
)