import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


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
  </section>

    </Layout>
  );
}

export default BrewingPage;