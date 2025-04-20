import React from "react";
import { SEO } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import family_photo_2024 from "../images/family/family_2024.jpg";

const FamilyPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Family</h1>
            <p>
              <em>
                Family. There's nothing quite like it. A collection of people
                closely connected by genetics, name, home life, and all manner
                of endearing eccentricities.
              </em>
            </p>
            <p>
              <em>
                So much else can and often does change in life, but family
                remains, well, family. We share moments of joy, sadness,
                excitement, and cake.
              </em>
            </p>
            <p>
              <em>
                My family means everything to me. They're my fellow adventurers
                in life and they continue to surprise, delight, amuse, and
                inspire me. Here they are.
              </em>
            </p>
          </div>
          <div className="column">
            <img
              alt="Family photo"
              className="block tilt-portrait-left do-not-print"
              src={family_photo_2024}
            />
          </div>
        </section>

        <section className="row">
          <div className="column"></div>
        </section>

        <section className="row">
          <div className="column-1-3">
            <div className="orangeBorders">
              <h2>Laura</h2>
              <p className="familyNames">
                (aka Lou-Lou, Louella, Mrs W., etc.)
              </p>
              <p>
                Philosopher, poet, artist, chef, gardener, and all-round good
                egg.
              </p>
              <p>
                Laura is a great friend to many, and the one who keeps the rest
                of us fed, clothed, sane, and loved.
              </p>
              <p>Often found: gardening.</p>
            </div>
          </div>

          <div className="column-1-3">
            <div className="orangeBorders">
              <h2>Thea</h2>
              <p className="familyNames">
                (aka Thea-Pearl, Gorgeous-Chops, etc.)
              </p>
              <p>Thea is our thoughtful, caring, empathetic, daughter.</p>
              <p>
                She loves animals, listening to music, playing on the Switch,
                and —  increasingly — going clothes shopping.
              </p>
              <p>Often found: drinking iced coffee.</p>
            </div>
          </div>

          <div className="column-1-3">
            <div className="orangeBorders">
              <h2>Harriet</h2>
              <p className="familyNames">(aka Hattie, Hats, Woo, etc.)</p>
              <p>
                Harriet is our quirky, artistic daughter who loves to draw and
                write.
              </p>
              <p>
                Harriet is also currently into anime, Snoopy, Roblox, and making
                and playing with colourful, sparkly slime.
              </p>
              <p>Often found: drawing.</p>
            </div>
          </div>

          <div className="column-1-3 hiddenSpacer2">
            <p>&nbsp;</p>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <p>
              Also very much part of the family is{" "}
              <Link to="/dog">our dog</Link>, Tiffin.
            </p>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default FamilyPage;

export const Head = () => (
  <SEO
    title="Tom Waterton's website: Family"
    description="Some brief information about my wonderful family (tomwaterton.com)"
  />
);
