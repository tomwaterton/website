import React from "react";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import SEO from "../../components/seo";
import crossword_04 from "../../images/crosswords/cryptic_crossword_04.png";

function printPage() {
  window.print()
}

function Crossword_04Page() {
  return (
    <Layout>
      <SEO
        keywords={[`cryptic`, `crosswords`, `meles`, `tom`, `waterton`]}
        title="Crossword #04"
      />

<ContentWidth>
<div className="print-only">
    A free cryptic crossword by <span className="pseudonym">Meles</span>. 
    Visit <span className="url">www.tomwaterton.com</span> for more.
  </div>

  <section className="row">
    <div className="column">
      <h2 className="do-not-print">Cryptic crossword #04</h2>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_04">
        get in touch</a> with me.</em>
      </p>

      <button className="button do-not-print" onClick={() => printPage()}>
        Print
      </button>

    </div>
  </section>

  <section className="row">
    <div className="column">
      <img
        alt="Cryptic crossword #04"
        className="block crossword-border"
        src={crossword_04}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default Crossword_04Page;
