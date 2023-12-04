import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_03 from "../../images/crosswords/cryptic_crossword_03.png";

function printPage() {
  window.print()
}

const Crossword_03Page = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1 className="do-not-print">Cryptic crossword #03</h1>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_03">
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
        alt="Cryptic crossword #03"
        className="block crossword-border"
        src={crossword_03}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  )
}

export default Crossword_03Page

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crossword #03" 
    description="Cryptic crossword #03 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
