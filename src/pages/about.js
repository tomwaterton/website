import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutIllustration from "../images/about/about.jpg";


function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

<section class="row">
    <div class="column">
      <h1>About this site</h1>
      <p class="description padding-bottom">I built this personal website as a little side project.</p>
      <p>Technical details:</p>
      <ul class="padding-bottom">
        <li>I built this site using the free and open source&nbsp;
            <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>
            &nbsp;React framework.
        </li>
        <li>To get started, I used the&nbsp;
            <a href="https://github.com/taylorbryant/gatsby-starter-tailwind" target="_blank">Tailwind</a>
            &nbsp;Gatsby starter theme, which I then adapted to suit my needs.
        </li>
        <li>I use&nbsp;
            <a href="https://github.com/" target="_blank">GitHub</a>
            &nbsp;as my source repository.
        </li>
        <li>And I use&nbsp;
            <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>
            &nbsp;to host the site.
        </li>
      </ul>
      <p class="description">If you spot any bugs, do&nbsp;
          <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20website">get in touch</a> with me.
      </p>
    </div>
    <div class="column">
      <img
        alt="Website construction illustration"
        className="block tilt-landscape"
        src={AboutIllustration}
      />
    </div>
  </section>

    </Layout>
  );
}

export default AboutPage;
