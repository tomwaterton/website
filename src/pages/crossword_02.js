import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import crossword_02 from "../images/crosswords/cryptic_crossword_02.png";

function Crossword_02Page() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Crossword #02"
      />

  <section class="row">
    <div class="column">
    <h2>Cryptic crossword #01</h2>
    <p class="description">If you have any feedback on any of my crosswords or would like clues or answers, 
      do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword">get in touch</a> with me.</p>
    </div>
  </section>

  <section class="row">
    <div class="column">
      <img
        alt="Cryptic crossword #02"
        className="block"
        src={crossword_02}
      />
    </div>
  </section>

  <section class="row">
    <div class="column">
      <h3>To print a copy of this crossword:</h3>
      <p class="instruction">1) Right-click the image above and select <strong>Open Image in New Tab</strong>.</p>
      <p class="instruction">2) In the new tab press <strong>Cmd+P</strong> (Mac) or <strong>Ctrl+P</strong> (Windows) to open the print dialog.</p>
    </div>
  </section>

    </Layout>
  );
}

export default Crossword_02Page;
