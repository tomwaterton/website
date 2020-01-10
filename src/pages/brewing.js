import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bookshelves_photo from "../images/reading/bookshelves.jpg";
import brewing_kit_photo from "../images/brewing/brewing_kit.jpeg";


function BrewingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Brewing"
      />

  <section class="row">
    <div class="column">
      <h1>Brewing</h1>
      <p class="description">Content to be added here soon... Cheers!</p>
    </div>
    <div class="column">
      <img
        alt="Bookselves photo"
        className="block tilt-landscape"
        src={brewing_kit_photo}
      />
    </div>
  </section>

  <section class="row">
    <div class="column">
      <img
        alt="Bookselves photo"
        className="block"
        src={brewing_kit_photo}
      />
    </div>
    <div class="column">
      <p class="description">Text for section 2</p>
    </div>
  </section>

  <section class="row">
    <div class="column">
      <p class="description">Text for section 3</p>
    </div>
    <div class="column">
      <img
        alt="Bookselves photo"
        className="block tilt-landscape"
        src={bookshelves_photo}
      />
    </div>
  </section>

    </Layout>
  );
}

export default BrewingPage;
