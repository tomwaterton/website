
import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import MIPhoto from "../images/patents/IBM_Master_Inventor.png";

const PatentsPage = ({ data }) => {

  const [filter, setFilter] = useState("all");

  const whichPatentsToRender = () => {
    const allPatents = data.allPatentsJson.nodes
    let patentsToRenderArray
    if ( filter === "all" ) {
      patentsToRenderArray = allPatents
    } else {
      patentsToRenderArray = allPatents.filter( patent => patent.categories.includes(filter) )
    }
    return patentsToRenderArray
  }


  return(

    <Layout>
      <SEO
        keywords={[`patents`, `ip`, `inventions`, `inventing`, `tom`, `waterton`]}
        title="Patents"
      />

      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Patents</h1>
            <p><em>I enjoy inventing and have the following patents issued (with a few others pending).</em></p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <ul className="c-tile-list">
            <RenderPatents patents={whichPatentsToRender()} />
          </ul>
        </section>

        <section className="row">
          <div className="column">
            <h2>Other (non-patented) inventions</h2>
            <p><em>I've also had a number of other technical inventions published on <a href="https://ip.com/">IP.com</a>.</em></p>
            <ol reversed className="publish-list">
              {/* <li>
                <a href="???">???</a>
                <span className="date">(Jan ??, 2023)</span>
              </li> */}
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271786D">System to enhance messaging platform notification handling based on the current locations of individual users</a>
                <span className="date">(Feb 09, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271570D">A trusted personal assistant that augments questions and responses to/from other third-party assistants...</a>
                <span className="date">(Jan 11, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271404D">Automatically closing browser tabs that have become redundant based on event metadata</a>
                <span className="date">(Dec 06, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00270899D">Method to automate closure of related tabs when a purchase is made in a browser</a>
                <span className="date">(Sep 08, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00269942D">System and method for controlling access to the slides of a presentation as it is being presented</a>
                <span className="date">(May 26, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000269748">Method for verifying where a person lives using confidence patterns against their historical location data</a>
                <span className="date">(May 10, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000267805">Automatic assignment of conference call participants into multiple rounds of sub-groups</a>
                <span className="date">(Nov 25, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000267785 ">System to help users activate clickable elements of a web page</a>
                <span className="date">(Nov 24, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000266297">System and method for synchronizing annotated notes with discussion from temporal media</a>
                <span className="date">(Jun 30, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00264642">Automatically tag screen recording video output with application metadata</a>
                <span className="date">(Jan 15, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00263834">Scheduling meetings containing multiple segments where some attendees are only needed in some segments</a>
                <span className="date">(Oct 09, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000263471">System to automatically identify when new IM messages might be better suited to a thread</a>
                <span className="date">(Sep 02, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000263350">Use of geolocation to enhance accuracy of social media handles and hashtags suggested and used</a>
                <span className="date">(Aug 21, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000262489">System to determine the relevance of social media posts based on other users' responses</a>
                <span className="date">(Jun 05, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000262444">Detection of password-like strings based on organizational criteria</a>
                <span className="date">(Jun 01, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000260981">Conference call quick join for co-located participants</a>
                <span className="date">(Jan 14, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000260980">Method to share a link to an email with other recipients over instant messaging</a>
                <span className="date">(Jan 14, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000259301">Movement of autonomous vehicles to optimize availability of parking</a>
                <span className="date">(Jul 26, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000257677">Performance improvement to biometric authentication mechanisms</a>
                <span className="date">(Mar 01, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000257280">Auto placement and resizing of images across slides in a presentation software package</a>
                <span className="date">(Jan 29, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000255549">A method to automatically detect potentially incorrect hashtags</a>
                <span className="date">(Oct 01, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000255341">Method for detecting co-located devices in a distributed audio system</a>
                <span className="date">(Sep 18, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000253003">Smart plug to control power flow to an electrical appliance, based on user authentication</a>
                <span className="date">(Feb 27, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000245723">Method for users to update an email that has been sent</a>
                <span className="date">(Apr 01, 2016)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000243008">Enhanced file selection with keyword intelligence</a>
                <span className="date">(Sep 08, 2015)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000242984">If keyboard locale has changed, warn user when they enter their password</a>
                <span className="date">(Sep 04, 2015)</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <h2>IBM Master Inventor</h2>
            <p><em>In October 2021 I was awarded the honorary title of <a href="https://en.wikipedia.org/wiki/IBM_Master_Inventor">IBM Master Inventor</a> in 
            recognition of my ongoing contribution to IBM's patent portfolio and invention community.</em></p>

            <img
              alt="Family photo"
              className="masterInventor do-not-print"
              src={MIPhoto}
            />

            <p><em>My Google Scholar profile can be found <a href="https://scholar.google.com/citations?user=9tBYOcgAAAAJ&hl=en">here</a>.</em></p>
          </div>
        </section>

      </ContentWidth>
    </Layout>

  )
}

export const query = graphql`
  {
    allPatentsJson {
      nodes {
        title
        url
        image
        min
        date
      }
    }
  }
`

export default PatentsPage


class RenderPatents extends React.Component {
  render() {
    return(
      this.props.patents.map( (patent,i) => (
        <PatentTile
          key={patent.title}
          title={patent.title}
          url={patent.url}
          image={patent.image}
          min={patent.min}
          date={patent.date}
        />
      ))
    )
  }
}


class PatentTile extends React.Component {
  render() {
    return(
      <li key={this.props.key} className="c-tile-list__item">
        <patent className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
            <a href={this.props.url}>
              <img className="article-thumbnail"
                alt="Patent image"
                src={`../images/patents/${this.props.image}`}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <div>
              <h2 className="c-article-tile__title" itemprop="headline">
                <a href={this.props.url}>{this.props.title}</a>
              </h2>
            </div>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time" itemprop="patentRef">
              {this.props.min}
            </span>

            <span className="c-article-tile__date" itemprop="datePublished">
              {this.props.date}
            </span>
          </footer>
        </patent>
      </li>
    )
  }
}