import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import cheers_photo from "../images/brewing/cheers.jpg";
import brewing_kit_photo from "../images/brewing/brewing_kit.jpeg";
import sparging_photo from "../images/brewing/sparging.jpg";
import adding_hops_photo from "../images/brewing/adding_hops.jpeg";
import siphoning_photo from "../images/brewing/siphoning.jpg";

function BrewingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Brewing"
      />

  <section className="row">
    <div className="column">
      <h1>Brewing</h1>
      <p className="description">Content to be added here soon... Cheers!</p>
      <p className="description">More text to go here... More text to go here... More text to go here... 
      More text to go here... More text to go here... More text to go here... More text to go here... 
      More text to go here... More text to go here... More text to go here... More text to go here...</p>
      <p className="description">More text to go here... More text to go here... More text to go here... 
      More text to go here... More text to go here... More text to go here... More text to go here... 
      More text to go here... More text to go here... More text to go here... More text to go here...</p>
    </div>
    <div className="column">
    <img
        alt="Photo of a pint of homebrew"
        className="block tilt-portrait-right"
        src={cheers_photo}
      />
    </div>
  </section>

  <section className="row">
    <div className="column">
      <img
        alt="Photo of my brewing kit"
        className="block section-photos"
        src={brewing_kit_photo}
      />
      <p className="small-text-italic">
        My brewing kit
      </p>
    </div>

    <div className="column">
      <img
        alt="Photo of me rinsing the grain"
        className="block section-photos"
        src={sparging_photo}
      />
      <p className="small-text-italic">
        Pouring liquor through the grain
      </p>
    </div>
  </section>

  <section className="row">
  <div className="column">
      <img
        alt="Photo of adding hops to the wort"
        className="block section-photos"
        src={adding_hops_photo}
      />
      <p className="small-text-italic">
        Adding hops to the wort
      </p>
    </div>

    <div className="column">
    <img
        alt="Photo of me siphoning the wort from the pot to the brew bin"
        className="block section-photos"
        src={siphoning_photo}
      />
      <p className="small-text-italic">
        Siphoning the wort from pan to brew bin
      </p>
    </div>

  </section>

    </Layout>
  );
}

export default BrewingPage;
