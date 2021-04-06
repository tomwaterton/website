import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import AboutIllustration from "../images/about/about.jpg";

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
      <p className="description">I'm not really a web developer, but I do like to learn new things, so 
      at the beginning of 2020 I set myself the challenge of creating my own website.</p>
      <p className="description padding-bottom-small">Here you'll find some information about my work as 
      a content designer, as well as some of my thoughts, hobbies, and interests. Enjoy!</p>
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
    <div className="column">
      <h2>Technical details</h2>
      <ul className="padding-bottom">
        <li>I built this site using the free and open source <a href="https://www.gatsbyjs.org/">Gatsby</a> React framework</li>
        <li>I use the <a href="https://tailwindcss.com/">Tailwind</a> utility-first CSS framework and their <a href="https://github.com/taylorbryant/gatsby-starter-tailwind">Gatsby starter theme</a></li>
        <li>I use <a href="https://github.com/">GitHub</a> as my source repository</li>
        <li>I use <a href="https://pages.github.com/">GitHub Pages</a> to host the site</li>
        <li>I use <a href="https://www.google.com/analytics">Google Analytics</a> to analyse site traffic</li>
      </ul>
      <p>Props to the talented <a href="https://www.linkedin.com/in/peter-loveland-75a73294/">Peter Loveland</a> 🙌 &nbsp;for his Gatsby help (and puns) as I was developing the site.</p>
      <p><br/></p>
      <p>If you spot any bugs 🐛 or simply want to say hello, please do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20website">get in touch</a> with me.
      </p>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default AboutPage;
