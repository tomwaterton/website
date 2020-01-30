import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import cheers_photo from "../images/brewing/cheers.jpg";
import adding_hops_photo from "../images/brewing/adding_hops.jpeg";

function BrewingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`brewing`, `beer`, `ale`, `tom`, `waterton`]}
        title="Brewing"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Brewing</h1>
      <p className="description">This page is still under construction...</p>
      <p className="description">More content coming soon...</p>
      <p className="description">In the meantime: Cheers!</p>
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
    </div>
  </section>

  <section className="row">
  <div className="column">
      <img
        alt="Photo of adding hops to the wort"
        className="panel-images"
        src={adding_hops_photo}
      />
      <p className="caption-text">
        Adding hops to the wort
      </p>
    </div>
    <div className="column small-text">
      <p>In essence, beer is made by soaking barley in water until enzymes are activated, which turn the grains’ starches into sugars. Hops are then used to add bitterness and flavor. Finally, yeast is added to ferment the brew (i.e. turn the sugars into carbon dioxide and alcohol)</p>
    </div>

  </section>

  </ContentWidth>
    </Layout>
  );
}

export default BrewingPage;
