import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import Tom_at_work_photo from "../images/content-design/Tom_at_work.jpg";
import Carbon_image from "../images/content-design/Carbon.png";
import article_10_Illustration from "../images/articles/article_thumbnail_10.jpg";
import article_9_Illustration from "../images/articles/article_thumbnail_9.jpg";

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
      <p className="description">Some intro text to go here... blah... blah...</p>
      <p className="description">More text to go here... blah... blah...</p>
      <p className="description">I write about all of this in more detail in my article:&nbsp;
      <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a Content Designer</a>.</p>
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
    <div colspan="2" className="column">
      <h2>Helping product team deliver great user experiences</h2>
    </div>
  </section>
  <section className="row">
  <div className="column">
      <img className="article-thumbnail"
        alt="Article image"
        src={Carbon_image}
      />
    </div>
    <div className="column">
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="2">
  <section className="row">
    <div colspan="2" className="column">
      <h2>Providing content guidance to others</h2>
    </div>
  </section>
  <section className="row">
    <div className="column">
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
    </div>
    <div className="column">
      <img className="article-thumbnail"
        alt="Article image"
        src={Carbon_image}
      />
    </div>
  </section>
</ContentWidth>


<ContentWidth bgColour="3">
  <section className="row">
    <div colspan="2" className="column">
      <h2>Leading a community of practice</h2>
    </div>
  </section>
  <section className="row">
  <div className="column">
      <img className="article-thumbnail"
        alt="Article image"
        src={Carbon_image}
      />
    </div>
    <div className="column">
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
      <p>Some intro text to go here... blah... blah...</p>
    </div>
  </section>
</ContentWidth>


<ContentWidth>
  <section className="row">
    <div className="column medium-text">
      <h2>Speaking</h2>
      <p className="description">I've also had the privilege of speaking at a few conferences over recent years:</p>
      <ul className="padding-bottom">
        <li>Breaking down silos: Building a content design practice in the enterprise<br/>
          <span className="conference">Utterly Content conference</span>
          <span className="date">(Gateshead, UK; April 2020)</span>
        </li>
        <li>Establishing end-to-end content collaboration squads<br/>
          <span className="conference">ContentCon</span>
          <span className="date">(IBM Hursley, UK; October 2019)</span>
        </li>
        <li>Failing fast, using feedback loops, and the benefits of iterative design<br/>
          <span className="conference">IBM Think conference</span>
          <span className="date">(Las Vegas, USA; March 2018)</span>
        </li>
        <li>Achieving a consistent design language across your portfolio<br/>
          <span className="conference">IBM InterConnect conference</span>
          <span className="date">(Las Vegas, USA; March 2017)</span>
        </li>
      </ul>
    </div>
  </section>
</ContentWidth>

    </Layout>
  );
}

export default ContentDesignPage;
