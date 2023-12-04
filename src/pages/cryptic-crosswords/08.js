import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_08 from "../../images/crosswords/cryptic_crossword_08.png";

function printPage() {
  window.print()
}

const Crossword_08Page = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1 className="do-not-print">Cryptic crossword #08</h1>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_08">
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
        alt="Cryptic crossword #08"
        className="block crossword-border"
        src={crossword_08}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  )
}

export default Crossword_08Page

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crossword #08" 
    description="Cryptic crossword #08 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
