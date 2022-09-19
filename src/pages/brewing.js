import { Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import cheers_photo from "../images/brewing/cheers.jpg";
import brewing_kit_photo from "../images/brewing/brewing_kit.jpeg";
import adding_hops_photo from "../images/brewing/adding_hops.jpeg";
import sharing_beer_photo from "../images/brewing/sharing_beer.jpg";

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
      <p><em>I've always enjoyed the richness and variety of different beers. 
      I love a traditional English bitter in the springtime, a light, hoppy IPA in the summer, 
      an amber ale in the autumn, and a hearty porter or stout in the winter.</em></p>
      <p><em>I also like learning and discovering how things are made, and so a few 
      years back I started learning how to brew beer myself. I'm far from being a master brewer, but I do 
      enjoy the challenge. I also love the sociable side of brewing. I often brew with others and 
      enjoy being able to share the results with friends and family.</em></p>
      <p><em>For more details, see my article: <Link to="/articles/Brewing_a_Mayflower_pale_ale.pdf">Brewing a Mayflower pale ale</Link>.</em></p>
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
      <div className="orangeBorders">
        <h2>The basic theory</h2>
            <p>Beer is made by soaking barley in water until enzymes are activated, which turn 
            the grains’ starches into sugars.</p>
            <p>Different hops are then used to add bitterness, flavor, and aroma to the beer.</p>
            <p>Finally, yeast is added to ferment the brew — that is, turn the sugars into carbon dioxide and alcohol.</p>
          <img
            alt="Photo of my brewing kit"
            className="inTilePhoto"
            src={brewing_kit_photo}
          />
      </div>
    </div>

    <div className="column-1-3">
      <div className="orangeBorders">
        <h2>Experimenting</h2>
            <p>Most of my brews so far have been variations on traditional English ale and IPA recipes, using hops such as Challenger, Goldings, Cascade, and Fuggles.</p>
            <p>To get that extra hoppy taste, I often add in other hops when the wort is in the barrel.</p>
            <p>Sometimes I also add fruit (orange peel, grapefruit, hawthorn berries, etc.).</p>
          <img
            alt="Photo of adding hops to the wort"
            className="inTilePhoto"
            src={adding_hops_photo}
          />
      </div>
    </div>

    <div className="column-1-3">
      <div className="orangeBorders">
        <h2>Enjoying the output</h2>
            <p>After patiently waiting 3-5 weeks for the brew to ferment and condition, the time finally comes to test your latest creation.</p>
            <p>There's nothing better than getting together with friends, family, or colleagues and being able to hand out some home brew for everyone to try.</p>
            <p>It's then onto the next brew...</p>
          <img
            alt="Photo of beer glasses"
            className="inTilePhoto"
            src={sharing_beer_photo}
          />
      </div>
    </div>

    <div className="column-1-3 hiddenSpacer2">
        <p>&nbsp;</p>
    </div>

  </section>



  </ContentWidth>
    </Layout>
  );
}

export default BrewingPage;
