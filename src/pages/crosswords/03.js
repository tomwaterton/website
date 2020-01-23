import React from "react";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import SEO from "../../components/seo";
import crossword_03 from "../../images/crosswords/cryptic_crossword_03.png";

function printPage() {
  window.print()
}

function Crossword_03Page() {
  return (
    <Layout>
      <SEO
        keywords={[`cryptic`, `crosswords`, `tom`, `waterton`]}
        title="Crossword #03"
      />

<ContentWidth>
  <div className="print-only">
    A free cryptic crossword by <strong>Meles</strong>. Visit <strong>www.tomwaterton.com</strong> for more.
  </div>

  <section className="row">
    <div className="column">
      <h2 className="do-not-print">Cryptic crossword #03</h2>

      <p className="description do-not-print">If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_03">
        get in touch</a> with me.
      </p>

      <button className="button do-not-print" onClick={() => printPage()}>
        Print
      </button>

    </div>
  </section>

  <section className="row">
    <div className="column">
      <img
        alt="Cryptic crossword #03"
        className="block crossword-border"
        src={crossword_03}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default Crossword_03Page;
