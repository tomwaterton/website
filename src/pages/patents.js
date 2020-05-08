import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import patent_05_Illustration from "../images/patents/patent_05_image.png";
import patent_04_Illustration from "../images/patents/patent_04_image.png";
import patent_03_Illustration from "../images/patents/patent_03_image.png";
import patent_02_Illustration from "../images/patents/patent_02_image.png";
import patent_01_Illustration from "../images/patents/patent_01_image.png";
import patent_pending_Illustration from "../images/patents/patent_pending.jpg";


function PatentsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`patents`, `ip`, `inventions`, `inventing`, `tom`, `waterton`]}
        title="Patents"
      />

<ContentWidth>
<section className="row">
    <div className="column">
      <h1>Patents</h1>
      <p className="description">I enjoy inventing and have the following patents issued (with a further 4 patents pending).</p>
    </div>
  </section>


  <section className="flex flex-col md:flex-row items-center padding-bottom">
    <ul className="c-tile-list">


    <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US20200112636A1/">
            <img className="article-thumbnail"
              alt="Patent image"
              src={patent_05_Illustration}
            />
          </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US20200112636A1/">
              Communication filtering</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              #US20200112636A1
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Apr 09, 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US20200089847A1/">
            <img className="article-thumbnail"
              alt="Patent image"
              src={patent_04_Illustration}
            />
          </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US20200089847A1/">
              Verifying A User Of A Computer System</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US20200089847A1
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Mar 19, 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US20200066004A1/">
            <img className="article-thumbnail"
              alt="Patent image"
              src={patent_03_Illustration}
            />
          </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US20200066004A1/">
              Text focus for head mounted displays</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US20200066004A1
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
                Feb 27, 2020
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US10009462B1/">
            <img className="article-thumbnail"
                alt="Patent image"
                src={patent_02_Illustration}
              />
          </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US10009462B1/">
              Call filtering to a user equipment</a><br/><span className="article-subhead">(3 patents)</span>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
                #US10009462B1<br/>#US10320978B2<br/>#US20190260874A1
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              Jun 26, 2018<br/>Jun 11, 2019<br/>Aug 22, 2019
            </date>
          </footer>
        </article>
      </li>


      <li className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
          <a href="https://patents.google.com/patent/US9740765B2/">
            <img className="article-thumbnail"
                alt="Patent image"
                src={patent_01_Illustration}
            />
          </a>
          </div>

          <div className="c-article-tile__body">
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US9740765B2/">
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
            <span className="fyi">...Plus 4 other patents pending</span>
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
      <p className="description">I've also had a number of other technical inventions published on <a href="https://ip.com/">IP.com</a>.</p>
        <ul>
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
        </ul>

    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default PatentsPage;
