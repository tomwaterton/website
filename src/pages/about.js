import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import AboutIllustration from "../images/about/about.jpg";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about`, `tom`, `waterton`, `content`, `design`]}
        title="About"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>About this site</h1>
      <p className="description">I'm not a web developer, but I do like to learn new things, so 
      at the beginning of 2020 I set myself the challenge of creating my own website.</p>
      <p className="description padding-bottom-small">Here you'll find some information about my work, 
      as well as some of my thoughts, hobbies, and interests. Enjoy!</p>
      <img
        alt="Typewriter icon"
        className="block site-icon"
        src={TypewriterIllustration}
      />
    </div>
    <div className="column">
      <img
        alt="Website construction illustration"
        className="block tilt-landscape-left"
        src={AboutIllustration}
      />
    </div>
  </section>

  <section className="row">
    <div className="column">
    </div>
  </section>

  <section className="row">
    <div className="column medium-text">
      <h2>Technical details</h2>
      <ul className="padding-bottom">
        <li>I built this site using the free and open source <a href="https://www.gatsbyjs.org/">Gatsby</a> React framework.</li>
        <li>To get started, I used the <a href="https://github.com/taylorbryant/gatsby-starter-tailwind">Tailwind</a> Gatsby starter theme, which I then adapted to suit my needs.</li>
        <li>I use <a href="https://github.com/">GitHub</a> as my source repository.</li>
        <li>And I use <a href="https://pages.github.com/">GitHub Pages</a> to host the site.</li>
        <li>(Props to the talented <a href="https://www.linkedin.com/in/peter-loveland-75a73294/">Peter Loveland</a> 🙌 for his Gatsby help — and puns — along the way.)</li>
      </ul>
      <p>If you spot any bugs, or simply want to say hello, please do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20website">get in touch</a> with me.
      </p>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default AboutPage;
