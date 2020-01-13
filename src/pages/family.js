import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import family_photo from "../images/family/family_2019.jpg";


function FamilyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Family"
      />

  <section className="row">
    <div className="column">
      <h1>Family</h1>
      <p className="description">Family. There's nothing quite like it. 
      A collection of people closely connected by genetics, home life, and very often 
      all manner of endearing eccentricities.</p>
      <p className="description">So much else can and does change in life, but family remains, well, family. 
      We share moments of joy, sadness, excitement, and cake together.</p>
      <p className="description">My family means everything to me. They are my fellow adventurers in life 
      and they continue to inspire and surprise me.</p>
    </div>
    <div className="column">
      <img
        alt="Family photo"
        className="block tilt-portrait"
        src={family_photo}
      />
    </div>
  </section>


  <section className="row">
    <div className="column">
    </div>
  </section>


  <section className="row">
    <div className="column-1-3">
      <h2>Laura</h2>
        <p className="small-text-italic">(aka Lou-Lou, Louella, Mrs W., etc.)</p>
        <div className="small-text">
          <p>Philosopher, chef, writer, gardener, and all-round good egg. 
            Laura is the one who keeps the rest of us fed, clothed, sane, and loved.</p>
          <p>Laura is also co-partner with me in the sitcom that is raising our two dotty daughters (aka the girls, the smalls, the squirrels, etc.)</p>
          <p>Often found: gardening.</p>
        </div>
    </div>

    <div className="column-1-3">
      <h2>Thea</h2>
        <p className="small-text-italic">(aka Thea-Pearl, Gorgeous-Chops, etc.)</p>
        <div className="small-text">
          <p>Thea is our wonderful, caring, sensitive, book-loving daughter.</p>
          <p>As a lover of all animals, Thea currently talks of becoming a vet some day. 
            In the meantime she tends to our fish, her stick insects and her hamster. </p>
          <p>Often found: making a card for someone.</p>
        </div>
    </div>

    <div className="column-1-3">
      <h2>Harriet</h2>
        <p className="small-text-italic">(aka Hattie, Hats, Hat-Splats, Woo, etc.)</p>
        <div className="small-text">
          <p>Harriet is our laid-back, frock-wearing, bare-footed, free spirited daughter.</p>
          <p>When she grows up, Harriet tells us that she is going to be a horse-rider, ballerina, and artist.
            In addition to these noble aims, we suspect she'll always be a natural joker. 
          </p>
          <p>Often found: making someone laugh.</p>
        </div>
    </div>
  </section>

    </Layout>
  );
}

export default FamilyPage;
