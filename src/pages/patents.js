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

<section class="row">
    <div class="column">
      <h1>Patents</h1>
      <p class="description">To date, I have 3 issued patents and a further 6 patents pending.</p>
    </div>
  </section>


  <section className="flex flex-col md:flex-row items-center padding-bottom">
    <ul class="c-tile-list">

      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="https://patents.google.com/patent/US10320978B2/" target="_blank">
          <img class="article-thumbnail"
          alt="Patent image"
          src={patent_3_Illustration}
          />
        </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US10320978B2/" target="_blank">
              Call filtering to a user equipment</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                #US10320978B2
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
                Jun 11, 2019
            </date>
          </footer>
        </article>
      </li>


      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="https://patents.google.com/patent/US20180288223A1/" target="_blank">
            <img class="article-thumbnail"
                alt="Patent image"
                src={patent_2_Illustration}
              />
        </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US20180288223A1/" target="_blank">
              Call filtering to a user equipment</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                #US20180288223A1
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
              Oct 04, 2018
            </date>
          </footer>
        </article>
      </li>


      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
          <a href="https://patents.google.com/patent/US9740765B2/" target="_blank">
            <img class="article-thumbnail"
                alt="Patent image"
                src={patent_1_Illustration}
              />
        </a>
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
              <a href="https://patents.google.com/patent/US9740765B2/" target="_blank">
              Building nomenclature in a set of documents while building associative document trees</a>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                #US9740765B2
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
              Aug 22, 2017
            </date>
          </footer>
        </article>
      </li>


      <li class="c-tile-list__item">
        <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div class="c-article-tile__header">
            <img class="article-thumbnail"
                alt="Patent image"
                src={patent_pending_Illustration}
              />
          </div>

          <div class="c-article-tile__body">
            <h2 class="c-article-tile__title" itemprop="headline">
            <span class="fyi">...Plus 6 other patents pending</span>
            </h2>
          </div>

          <footer class="c-article-tile__footer">
            <span class="c-article-tile__read-time">
                Currently with the US Patent Office
            </span>

            <date class="c-article-tile__date" itemprop="datePublished">
                &nbsp;
            </date>
          </footer>
        </article>
      </li>

    </ul>
  </section>


  <section class="row">
    <div class="column">
      <h2>Other inventions</h2>
      <p class="description">I have also had a number of other technical inventions published on <a href="https://ip.com/" target="_blank">IP.com</a>.</p>
        <ul>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000259301" target="_blank">Movement of autonomous vehicles to optimize availability of parking</a>
              <span class="date">(Jul 26, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000257677" target="_blank">Performance improvement to biometric authentication mechanisms</a>
              <span class="date">(Mar 01, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000257280" target="_blank">Auto placement and resizing of images across slides in a presentation software package</a>
              <span class="date">(Jan 29, 2019)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000255549" target="_blank">A method to automatically detect potentially incorrect hashtags</a>
              <span class="date">(Oct 01, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000255341" target="_blank">Method for detecting co-located devices in a distributed audio system</a>
              <span class="date">(Sep 18, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000253003" target="_blank">Smart plug to control power flow to an electrical appliance, based on user authentication</a>
              <span class="date">(Feb 27, 2018)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000245723" target="_blank">Method for users to update an email that has been sent</a>
              <span class="date">(Apr 01, 2016)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000243008" target="_blank">Enhanced file selection with keyword intelligence</a>
              <span class="date">(Sep 08, 2015)</span>
          </li>
          <li>
              <a href="https://priorart.ip.com/IPCOM/000242984" target="_blank">If keyboard locale has changed, warn user when they enter their password</a>
              <span class="date">(Sep 04, 2015)</span>
          </li>
        </ul>

    </div>
  </section>

    </Layout>
  );
}

export default PatentsPage;
