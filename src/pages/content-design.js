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
      <p className="description">I'm an experienced content designer. If you're not familiar with this term, think of me as a designer 
      with a specialism in writing and communication.</p>
      <p className="description">I work closely with user researchers, UX designers, and engineers to craft delightful user experiences for users
      of IBM products.</p>
      <p className="description">When I'm not writing or advising on in-product content, I help teams with terminology guidance, content strategy, 
      run content critiques, and conduct content audits.</p>
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
        <li>The team won an <a href="https://uktcawards.com/winners-2019/">external award</a> for 
        the product <a href="https://ibm.github.io/event-streams/">docs site</a>.</li>
      </ul>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="2">
  <section className="row">
    <div colspan="2" className="column panel">
      <h2>Writing content guidance for IBM product teams (and beyond)</h2>
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
        all of its new product UIs, I began contributing significantly to the <a href="https://www.carbondesignsystem.com/guidelines/content/general">content guidelines</a> within Carbon.</li>
        <li>This is something that I and others continue to evolve — inspired by the knowledge that Carbon is used 
          by hundreds of IBM product teams, as well as many outside of IBM.</li>
      </ul>
    </div>
    <div className="column">
      <img className="panel-images"
        alt="Screenshot of the IBM Carbon Design System"
        src={Carbon_image}
      />
      <p className="caption-text">Carbon Design System > <a href="https://www.carbondesignsystem.com/guidelines/content/general">Content guidelines</a></p>
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
      <p className="caption-text">Our IBM Content Design Guild Slack channel</p>
    </div>
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
      <img className="panel-images-no-margin"
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
