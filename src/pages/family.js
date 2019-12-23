import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import family_photo from "../images/family/family_photo.jpg";


function FamilyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Family"
      />

  <section class="row">
    <div class="column">
      <h1>Family</h1>
      <p class="description">A short paragraph of text will go here...
      A short paragraph of text will go here...
      A short paragraph of text will go here...
      </p>
      <p class="description">A short paragraph of text will go here...
      A short paragraph of text will go here...
      A short paragraph of text will go here...
      </p>
    </div>
    <div class="column">
      <img
        alt="Family photo"
        className="block tilt"
        src={family_photo}
      />
    </div>
  </section>


  <section class="row">
    <div class="column">
    </div>
  </section>


  <section class="row">
    <div class="column">
      <h2>Laura</h2>
        <p class="small-text-italic">(aka Lou-Lou, Mrs W., Love-Bug, Badger, etc.)</p>
        <div class="small-text">
          <p>Part philosopher, chef, writer, and gardener, Laura is the one who keeps the rest of us fed, clothed, and loved.</p>
          <p>Co-partner in raising our daughters (aka the girls, the smalls, the squirrels, etc.)</p>
          <p>Often found: gardening.</p>
        </div>
    </div>

    <div class="column">
      <h2>Thea</h2>
        <p class="small-text-italic">(aka Thea-Pearl, Gorgeous Chops, Chops, etc.)</p>
        <div class="small-text">
          <p>Some more text to go here...</p>
          <p>Some more text to go here...</p>
          <p>Often found: doing a craft activity.</p>
        </div>
    </div>

    <div class="column">
      <h2>Harriet</h2>
        <p class="small-text-italic">(aka Hattie, Hats, Hat-Splats, Woo, etc.)</p>
        <div class="small-text">
          <p>Some more text to go here...</p>
          <p>Some more text to go here...</p>
          <p>Often found: making someone laugh.</p>
        </div>
    </div>
  </section>

    </Layout>
  );
}

export default FamilyPage;
