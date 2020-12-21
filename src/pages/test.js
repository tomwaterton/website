import React, {useState} from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";

function TestPage() {
    // Declare a new state variable, which we'll call "filter"
    const [filter, setFilter] = useState("all");

  return (
    <Layout>
      <SEO
        keywords={[`about`, `tom`, `waterton`, `content`, `design`]}
        title="Home"
      />

  <ContentWidth>

    <div id="myBtnContainer" className="flex text-sm">
      <div className="mr-8">
        <button className="btn active" onClick={() => setFilter("all")}> Show all</button>
      </div>

      <div className="align-middle">
        Format:
      </div>
      <div>
        <button className="btn" onClick={() => setFilter("digital")}> Digital</button>
        <button className="btn" onClick={() => setFilter("print")}> Print</button>
      </div>
      <div>
        Theme: 
        <button className="btn" onClick={() => setFilter("brewing")}> Brewing</button>
      <button className="btn" onClick={() => setFilter("comms")}> Communication</button>
        <button className="btn" onClick={() => setFilter("content")}> Content design</button>
        <button className="btn" onClick={() => setFilter("culture")}> Culture</button>
        <button className="btn" onClick={() => setFilter("design")}> Design</button>
        <button className="btn" onClick={() => setFilter("pers-dev")}> Personal development</button>
      </div>
    </div>


<div className={`container ${filter}`}>
  <div className="filterDiv digital pers-dev">Article 14</div>
  <div className="filterDiv digital comms pers-dev">Article 13</div>
  <div className="filterDiv print brewing">Article 12</div>
  <div className="filterDiv digital content">Article 11</div>
  <div className="filterDiv digital content">Article 10</div>
  <div className="filterDiv digital content">Article 9</div>
  <div className="filterDiv digital comms">Article 8</div>
  <div className="filterDiv digital pers-dev">Article 7</div>
  <div className="filterDiv print culture design">Article 6</div>
  <div className="filterDiv digital design">Article 5</div>
  <div className="filterDiv digital content">Article 4</div>
  <div className="filterDiv digital culture design">Article 3</div>
  <div className="filterDiv digital pers-dev">Article 2</div>
  <div className="filterDiv digital comms">Article 1</div>
</div>

      </ContentWidth>
    </Layout>
  );
}

export default TestPage;
