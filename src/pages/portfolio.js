import React from "react";
import { SEO } from "../components/seo";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import ES_UI_image from "../images/portfolio/Event_Streams_UI.png";
import Carbon_image from "../images/portfolio/Carbon.png";
import UX_writing_course_image from "../images/portfolio/ux_writing_course.png";
import CD_Guild_image from "../images/portfolio/CD_Guild.png";

const PortfolioPage = () => {
  return (
    <Layout fullWidth={true}>

<ContentWidth>
<section className="row">
    <div className="column">
      <h1>Portfolio</h1>
      <p><em>Examples of some of my recent work. (You may also be interested in reading about my <Link to="/experience">experience and skills</Link>.)</em></p>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="3">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Helping product teams deliver great content</h2>
    </div>
  </section>
  <section className="row">
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM Event Streams UI"
        src={ES_UI_image}
      />
      <p className="caption-text">An example: the IBM Event Streams product UI</p>
    </div>
    <div className="column panel medium-text">
      <ul>
        <li>I work with lots of different IBM product teams. For example, in 2019, I joined 
           the <span className="strong">IBM Event Streams</span> team for 5 months.</li>
        <li>I worked with colleagues from marketing, engineering, product management, design, and sales to understand our 
            customers' end-to-end experience.</li>
        <li>I ran a content audit to help the team work out what content they already had published, what user needs it 
          addressed, and what needed removing, updating, or creating.</li>
        <li>As well as helping to improve the in-product content, I also helped the team design a new 
          set of <a href="https://www.ibm.com/cloud/event-streams">marketing pages</a>.</li>
        <li>The team won a <a href="https://www.indigoawards.com/winners/731">external design award</a> 🏆 for the product and a 
        separate <a href="https://uktcawards.com/winners-2019/">external design award</a> 🏆 for 
        the product <a href="https://ibm.github.io/event-streams/">docs site</a>.</li>
      </ul>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="2">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Defining content guidance for IBM</h2>
    </div>
  </section>
  <section className="row">
    <div className="column panel medium-text">
      <ul>
        <li>Back in 2016, I was asked to produce IBM Design's first voice and tone guide. 
          I started by conducting thorough research to understand what aspects of writing designers and engineers were struggling with.</li>
        <li>I then focused on how we could best design and deliver the guidance so that it would be fun, useful, 
          and easy to use. (I've written a little about this process in <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">this article</a>.)</li>
        <li>Later, as IBM moved to using the awesome <a href="https://www.carbondesignsystem.com/">Carbon Design System</a> for 
        all of its product UIs, I began contributing to the <a href="https://www.carbondesignsystem.com/guidelines/content/overview">content guidelines</a> within Carbon.</li>
        <li>This is something that I and others continue to evolve — inspired by the knowledge that Carbon is used 
          by hundreds of IBM product teams, as well as many outside of IBM.</li>
      </ul>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM Carbon Design System"
        src={Carbon_image}
      />
      <p className="caption-text">Carbon Design System &gt; <a href="https://www.carbondesignsystem.com/guidelines/content/overview">Content guidelines</a></p>
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="1">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Delivering UX writing education for IBM designers</h2>
    </div>
  </section>
  <section className="row">
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM UX writing course"
        src={UX_writing_course_image}
      />
      <p className="caption-text">The IBM UX writing course that I published in late 2022</p>
    </div>
    <div className="column panel medium-text">
      <ul>
        <li>IBM has a community of over 3,000 designers. And while we have some dedicated content designers (like me!), 
          many design teams don't have access to a content specialist.</li>
        <li>So, in 2022, I was asked to create a self-service online education course to help our many talented UX designers, 
          visual designers, design researchers, and other design colleauges further improve their own UX writing skills.</li>
        <li>After getting input from a variety of design colleagues, I came up with a course outline that mapped to both our 
          Carbon content guidelines and to the content heuristics used in our internal product design reviews.</li>
        <li>As I researched and drafted each module I then sought feedback from some early adopters, which enabled me to further refine the contents.</li>
      </ul>
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="2">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Leading a community of practice</h2>
    </div>
  </section>
  <section className="row">
    <div className="column panel medium-text">
      <ul>
        <li>As recently as 2018, many people in IBM hadn't even heard of a content designer let alone worked with one.</li>
        <li>So I got together with the talented <a href="http://www.marandabodas.com/">Maranda Bodas</a> and 
        a handful of others, and we formed a small community of practice, which we called the <span className="strong">IBM Content Design Guild</span>.</li>
        <li>From an inital meeting with just 7 of us, our community has grown month by month, and we now have over 
          300 people engaged with us, including UX designers, marketers, and tech writers, as well as content designers.</li>
        <li>We hold lively meetings where we share best practices and resources and we've spun up various work groups, covering 
          different aspects of content design.</li>
        <li>It continues to be a real pleasure co-leading this wonderful and growing content community.</li>
      </ul>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of our IBM Content Design Guild Slack channel"
        src={CD_Guild_image}
      />
      <p className="caption-text">Our IBM Content Design Guild Slack channel</p>
    </div>
  </section>
</ContentWidth>

    </Layout>
  )
}

export default PortfolioPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Portfolio" 
    description="A breif version of my portfolio, showing some of my recent content design work (tomwaterton.com)" 
    />
)
