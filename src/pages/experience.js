import React from "react";
import { Seo } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import Tom_at_work_photo from "../images/experience/Tom_at_work.jpg";

const ExperiencePage = () => {
  return (
    <Layout fullWidth={true}>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Experience and skills</h1>
            <p>
              I was one of the first content designers employed by IBM Design,
              and have spent 15+ years building expertise across content design,
              UX design, and — more recently — AI tooling design. Over time I've
              progressed to broader roles, taking on UX responsibilities and
              working on IBM Software-wide projects.
            </p>
            <p>
              I work highly collaboratively, typically alongside designers,
              researchers, product managers, and engineers — often with
              colleagues across the globe.
            </p>
            <p>
              From 2025 onwards I've increasingly focused on AI-related projects
              and tools — identifying workflows where AI can bring the most
              benefit to users, and optimising content and design so that it
              works well for both humans and AI to find, scan, and understand.
              🤖👨‍💻
            </p>
            <p>
              <em>
                See also:{" "}
                <a
                  href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Confessions of a content designer
                </a>{" "}
                (article),{" "}
                <a
                  href="https://workingincontent.com/resources/inside-content-design-at-ibm/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Inside content design at IBM
                </a>{" "}
                (interview), or my <Link to="/portfolio">portfolio</Link>.
              </em>
            </p>
          </div>
          <div className="column">
            <img
              alt="Me working on some designs with colleagues"
              className="block tilt-landscape-left"
              src={Tom_at_work_photo}
            />
          </div>
        </section>

        <section className="row special">
          <div className="column">
            <h2>Job history</h2>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <ul className="ul-small">
              <li>
                <strong>Senior UX / Content Designer, AI Tooling</strong>, IBM
                (working on internal AI tooling for IBM Software; Jul 2026 –
                present)
              </li>
              <li>
                <strong>Senior UX / Content Designer</strong>, IBM (working for
                IBM Software's Product Excellence Office; Apr 2024 – Jun 2026)
              </li>
              <li>
                <strong>Senior Content Designer</strong>, IBM (working across
                IBM Software; May 2022 – Feb 2024)
              </li>
              <li>
                <strong>Senior Content Designer</strong>, IBM (working in one
                part of IBM Software; Feb 2019 – Apr 2022)
              </li>
              <li>
                <strong>Content Designer</strong>, IBM (working in one part of
                IBM Software; Aug 2016 – Jan 2019)
              </li>
              <li>
                <strong>Tech Writer</strong> then <strong>Editor</strong> then{" "}
                <strong>Content Team Manager</strong>, IBM (Apr 2010 – Jul 2016)
              </li>
            </ul>
          </div>
        </section>

        <section className="row">
          <div className="column">
            <h2>My day-to-day work</h2>
          </div>
        </section>

        <section className="row">
          <div className="column-1-2">
            <p className="mock-h3">Content design 📝</p>
            <ul className="ul-small">
              <li>Writing for humans and for AI</li>
              <li>Simplifying the complex</li>
              <li>User-centred writing</li>
              <li>Applying voice and tone</li>
              <li>Writing UI tours</li>
              <li>Writing UI copy</li>
              <li>Technical / doc writing</li>
            </ul>
          </div>
          <div className="column-1-2">
            <p className="mock-h3">UX design 👨‍💻</p>
            <ul className="ul-small">
              <li>Research and analysis</li>
              <li>Information architecture</li>
              <li>Wireframing and prototyping</li>
              <li>Interaction design</li>
              <li>Usability testing</li>
              <li>Design strategy</li>
              <li>Storytelling and communication</li>
            </ul>
          </div>
          <div className="column-1-2">
            <p className="mock-h3">Other 👨‍🏫</p>
            <ul className="ul-small">
              <li>Coaching</li>
              <li>Leading teams</li>
              <li>Facilitating workshops</li>
              <li>Applying design thinking</li>
              <li>Writing articles</li>
              <li>
                Coming up with <s>bad</s> great puns
              </li>
              <li>Drinking copious cups of tea 🫖</li>
            </ul>
          </div>
          <div className="column-1-2">
            <p className="mock-h3">Tools and technologies 🧰</p>
            <ul className="ul-small">
              <li>AI tools: IBM Bob (daily), Copilot, ChatGPT, Figma Make</li>
              <li>CMS: Adobe Experience Manager</li>
              <li>Collaboration: Airtable, Mural, Slack</li>
              <li>Design: Figma, Sketch</li>
              <li>Doc source: DITA, Markdown</li>
              <li>Web: HTML, CSS, Carbon, Gatsby, Jekyll</li>
              <li>Work management: GitHub, Jira, Monday.com</li>
            </ul>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default ExperiencePage;

export const Head = () => (
  <Seo
    description="Tom Waterton's work experience and skills as a Senior UX / Content Designer at IBM, covering content design, AI tooling design, and UX design."
    title="Experience and skills – Tom Waterton"
  />
);
