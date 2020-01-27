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
      <p className="description">I work as a content designer, which basically means that I specialise in communicating 
      information in the best way possible.</p>
      <p className="description">I predominantly work content that makes up part of the in-product user experience.</p>
      <p className="description">Content strategy, content audit, terminology audit, information architecture, etc.</p>
      <p className="description">I write about all of this in more detail in my article:&nbsp;
      <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a Content Designer</a>.</p>

      <ul className="padding-bottom print-only">
        <li>I work predominantly on in-product content (the words you see as you're using an IBM Cloud product)</li>
        <li>I work closely with user researchers, UX designers, and engineering colleagues to craft delightful user experiences</li>
        <li>I'm the primary contributor to the content guidelines in&nbsp;
          <a href="https://www.carbondesignsystem.com/guidelines/content/general/">Carbon</a> — IBM's awesome open source design system, which our products all now use</li>
        <li>I co-lead the IBM Content Design Guild (with the talented&nbsp;
          <a href="http://www.marandabodas.com/">Maranda Bodas</a>)</li>
        <li>Something about the TCI?</li>
        <li>Content strategy (helping people...)</li>
        <li>Run content audits (know what you've got, where it is, if it's being used, etc.)</li>
        <li>Perform terminology research and analysis (to determine what is likely to most resonate with your target audience)</li>
        <li>Advise re information architecture (basically to ensure that the most important stuff comes first!)</li>
        <li>Try to make all of the above fun!</li>
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
    </div>
    <div className="column panel medium-text">
    <h3>Example work 2019</h3>
      <ul>
        <li>I work with lots of different product teams, but in the first half of 2019 I spent time working with 
          the <span className="strong">IBM Event Streams</span> product design team.</li>
        <li>I ran a content audit to help them work out what content they already had published (and where), 
          what user needs the content addressed, what needed removing, what needed updating, and where there were gaps.</li>
        <li>In my role, I primarily focus on in-product content, but with this project I also helped the design team 
        create a new <a href="https://www.ibm.com/cloud/event-streams">marketing page</a> for the product.</li>
        <li>I also contributed to their <a href="https://ibm.github.io/event-streams/">docs site</a> — which went on to win 
        an <a href="https://uktcawards.com/winners-2019/">ISTC Technical Communication award</a> later in the year.</li>
        <li>The team... </li>
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
    <div className="column panel">
      <p>I'm the primary contributor to the Content section within 
        IBM's Carbon Design System</p>
      <p>...Used by product teams across IBM...</p>
      <p>...And as it's all open source, people outside of IBM use it too...</p>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM Carbon Design System"
        src={Carbon_image}
      />
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
    </div>
    <div className="column panel">
      <p>Along with the talented MB, I set up and co-lead the IBM-wide Content Design Guild</p>
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
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
