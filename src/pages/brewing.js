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
      <p className="description">I've always enjoyed the richness and variety of different beers. 
      I love a traditional English bitter in the springtime, a light, hoppy IPA in the summer, 
      an amber ale in the autumn, and a hearty porter or stout in the winter. </p>
      <p className="description">I also like learning and discovering how things are made, and so a few 
      years back I started learning how to brew beer myself.</p>
      <p className="description">I'm far from being a master brewer, but I do enjoy the challenge 
      of trying to produce a certain type of beer and the creativity of playing around with different 
      hops and flavours.</p>
      <p className="description">I also love the sociable side of brewing. I often brew with others and 
      enjoy being able to share the results with friends and family.</p>
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
    <div className="column-1-3">
      <div className="sep-bar">
        <h2>The basic theory</h2>
          <div className="small-text">
            <p>In essence, beer is made by soaking barley in water until enzymes are activated, which turn 
            the grains’ starches into sugars.</p>
            <p>Different hops are then used to add bitterness, flavor, and aroma.</p>
            <p>Finally, yeast is added to ferment the brew — i.e. turn the sugars into carbon dioxide and alcohol.</p>
          </div>
          <img
            alt="Photo of adding hops to the wort"
            className="brewing-images"
            src={adding_hops_photo}
          />
      <p className="caption-text">[Photo of brew kit or action?]</p>
      </div>
    </div>

    <div className="column-1-3">
      <div className="sep-bar">
        <h2>Getting stuck in</h2>
          <div className="small-text">
            <p>Paragraph 1...</p>
            <p>Paragraph 2...</p>
            <p>Paragraph 3...</p>
          </div>
          <img
            alt="Photo of adding hops to the wort"
            className="brewing-images"
            src={adding_hops_photo}
          />
          <p className="caption-text">[Photo of me brewing?]</p>
      </div>
    </div>

    <div className="column-1-3">
      <div className="sep-bar">
        <h2>Enjoying the output</h2>
          <div className="small-text">
            <p>Paragraph 1...</p>
            <p>Paragraph 2...</p>
            <p>Paragraph 3...</p>
          </div>
          <img
            alt="Photo of adding hops to the wort"
            className="brewing-images"
            src={adding_hops_photo}
          />
      <p className="caption-text">[Photo of people sampling home brew?]</p>
      </div>
    </div>

    <div className="column-1-3">
      <div className="small-text">
        <p>&nbsp;</p>
      </div>
    </div>

  </section>


  <section className="row">
    <div className="column">
    </div>
  </section>



  </ContentWidth>
    </Layout>
  );
}

export default BrewingPage;
