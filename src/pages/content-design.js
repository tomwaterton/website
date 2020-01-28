import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import Tom_at_work_photo from "../images/content-design/Tom_at_work.jpg";
import ES_UI_image from "../images/content-design/Event_Streams_UI.png";
import Carbon_image from "../images/content-design/Carbon.png";
import CD_Guild_image from "../images/content-design/CD_Guild.png";
import microphone_image from "../images/content-design/microphone.png";

function ContentDesignPage() {
  return (
    <Layout fullWidth={true}>
      <SEO
        keywords={[`content`, `design`, `strategy`, `copy`, `writing`, `editing`, `ux`, `tom`, `waterton`]}
        title="Content design"
      />

<ContentWidth>
<section className="row">
    <div className="column">
      <h1>Content design</h1>
      <p className="description">I'm a content designer, which if you're not familiar with this term, basically means that I'm a designer 
      with a specialism in writing and communication.</p>
      <p className="description">I work closely with user researchers, UX designers, and engineering colleagues to craft delightful experiences for users
      of IBM products. When I'm not writing or advising on in-product content, I help teams with terminology guidance, content strategy, 
      run content crits, and conduct content audits.</p>
      <p className="description">For more info, see my article: <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a content designer</a>.</p>
    </div>
    <div className="column">
      <img
        alt="Photo of me working on some designs with colleagues"
        className="block tilt-landscape-left"
        src={Tom_at_work_photo}
      />
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="1">
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
      <p className="caption-text">[Temporary placeholder image - to be improved / replaced]</p>
    </div>
    <div className="column panel medium-text">
      <ul>
        <li>I work with lots of different product teams. For example, in the first half of 2019 I spent time working with 
          the <span className="strong">IBM Event Streams</span> product team.</li>
        <li>I started by running a content audit to help them work out what content they already had published (and where), 
          what user needs the content addressed, what needed updating or removing, and where there were gaps.</li>
        <li>As well as contributing to the in-product content, I also helped the design team design 
        a new set of <a href="https://www.ibm.com/cloud/event-streams">marketing pages</a> for the product.</li>
        <li>I also contributed to their <a href="https://ibm.github.io/event-streams/">docs site</a> — which went on to win 
        an <a href="https://uktcawards.com/winners-2019/">ISTC Technical Communication award</a> later in the year.</li>
      </ul>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="2">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Writing and sharing content guidance</h2>
    </div>
  </section>
  <section className="row">
    <div className="column panel medium-text">
      <ul>
        <li>Some intro text here...</li>
        <li>I'm the primary contributor to the content guidelines in <a href="https://www.carbondesignsystem.com/guidelines/content/general/">Carbon</a> — IBM's awesome open source design system, which our products all now use</li>
        <li>Some more text here...</li>
      </ul>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM Carbon Design System"
        src={Carbon_image}
      />
      <p className="caption-text">[Temporary placeholder image - to be improved / replaced]</p>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="3">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Leading a community of practice</h2>
    </div>
  </section>
  <section className="row">
  <div className="column">
      <img className="panel-images"
        alt="Screenshot of our IBM Content Design Guild Slack channel"
        src={CD_Guild_image}
      />
      <p className="caption-text">[Temporary placeholder image - to be improved / replaced]</p>
    </div>
    <div className="column panel medium-text">
      <ul>
        <li>Along with the talented <a href="http://www.marandabodas.com/">Maranda Bodas</a>, I set up and continue to co-lead the IBM-wide Content Design Guild</li>
        <li>More text to go here...</li>
      </ul>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="4">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Speaking</h2>
    </div>
  </section>
  <section className="row">
    <div className="column medium-text speaking">
      <p className="description">I've also had the privilege of speaking at a few conferences:</p>
      <ul className="padding-bottom">
        <li>
          Building a content design practice in the enterprise<br/>
          <span className="conference">Utterly Content conference</span>
          <span className="date">(Gateshead, UK; April 2020)</span>
        </li>
        <li>
          Establishing end-to-end content collaboration squads<br/>
          <span className="conference">ContentCon</span>
          <span className="date">(Hursley, UK; October 2019)</span>
        </li>
        <li>
          Failing fast, using feedback loops, and the benefits of iterative design<br/>
          <span className="conference">IBM Think conference</span>
          <span className="date">(Las Vegas, USA; March 2018)</span>
        </li>
        <li>
          Achieving a consistent design language across your portfolio<br/>
          <span className="conference">IBM InterConnect conference</span>
          <span className="date">(Las Vegas, USA; March 2017)</span>
        </li>
      </ul>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Photo of me speaking"
        src={microphone_image}
      />
    </div>
  </section>
</ContentWidth>

    </Layout>
  );
}

export default ContentDesignPage;
