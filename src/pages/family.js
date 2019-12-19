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

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:mr-8">
          <h1>Family</h1>
        </div>
      </section>

      <section class="padding-tb">

        <div class="row">
          <div class="column">
            <p>A short paragraph of text will go here...
            A short paragraph of text will go here...
            A short paragraph of text will go here...
            A short paragraph of text will go here...
            </p>
          </div>
          <div class="column">
            <img
              alt="Family photo"
              className="block w-1/2 tilt"
              src={family_photo}
            />
          </div>
        </div>

        <div class="row">
          <div class="column-1-3">
            <h2>Laura</h2>
            <p class="small-text-italic">(aka Lou-Lou, Mrs W., Badger, Love-Bug, Floozy Pants, etc.)</p>
            <div class="small-text">
              <p>Part chef, part writer, part gardener...</p>
              <p>Co-partner in raising our daughters (aka the girls, the smalls, the squirrels, etc.)</p>
              <p>Most likely to be found: gardening.</p>
            </div>
          </div>

          <div class="column-1-3">
            <h2>Thea</h2>
            <p class="small-text-italic">(aka Thea-Pearl, Gorgeous Chops, Chops, Chopper, etc.)</p>
            <div class="small-text">
              <p>Some more text to go here...</p>
              <p>Some more text to go here...</p>
              <p>Most likely to be found: doing a craft activity.</p>
            </div>
          </div>

          <div class="column-1-3">
            <h2>Harriet</h2>
            <p class="small-text-italic">(aka Hattie, Hattie-Cakes, Hattie-Wu, Wombat-Wu, Hats, Hat-Splats, The Joker, etc.)</p>
            <div class="small-text">
              <p>Some more text to go here...</p>
              <p>Some more text to go here...</p>
              <p>Most likely to be found: making someone laugh.</p>
            </div>
          </div>
        </div>

      </section>

    </Layout>
  );
}

export default FamilyPage;
