import React from "react";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import SEO from "../../components/seo";
import crossword_02 from "../../images/crosswords/cryptic_crossword_02.png";

function testPrint() {
  window.print()
}

function Crossword_02Page() {
  return (
    <Layout>
      <SEO
        keywords={[`cryptic`, `crosswords`, `meles`, `tom`, `waterton`]}
        title="Crossword #02"
      />

<ContentWidth>
<div className="print-only">
    A free cryptic crossword by <span className="pseudonym">Meles</span>. 
    Visit <span className="url">www.tomwaterton.com</span> for more.
  </div>

  <section className="row">
    <div className="column">
      <h2 className="do-not-print">Cryptic crossword #02</h2>

      <p className="description do-not-print">If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_02">
        get in touch</a> with me.
      </p>

      <button className="button do-not-print" onClick={() => testPrint()}>
        Print
      </button>

    </div>
  </section>

  <section className="row">
    <div className="column">
      <img
        alt="Cryptic crossword #02"
        className="block crossword-border"
        src={crossword_02}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default Crossword_02Page;