import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/tailwind/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

  <section class="row">
    <div class="column">
      <h1>Hmm, we can't seem to find that page...</h1>
      <p class="description">Error: 404</p>
    </div>
  </section>


  <section class="row">
    <div class="column">
      <img
        alt="Ghost getting abducted by aliens"
        className="block max-300"
        src={abductionIllustration}
      />
    </div>
    <div class="column">
      <p class="description">Pages you can visit:</p>
        <ul class="ul-small">
          <li><a href="/">Home page</a></li>
          <li><a href="/content-design">Content design</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/patents">Patents</a></li>
          <li><a href="/cryptic-crosswords">Cryptic crosswords</a></li>
          <li><a href="/brewing">Brewing</a></li>
          <li><a href="/reading">Reading</a></li>
          <li><a href="/family">Family</a></li>
        </ul>
    </div>
  </section>

    </Layout>
  );
}

export default NotFoundPage;
