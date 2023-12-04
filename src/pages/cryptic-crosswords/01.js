import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import ContentWidth from "../../components/contentWidth";
import crossword_01 from "../../images/crosswords/cryptic_crossword_01.png";

function testPrint() {
  window.print()
}

const Crossword_01Page = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1 className="do-not-print">Cryptic crossword #01</h1>

      <p className="do-not-print"><em>If you have any feedback on this crossword or would like clues or answers, 
        do <a href="mailto:tomwaterton@gmail.com?Subject=Re%20your%20cryptic%20crossword%20number_01">
        get in touch</a> with me.</em>
      </p>

      <button className="button do-not-print" onClick={() => testPrint()}>
        Print
      </button>

    </div>
  </section>

  <section className="row">
    <div className="column">
      <img
        alt="Cryptic crossword #01"
        className="block crossword-border"
        src={crossword_01}
      />
    </div>
  </section>

  </ContentWidth>
    </Layout>
  )
}

export default Crossword_01Page

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crossword #01" 
    description="Cryptic crossword #01 by Meles aka Tom Waterton (tomwaterton.com)" 
    />
)
