import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import family_photo from "../images/family/family_2020.jpg";
import dog_photo from "../images/family/Tiffin.jpg";


function FamilyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`family`, `tom`, `waterton`]}
        title="Family"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Family</h1>
      <p><em>Family. There's nothing quite like it. 
      A collection of people closely connected by genetics, name, home life, and all manner of 
      endearing eccentricities.</em></p>
      <p><em>So much else can and often does change in life, but family remains, well, family. 
      We share moments of joy, sadness, excitement, and laughter.</em></p>
      <p><em>My family means everything to me. They're my fellow adventurers in life 
      and they continue to surprise, delight, amuse, and inspire me. Here they are.</em></p>
    </div>
    <div className="column">
      <img
        alt="Family photo"
        className="block tilt-landscape-left do-not-print"
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
      <div className="orangeBorders">
        <h2>Laura</h2>
          <p className="familyNames">(aka Lou-Lou, Louella, Mrs W., etc.)</p>
            <p>Philosopher, chef, writer, artist, gardener, and all-round good egg. 
              Laura is the one who keeps the rest of us fed, sane, and loved.</p>
            <p>Laura is also co-partner with me in the sitcom that is raising our two dotty daughters 
              (aka the smalls).</p>
            <p>Often found: gardening.</p>
      </div>
    </div>

    <div className="column-1-3">
      <div className="orangeBorders">
        <h2>Thea</h2>
          <p className="familyNames">(aka Thea-Pearl, Gorgeous-Chops, etc.)</p>
            <p>Thea is our thoughtful, caring, sensitive, book-loving daughter.</p>
            <p>As a fan of animals, Thea currently talks of becoming a vet some day. 
              In the meantime she tends to our dog (Tiffin), hamster (Nutmeg), and stick insects (Sticky and Twig).</p>
            <p>Often found: doing craft.</p>
      </div>
    </div>

    <div className="column-1-3">
      <div className="orangeBorders">
        <h2>Harriet</h2>
          <p className="familyNames">(aka Hattie, Hats, Hat-Splats, Woo, etc.)</p>
            <p>Harriet is our quirky, frock-wearing, bare-footed, free-spirited daughter.</p>
            <p>When she grows up, Harriet tells us that she's going to be a horse-rider, ballerina, and artist.
              In addition to these noble aims, we suspect she'll always be a natural joker.</p>
            <p>Often found: making someone laugh.</p>
      </div>
    </div>

    <div className="column-1-3 hiddenSpacer1">
      <p>&nbsp;</p>
    </div>

    <div className="column-1-3">
      <div className="orangeBorders">
        <h2>Tiffin</h2>
          <p className="familyNames">(aka Tiffles, K-9, the dog, the mutt, etc.)</p>
            <p>Likes people, dogs, walks, sticks, sausages.</p>
            <img
              alt="Photo of our dog, Tiffin"
              className="do-not-print inTilePhoto"
              src={dog_photo}
            />
            <p>Often found: wherever there's people or food.</p>
      </div>
    </div>

    <div className="column-1-3 hiddenSpacer2">
      <p>&nbsp;</p>
    </div>

    <div className="column-1-3 hiddenSpacer2">
      <p>&nbsp;</p>
    </div>

  </section>

  </ContentWidth>
    </Layout>
  );
}

export default FamilyPage;
