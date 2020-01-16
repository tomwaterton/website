import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutIllustration from "../images/about/about.jpg";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

  <section className="row">
    <div className="column">
      <h1>About this site</h1>
      <p className="description">I'm not a web developer, but I do like to learn new things, so 
      I recently set myself the challenge of creating my own website.</p>
      <p className="description padding-bottom-small">Here you'll find some information about my work, 
      as well as some of my thoughts, hobbies, and interests.</p>
      <p className="description padding-bottom-small">Enjoy!</p>
      <img
        alt="Typewriter icon"
        className="block site-icon padding-bottom"
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
      <h2>Technical details</h2>
      <ul className="padding-bottom">
        <li>I built this site using the free and open source <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> React framework.</li>
        <li>To get started, I used the <a href="https://github.com/taylorbryant/gatsby-starter-tailwind" target="_blank">Tailwind</a> Gatsby starter theme, which I then adapted to suit my needs.</li>
        <li>I use <a href="https://github.com/" target="_blank">GitHub</a> as my source repository.</li>
        <li>And I use <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> to host the site.</li>
      </ul>
      <p className="description">If you spot any bugs, or simply want to say hello, please do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20website">get in touch</a> with me.
      </p>
    </div>
  </section>

    </Layout>
  );
}

export default AboutPage;
