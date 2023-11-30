import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_06 from "../../images/crosswords/cryptic_crossword_06.png";

function printPage() {
  window.print()
}

const Crossword_06Page = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column">
      <h2 className="do-not-print">Cryptic crossword #06</h2>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_06">
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
        alt="Cryptic crossword #06"
        className="block crossword-border"
        src={crossword_06}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  )
}

export default Crossword_06Page

export const Head = () => (
  <SEO 
    title="Cryptic crossword #06" 
    description="Cryptic crossword #06 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
