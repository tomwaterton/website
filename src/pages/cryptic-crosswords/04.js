import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_04 from "../../images/crosswords/cryptic_crossword_04.png";

function printPage() {
  window.print()
}

const Crossword_04Page = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1 className="do-not-print">Cryptic crossword #04</h1>

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
  )
}

export default Crossword_04Page

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crossword #04" 
    description="Cryptic crossword #04 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
