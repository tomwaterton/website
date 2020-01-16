import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import patent_3_Illustration from "../images/patents/patent_3_image.png";
import patent_2_Illustration from "../images/patents/patent_2_image.png";
import patent_1_Illustration from "../images/patents/patent_1_image.png";
import patent_pending_Illustration from "../images/patents/patent_pending.jpg";


function PatentsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Patents"
      />

<section className="row">
    <div className="column">
      <h1>Patents</h1>
      <p className="description">I enjoy inventing and currently have 3 issued patents — with a further 6 patents pending.</p>
    </div>
  </section>


  <section className="flex flex-col md:flex-row items-center padding-bottom">
    <ul className="c-tile-list">

      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US10320978B2/" target="_blank">
          <img className="article-thumbnail"
          alt="Patent image"
          src={patent_3_Illustration}
          />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US10320978B2/" target="_blank">
              Call filtering to a user equipment</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US10320978B2
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Jun 11, 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US20180288223A1/" target="_blank">
            <img className="article-thumbnail"
                alt="Patent image"
                src={patent_2_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US20180288223A1/" target="_blank">
              Call filtering to a user equipment</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US20180288223A1
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Oct 04, 2018
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US9740765B2/" target="_blank">
            <img className="article-thumbnail"
                alt="Patent image"
                src={patent_1_Illustration}
              />
        </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US9740765B2/" target="_blank">
              Building nomenclature in a set of documents while building associative document trees</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US9740765B2
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Aug 22, 2017
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
            <img className="article-thumbnail"
                alt="Patent image"
                src={patent_pending_Illustration}
              />
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
            <span className="fyi">...Plus 6 other patents pending</span>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                Currently with the US Patent Office
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                &nbsp;
            </date>
          </footer>
        </article>
      </li>

    </ul>
  </section>


  <section className="row">
    <div className="column">
      <h2>Other (non-patented) inventions</h2>
      <p className="description">I've also had a number of other technical inventions published on <a href="https://ip.com/" target="_blank">IP.com</a>.</p>
        <ul>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000260981" target="_blank">Conference call quick join for co-located participants</a>
              <span className="date">(Jan 14, 2020)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000260980" target="_blank">Method to share a link to an email with other recipients over instant messaging</a>
              <span className="date">(Jan 14, 2020)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000259301" target="_blank">Movement of autonomous vehicles to optimize availability of parking</a>
              <span className="date">(Jul 26, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000257677" target="_blank">Performance improvement to biometric authentication mechanisms</a>
              <span className="date">(Mar 01, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000257280" target="_blank">Auto placement and resizing of images across slides in a presentation software package</a>
              <span className="date">(Jan 29, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000255549" target="_blank">A method to automatically detect potentially incorrect hashtags</a>
              <span className="date">(Oct 01, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000255341" target="_blank">Method for detecting co-located devices in a distributed audio system</a>
              <span className="date">(Sep 18, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000253003" target="_blank">Smart plug to control power flow to an electrical appliance, based on user authentication</a>
              <span className="date">(Feb 27, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000245723" target="_blank">Method for users to update an email that has been sent</a>
              <span className="date">(Apr 01, 2016)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000243008" target="_blank">Enhanced file selection with keyword intelligence</a>
              <span className="date">(Sep 08, 2015)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000242984" target="_blank">If keyboard locale has changed, warn user when they enter their password</a>
              <span className="date">(Sep 04, 2015)</span>
          </li>
        </ul>

    </div>
  </section>

    </Layout>
  );
}

export default PatentsPage;
