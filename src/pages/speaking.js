import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import microphone_image from "../images/speaking/microphone.png";
import byte_image from "../images/speaking/byte.png";
import button_image from "../images/speaking/button.png";
import utterly_image from "../images/speaking/utterly.png";
import content_con_image from "../images/speaking/content_con.jpeg";
import think_image from "../images/speaking/think.png";
import inter_connect_image from "../images/speaking/inter_connect.jpeg";

function SpeakingPage() {
  return (
    <Layout fullWidth={true}>
      <SEO
        keywords={[`content`, `design`, `strategy`, `speaking`, `writing`, `editing`, `ux`, `tom`, `waterton`]}
        title="Speaking"
      />

<ContentWidth>
<section className="row">
    <div className="column">
      <h1>Speaking</h1>
      <p className="description">I am a firm believer in the value of good content design, in design thinking, 
      and in rapid prototyping, which allows you to quickly try things, get feedback, fail fast, learn, and improve.</p>
      <p className="description">I've had the privilege of speaking on these topics at a few conferences and 
      events over the last few years.</p>
    </div>
    <div className="column">
      <img
        alt="Photo of a microphone with auditorium in the background"
        className="block tilt-landscape-left"
        src={microphone_image}
      />
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="1">
  <section className="row">
    <div className="column">
      <img className="conf-images"
        alt="Photo of me speaking"
        src={byte_image}
      />
    </div>
    <div className="column">
      <p className="conference text-lg">The impact of product voice and tone</p>
      <p className="text-sm font-medium">Product content strategy event organised by 383 Project</p>
      <p className="text-sm italic">Online, Dec 2020</p>
      <p className="">In December I will be sharing a fun exercise that I have used to help product teams at IBM 
      appreciate just what a huge impact the voice and tone of a product has on the overall user experience.</p>
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="2">
  <section className="row reverse">
    <div className="column">
      <p className="conference">Breaking down content silos</p>
      <p className="text-sm font-medium">Button content conference</p>
      <p className="text-sm italic">Online, Oct 2020</p>
      <p className="">We all want to deliver delightful content experiences, but how can you ensure quality 
      and consistency across a customer’s end-to-end content journey when that content is created by thousands 
      of people, across hundreds of teams, based all over the world? In this talk I shared some useful tips and 
      practices to help break down content silos.</p>
    </div>
    <div className="column">
      <img className="conf-images"
        alt="Image from Button content conference"
        src={button_image}
      />
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="3">
  <section className="row">
    <div className="column">
      <img className="conf-images"
        alt="Image from Utterly content conference"
        src={utterly_image}
      />
    </div>
    <div className="column">
      <p className="conference text-lg">Building a content design practice in the enterprise</p>
      <p className="text-sm font-medium">Utterly content conference</p>
      <p className="text-sm italic">Online, Oct 2020</p>
      <p className="">A few years ago I started a cross-company Content Design Guild at IBM, which is still 
      going strong and in this talk I shared some practical tips on how to develop and scale a cross-functional 
      content practice.</p>
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="4">
  <section className="row reverse">
    <div className="column">
      <p className="conference">Establishing end-to-end content collaboration squads</p>
      <p className="text-sm font-medium">IBM ContentCon conference</p>
      <p className="text-sm italic">Hursley, UK, Oct 2019</p>
      <p className="">This talk was focused on the need to think about a product user's end-to-end content 
      experience, from marketing materials through to in-product copy, to support materials, etc. and how 
      to best collaborate across functional divides within an organization.</p>
    </div>
    <div className="column">
      <img className="conf-images"
        alt="Image from ContentCon conference"
        src={content_con_image}
      />
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="1">
  <section className="row">
    <div className="column">
      <img className="conf-images"
        alt="Image from IBM Think conference"
        src={think_image}
      />
    </div>
    <div className="column">
      <p className="conference text-lg">Failing fast, using feedback loops, and the benefits of iterative design</p>
      <p className="text-sm font-medium">IBM Think conference</p>
      <p className="text-sm italic">Las Vegas, USA, Mar 2018</p>
      <p className="">This session introduced the audience to some of the key concepts behind the Lean Startup and 
      design thinking approaches. I helped explain the value of treating decisions like hypotheses to be tested, 
      and how establishing feedback loops helps us to learn, refine or pivot, and ultimately increases our chances 
      of success.</p>
      <p>You can read more about this topic in an <a href="https://medium.com/design-ibm/failing-fast-using-feedback-loops-and-the-benefits-of-iterative-design-e0b86d037f50">article</a> I wrote.</p>
    </div>
  </section>
</ContentWidth>

<ContentWidth bgColour="2">
  <section className="row reverse">
    <div className="column">
      <p className="conference">Achieving a consistent design language across your portfolio</p>
      <p className="text-sm font-medium">IBM InterConnect conference</p>
      <p className="text-sm italic">Las Vegas, USA, Mar 2017</p>
      <p className="">In this talk I demonstrated the benefits of having a consistent design language 
      across your portfolio of offerings and I shared some hints and tips about how to approach developing 
      such a design language yourself.</p>
    </div>
    <div className="column">
      <img className="conf-images"
        alt="Image from IBM Interconnect conference"
        src={inter_connect_image}
      />
    </div>
  </section>
</ContentWidth>

    </Layout>
  );
}

export default SpeakingPage;
