import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profile_1_Illustration from "../images/family/profile_lady_left.png";
import profile_2_Illustration from "../images/family/profile_child_right.jpg";
import profile_3_Illustration from "../images/family/profile_child_left.jpg";



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
          <p class="description">Some introductory text to go here...</p>
        </div>
      </section>

  <section class="padding-tb">

      <section>
        <div class="left">
          <h2>Laura</h2>
          <div class="italic">
            (aka Lou-Lou, Mrs W., Badger, Love-Bug, Floozy Pants, etc.)
          </div>
          <div>
            Part chef, part writer, part gardener...<br/>
            Co-partner in raising our daughters (aka the girls, the smalls, the squirrels, etc.)<br/>
            Most likely to be found: in the garden.
          </div>
        </div>
        <div class="right">
        <h2>&nbsp;</h2>
            <img
              alt="Ghost getting abducted by aliens"
              className="block w-1/2"
              src={profile_1_Illustration}
            />
        </div>
      </section>

      <section>
        <div class="left">
          <h2>&nbsp;</h2>
            <img
              alt="Ghost getting abducted by aliens"
              className="block w-1/2"
              src={profile_2_Illustration}
            />
        </div>
        <div class="right">
          <h2>Thea</h2>
            <div class="italic">
              (aka Thea-Pearl, Gorgeous Chops, Chops, Chopper, etc.)
            </div>
            <div>
            Some more text to go here...<br/>
            Most likely to be found: reading a book.
            </div>
        </div>
      </section>

      <section>
        <div class="left">
        <h2>Harriet</h2>
          <div class="italic">
          (aka Hattie, Hattie-Cakes, Hattie-Wu, Wombat-Wu, Wu, Hats, Hat-Splats, The Joker, etc.)
          </div>
          <div>
            Some more text to go here...<br/>
            Most likely to be found: wiggling her bottom and laughing.
          </div>
        </div>
        <div class="right">
        <h2>&nbsp;</h2>
            <img
              alt="Ghost getting abducted by aliens"
              className="block w-1/2"
              src={profile_3_Illustration}
            />
        </div>
      </section>

  </section>

    </Layout>
  );
}

export default FamilyPage;
