import React from "react";
import { Seo } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import TomPhoto from "../images/index/Tom_Waterton2.png";
import AIImage from "../images/portfolio/AI_assistant.png";
import ContentImage from "../images/portfolio/Carbon_guidance.png";
import UXImage from "../images/portfolio/Event_Streams_UI.png";

const IndexPage = () => {
  return (
    <Layout>
      <ContentWidth>
        {/* Hero */}
        <section className="home-hero row">
          <div className="column">
            <p className="home-hero__eyebrow">
              Senior UX / Content Designer · IBM
            </p>
            <h1 className="home-hero__name">Hi, I'm Tom 👋</h1>
            <p className="home-hero__intro">
              I design clear, user-centred UI workflows. I have over{" "}
              <Link to="/experience">15 years of experience</Link> working for
              an award-winning modern software development company (IBM), where
              I've honed my skills in content design, UX design, and more
              recently in AI tooling design.
            </p>
            <p className="home-hero__links">
              <Link className="home-hero__cta" to="/portfolio">
                See my work
              </Link>
              <Link
                className="home-hero__cta home-hero__cta--secondary"
                to="/about"
              >
                About me
              </Link>
            </p>
          </div>
          <div className="column home-hero__photo-col">
            <img
              alt="Tom Waterton"
              className="home-hero__photo"
              src={TomPhoto}
            />
          </div>
        </section>

        {/* Domain cards divider */}
        <section className="row special">
          <div className="column">
            <h2>What I do</h2>
          </div>
        </section>

        {/* Three domain cards */}
        <section className="row home-cards">
          <div className="column-1-3">
            <div className="home-card">
              <img
                alt="Screenshot of an AI assistant interface"
                className="home-card__image"
                src={AIImage}
              />
              <div className="home-card__body">
                <h3 className="home-card__title">AI tooling design</h3>
                <p className="home-card__desc">
                  Designing AI-powered tools, configuring assistants, and
                  optimising content for both humans and AI.
                </p>
                <Link
                  className="home-card__link"
                  to="/portfolio/?filter=ai-tooling-design"
                >
                  View AI examples →
                </Link>
              </div>
            </div>
          </div>

          <div className="column-1-3">
            <div className="home-card">
              <img
                alt="Screenshot of content design guidance"
                className="home-card__image"
                src={ContentImage}
              />
              <div className="home-card__body">
                <h3 className="home-card__title">Content design</h3>
                <p className="home-card__desc">
                  Crafting clear, user-centred writing, covering UI copy,
                  content strategy, voice, and content systems.
                </p>
                <Link
                  className="home-card__link"
                  to="/portfolio/?filter=content-design"
                >
                  View content design examples →
                </Link>
              </div>
            </div>
          </div>

          <div className="column-1-3">
            <div className="home-card">
              <img
                alt="Screenshot of a UX design project"
                className="home-card__image"
                src={UXImage}
              />
              <div className="home-card__body">
                <h3 className="home-card__title">UX design</h3>
                <p className="home-card__desc">
                  Shaping intuitive, well-structured user experiences through
                  design thinking, research, and collaboration.
                </p>
                <Link
                  className="home-card__link"
                  to="/portfolio/?filter=ux-design"
                >
                  View UX design examples →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    description="Tom Waterton is a Senior UX / Content Designer at IBM, with 15+ years of experience in AI tooling design, content design, and UX design."
    title="Tom Waterton — Senior UX / Content Designer"
  />
);
