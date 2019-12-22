import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


function BeerPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Beer"
      />

  <section class="row">
    <div class="column">
      <h1>Beer</h1>
      <p class="description">Some text to go here...</p>
    </div>
  </section>

    </Layout>
  );
}

export default BeerPage;
