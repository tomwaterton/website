import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TomPhoto from "../images/home/Tom_Waterton_photo.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Photo of Tom Waterton"
          className="block mx-auto w-1/2 padding-bottom"
          src={TomPhoto}
        />

        <h1 class="padding-bottom-small">
          Hi, I'm Tom.
        </h1>
        <p class="lead padding-bottom-small">I'm an experienced <a href="/content-design">Content Designer</a> currently working at <a href="https://www.ibm.com/design/" target="_blank">IBM Design</a>.
        </p>

        {/* <p>(I'm also a <a href="/articles">writer</a>, <a href="/patents">inventor</a>, <a href="/cryptic-crosswords">cruciverbalist</a>, <a href="/reading">bookworm</a>, <a href="/brewing">brewer</a>, and <a href="/family">family man</a>.)</p> */}

      </section>
    </Layout>
  );
}

export default IndexPage;
