import React from "react";
import { Seo } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import TomPhoto from "../images/index/Tom_Waterton2.png";
import linkedin from "../images/footer/linkedin.svg";
import email from "../images/footer/email.png";
import github from "../images/footer/github.svg";

const AboutPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <div className="about-grid">
          {/* Row 1, col 1 — About me */}
          <section className="about-section about-grid__about">
            <h1>About me</h1>
            <p>Hi, I'm Tom 👋</p>
            <p>
              I'm a <strong>Senior UX / Content Designer</strong> at{" "}
              <a
                href="https://www.ibm.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                IBM
              </a>
              , with 15+ years of experience working on enterprise software
              products and internal tools.
            </p>
            <p>My work spans three closely related areas:</p>
            <ul className="ul-small padding-bottom-small">
              <li>
                <strong>AI tooling design</strong> — identifying workflows where
                AI tools can bring the most benefit to users, and optimising
                content so that it works well for both humans and AI to find,
                scan, and understand.
              </li>
              <li>
                <strong>Content design</strong> — designing and delivering
                clear, engaging, user-centred content across complex software
                products and workflows.
              </li>
              <li>
                <strong>UX design</strong> — applying design thinking and
                research to deliver intuitive, well-structured user experiences.
              </li>
            </ul>
            <p>
              I work highly collaboratively — most commonly alongside other
              designers, researchers, product managers, and engineers.
            </p>
          </section>

          {/* Row 2, col 1 — Outside of work (before photo so narrow order is correct) */}
          <section className="about-section about-grid__outside">
            <h2>Outside of work</h2>
            <p>
              Outside of work I enjoy <Link to="/brewing">brewing</Link>,{" "}
              <Link to="/cryptic-crosswords">cryptic crosswords</Link>, hiking,
              reading (both <Link to="/reading">fiction</Link> and{" "}
              <Link to="/recommended-books">non-fiction</Link>) and spending
              time with my wonderful <Link to="/family">family</Link> and{" "}
              <Link to="/dog">our dog</Link>.
            </p>
          </section>

          {/* Row 1, col 2 — Profile photo */}
          <section className="about-section about-section--photo about-grid__photo">
            <img
              alt="Tom Waterton"
              className="about-profile-photo"
              src={TomPhoto}
            />
          </section>

          {/* Row 2, col 2 — Contact details */}
          <section className="about-section about-section--contact about-grid__contact">
            <h2>Contact details</h2>
            <ul className="about-contact-list">
              <li>
                <a
                  href="mailto:tomwaterton@gmail.com"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Email icon"
                    height="24px"
                    src={email}
                    width="24px"
                  />
                  tomwaterton@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tomwaterton/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="LinkedIn icon"
                    height="24px"
                    src={linkedin}
                    width="24px"
                  />
                  linkedin.com/in/tomwaterton
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tomwaterton"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="GitHub icon"
                    height="24px"
                    src={github}
                    width="24px"
                  />
                  github.com/tomwaterton
                </a>
              </li>
            </ul>
          </section>
        </div>
      </ContentWidth>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo
    description="About Tom Waterton — Senior UX / Content Designer at IBM, with 15+ years of experience in AI tooling design, content design, and UX design."
    title="About me – Tom Waterton"
  />
);
