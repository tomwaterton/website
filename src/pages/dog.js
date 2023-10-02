import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import dog_photo_Poised from "../images/dog/Poised.jpeg";
import dog_photo_Reading from "../images/dog/Reading.jpeg";
import dog_photo_Working from "../images/dog/Working.jpeg";
import dog_photo_Lead from "../images/dog/Lead.jpeg";
import dog_photo_Heath from "../images/dog/Heath.jpg";
import dog_photo_Duck from "../images/dog/Duck.jpeg";

function FamilyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`dog`, `training`, `walking`, `tom`, `waterton`]}
        title="dog"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Our dog</h1>
      <p><em>I've always loved dogs, particularly the various gun dog breeds such as English Springer Spaniels, 
        Cocker Spaniels, Gordon Setters, Labradors, and Golden Retrievers.</em></p>
      <p><em>I love their intelligence and trainability, their energy and agility, and their companionable nature and loyalty.</em></p>
      <p><em>I grew up with a lovely Golden Retriever and had always wanted to get one of my own as an adult, 
        but it wasn't until 2021, when our girls were a bit older and I was able to work from home part of 
        the week that I was finally able to do so.</em></p>
    </div>
    <div className="column">
      <img
        alt="Photo of our dog Tiffin in the woods"
        className="block tilt-landscape-left do-not-print"
        src={dog_photo_Poised}
      />
    </div>
  </section>

  <section className="row">
    <div className="column">
    </div>
  </section>

  <section className="row">
    <div className="column hide-small">
      <img
        alt="Photo of our dog Tiffin lying in front of the wood burner with my daughter"
        className="block tilt-landscape-right do-not-print"
        src={dog_photo_Reading}
      />
    </div>
    <div className="column">
      <h2>A much-loved family pet</h2>
      <p><em>From the first day we got her, Tiffin has been an amazing family pet. She's always happy being around 
        us and brings so much joy to our home.</em></p>
      <p><em>I'm usually up first in the morning and I never tire of seeing the enthusiastic greeting that 
        takes place between my daughters and Tiffin when they come downstairs for breakfast (and then again when they return from school).</em></p>
      <p><em>Having a good family dog is the best thing and I can't imagine life without one now.</em></p>
    </div>
    <div className="column show-small">
      <img
        alt="Photo of our dog Tiffin lying in front of the wood burner with my daughter"
        className="block tilt-landscape-right do-not-print"
        src={dog_photo_Reading}
      />
    </div>
  </section>

  <section className="row">
    <div className="column">
    </div>
  </section>

  <section className="row">
    <div className="column">
      <h2>A working-strain retriever</h2>
      <p><em>Tiffin is a working-strain (as opposed to show-strain) Golden Retriever, which means she's 
        light, slim, and agile, with a golden coloured coat.</em></p>
      <p><em>It also means that Tiffin loves being "worked", using her nose, and retrieving items. In fact, 
        both of her parents were used to pick up birds on shoots, so this is in her genes!</em></p>
      <p><em>We don't take her on shoots, but she and I thoroughly enjoyed completing the "Pet Gun Dog (level 1)" 
        training course at the <strong>National Dog Training Academy</strong> in the summer of 2023.</em></p>
      <p><em>For more information about Tiffin's pedigree and health checks, see <a href="https://www.thekennelclub.org.uk/search/dog-profile/?dogId=252420fb-6c27-ec11-b6e6-000d3a0ca4aa" target="_blank" rel="noopener noreferrer">her profile page</a> ("Parsloe Quartz") on 
      The Kennel Club (UK) website.</em></p>
    </div>
    <div className="column">
      <img
        alt="Photo of our dog Tiffin looking out over a lake towards two ducks"
        className="block tilt-landscape-left do-not-print"
        src={dog_photo_Working}
      />
    </div>
  </section>

  <section className="row">
    <div className="column">
    </div>
  </section>

  <section className="row">
    <div className="column-1-3">
      <div className="dog-montage">
        <img
          alt="Photo of our dog Tiffin with her lead in her mouth"
          className="block tilt-portrait-left-dog do-not-print"
          src={dog_photo_Lead}
        />
      </div>
    </div>

    <div className="column-1-3">
      <div className="dog-montage">
        <img
          alt="Photo of our dog Tiffin on some heathland"
          className="block tilt-portrait-right-dog do-not-print"
          src={dog_photo_Heath}
        />
      </div>
    </div>

    <div className="column-1-3">
      <div className="dog-montage">
        <img
          alt="Photo of our dog Tiffin with a soft toy duck in her mouth"
          className="block tilt-portrait-left-dog do-not-print"
          src={dog_photo_Duck}
        />
      </div>
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
