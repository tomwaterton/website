import React from "react";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import SEO from "../../components/seo";
import crossword_07 from "../../images/crosswords/cryptic_crossword_07.png";

function printPage() {
  window.print()
}

function Crossword_07Page() {
  return (
    <Layout>
      <SEO
        keywords={[`cryptic`, `crosswords`, `meles`, `tom`, `waterton`]}
        title="Crossword #07"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h2 className="do-not-print">Cryptic crossword #07</h2>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_07">
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
        alt="Cryptic crossword #07"
        className="block crossword-border"
        src={crossword_07}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default Crossword_07Page;
