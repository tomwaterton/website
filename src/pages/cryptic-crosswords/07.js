import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_07 from "../../images/crosswords/cryptic_crossword_07.png";

function printPage() {
  window.print()
}

const Crossword_07Page = () => {
  return (
    <Layout>

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
  )
}

export default Crossword_07Page

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crossword #07" 
    description="Cryptic crossword #07 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
