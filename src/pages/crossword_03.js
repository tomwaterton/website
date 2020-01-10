import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import crossword_03 from "../images/crosswords/cryptic_crossword_03.png";

function Crossword_03Page() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Crossword #03"
      />

  <div class="print-only">
      A free cryptic crossword by Meles. Visit <strong>www.tomwaterton.com</strong> for more.
  </div>

  <section class="row">
    <div class="column">
      <h2 class="do-not-print">Cryptic crossword #03</h2>
      <p class="description do-not-print">To print a copy of this crossword, press <strong>Cmd+P</strong> (on a Mac) or <strong>Ctrl+P</strong> (on Windows) </p>
      <p class="description do-not-print">If you have any feedback on this crossword or would like clues or answers, 
      do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_03">get in touch</a> with me.</p>
    </div>
  </section>

  <section class="row">
    <div class="column">
      <img
        alt="Cryptic crossword #03"
        className="block crossword-border"
        src={crossword_03}
      />
    </div>
  </section>

    </Layout>
  );
}

export default Crossword_03Page;
