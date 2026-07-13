import React, { useState } from "react";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import MI_certificate from "../images/inventing/MI_award_framed.png";
import MI_digital_badge from "../images/inventing/IBM_Master_Inventor.png";

const PatentsPage = ({ data }) => {
  const [filter, setFilter] = useState("all");

  const whichPatentsToRender = () => {
    const allPatents = data.allPatentsJson.nodes;
    let patentsToRenderArray;
    if (filter === "all") {
      patentsToRenderArray = allPatents;
    } else {
      patentsToRenderArray = allPatents.filter((patent) =>
        patent.categories.includes(filter)
      );
    }
    return patentsToRenderArray;
  };

  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1 id="top">Inventing</h1>
            <p>
              <em>
                I've always enjoyed problem solving and inventing. This page
                lists some of my technical inventions.
              </em>
            </p>
            <ul className="ul-small do-not-print">
              <li>
                <a href="#patents">Patents</a>
              </li>
              <li>
                <a href="#other-inventions">Other (non-patented) inventions</a>
              </li>
              <li>
                <a href="#master-inventor">An IBM Master Inventor</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              alt="My IBM Master Inventor framed certificate"
              className="block tilt-portrait-right"
              src={MI_certificate}
            />
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="patents"></div>
            <h2>Patents</h2>
            <p>
              <em>
                I currently have 19 issued patents, with a further 3 pending. My
                Google Scholar profile can be found{" "}
                <a
                  href="https://scholar.google.com/citations?user=9tBYOcgAAAAJ&hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </a>
                .
              </em>
            </p>
          </div>
        </section>

        <section className="flex flex-col padding-bottom">
          <ul className="c-tile-list">
            <RenderPatents patents={whichPatentsToRender()} />
          </ul>
          <div className="backToTop">
            <a href="#top">&uarr; Back to top</a>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="other-inventions"></div>
            <h2>Other (non-patented) inventions</h2>
            <p>
              <em>
                I've also had a number of other technical inventions published
                on <a href="https://ip.com/">IP.com</a>.
              </em>
            </p>
            <ol className="publish-list" reversed>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00276414D">
                  System and method to aid a user with complex software
                  configuration decisions and their implications
                </a>
                <span className="date">(Jun 30, 2025)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00275400D">
                  Using haptic feedback to warn users of potentially dangerous
                  links and actions within a UI
                </a>
                <span className="date">(Nov 22, 2024)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00275134D">
                  Method to define conditions for the automatic approval of code
                  change requests
                </a>
                <span className="date">(Oct 02, 2024)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000273130">
                  Method to generate online collaboration prompts from
                  cloud-based document repositories
                </a>
                <span className="date">(Oct 25, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00272882D">
                  Selective darkening of parts of a computer display based on
                  user behaviour...
                </a>
                <span className="date">(Aug 30, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000272549">
                  System and method for responsive UI elements that move in
                  response to a user's intent
                </a>
                <span className="date">(Jun 21, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271786D">
                  System to enhance messaging platform notification handling
                  based on the current locations of individual users
                </a>
                <span className="date">(Feb 09, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271570D">
                  A trusted personal assistant that augments questions and
                  responses to/from other third-party assistants...
                </a>
                <span className="date">(Jan 11, 2023)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00271404D">
                  Automatically closing browser tabs that have become redundant
                  based on event metadata
                </a>
                <span className="date">(Dec 06, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00270899D">
                  Method to automate closure of related tabs when a purchase is
                  made in a browser
                </a>
                <span className="date">(Sep 08, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00269942D">
                  System and method for controlling access to the slides of a
                  presentation as it is being presented
                </a>
                <span className="date">(May 26, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000269748">
                  Method for verifying where a person lives using confidence
                  patterns against their historical location data
                </a>
                <span className="date">(May 10, 2022)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000267805">
                  Automatic assignment of conference call participants into
                  multiple rounds of sub-groups
                </a>
                <span className="date">(Nov 25, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000267785 ">
                  System to help users activate clickable elements of a web page
                </a>
                <span className="date">(Nov 24, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000266297">
                  System and method for synchronizing annotated notes with
                  discussion from temporal media
                </a>
                <span className="date">(Jun 30, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00264642">
                  Automatically tag screen recording video output with
                  application metadata
                </a>
                <span className="date">(Jan 15, 2021)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/00263834">
                  Scheduling meetings containing multiple segments where some
                  attendees are only needed in some segments
                </a>
                <span className="date">(Oct 09, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000263471">
                  System to automatically identify when new IM messages might be
                  better suited to a thread
                </a>
                <span className="date">(Sep 02, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000263350">
                  Use of geolocation to enhance accuracy of social media handles
                  and hashtags suggested and used
                </a>
                <span className="date">(Aug 21, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000262489">
                  System to determine the relevance of social media posts based
                  on other users' responses
                </a>
                <span className="date">(Jun 05, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000262444">
                  Detection of password-like strings based on organizational
                  criteria
                </a>
                <span className="date">(Jun 01, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000260981">
                  Conference call quick join for co-located participants
                </a>
                <span className="date">(Jan 14, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000260980">
                  Method to share a link to an email with other recipients over
                  instant messaging
                </a>
                <span className="date">(Jan 14, 2020)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000259301">
                  Movement of autonomous vehicles to optimize availability of
                  parking
                </a>
                <span className="date">(Jul 26, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000257677">
                  Performance improvement to biometric authentication mechanisms
                </a>
                <span className="date">(Mar 01, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000257280">
                  Auto placement and resizing of images across slides in a
                  presentation software package
                </a>
                <span className="date">(Jan 29, 2019)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000255549">
                  A method to automatically detect potentially incorrect
                  hashtags
                </a>
                <span className="date">(Oct 01, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000255341">
                  Method for detecting co-located devices in a distributed audio
                  system
                </a>
                <span className="date">(Sep 18, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000253003">
                  Smart plug to control power flow to an electrical appliance,
                  based on user authentication
                </a>
                <span className="date">(Feb 27, 2018)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000245723">
                  Method for users to update an email that has been sent
                </a>
                <span className="date">(Apr 01, 2016)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000243008">
                  Enhanced file selection with keyword intelligence
                </a>
                <span className="date">(Sep 08, 2015)</span>
              </li>
              <li>
                <a href="https://priorart.ip.com/IPCOM/000242984">
                  If keyboard locale has changed, warn user when they enter
                  their password
                </a>
                <span className="date">(Sep 04, 2015)</span>
              </li>
            </ol>
            <div className="backToTop">
              <a href="#top">&uarr; Back to top</a>
            </div>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <div className="anchorLinkSpacer" id="master-inventor"></div>
            <h2>An IBM Master Inventor</h2>
            <p>
              <em>
                In October 2021 I was awarded the honorary title of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/IBM_Master_Inventor"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IBM Master Inventor
                </a>{" "}
                in recognition of my ongoing contribution to IBM's patent
                portfolio and inventing community. (Link to this{" "}
                <a
                  href="https://www.credly.com/badges/6f04d3d0-ded1-43ba-a6a8-6253e6ee4bda"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  verified digital credential
                </a>
                .)
              </em>
            </p>

            <img
              alt="My IBM Master Inventor digital badge"
              className="masterInventor do-not-print"
              src={MI_digital_badge}
            />

            <div className="backToTop">
              <a href="#top">&uarr; Back to top</a>
            </div>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export const query = graphql`
  {
    allPatentsJson {
      nodes {
        title
        url
        image
        min
        date
        pending
      }
    }
  }
`;

export default PatentsPage;

export const Head = () => (
  <Seo
    description="Information about my inventions, patents, and my IBM Master Inventor honorary title (tomwaterton.com)"
    title="Tom Waterton's website: Inventing"
  />
);

const RenderPatents = ({ patents }) => {
  return patents.map((patent) => (
    <PatentTile
      date={patent.date}
      image={patent.image}
      key={patent.title}
      min={patent.min}
      pending={patent.pending}
      title={patent.title}
      url={patent.url}
    />
  ));
};

const PatentTile = ({ url, image, title, pending, min, date }) => {
  return (
    <li className="c-tile-list__item">
      <article
        className="c-article-tile col3"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="c-article-tile__header">
          <a href={url}>
            <img
              alt="Patent thumbnail image"
              className="article-thumbnail"
              src={`../images/patents/${image}`}
            />
          </a>
        </div>

        <div className="c-article-tile__body">
          <div>
            <h2 className="c-article-tile__title" itemProp="headline">
              <a href={url}>{title}</a>
            </h2>
            <span className="pending">{pending}</span>
          </div>
        </div>

        <footer className="c-article-tile__footer">
          <span className="c-article-tile__read-time" itemProp="patentRef">
            {min}
          </span>

          <span className="c-article-tile__date" itemProp="datePublished">
            {date}
          </span>
        </footer>
      </article>
    </li>
  );
};
