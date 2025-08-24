import React from "react";
import { SEO } from "../components/seo";
import { Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import AI_assistant from "../images/portfolio/AI_assistant.png";
import Figma_plugin from "../images/portfolio/Figma_plugin.png";
import ES_UI_image from "../images/portfolio/Event_Streams_UI.png";
import Carbon_image from "../images/portfolio/Carbon_guidance.png";
import Terminology_research from "../images/portfolio/Terminology_research.png";
import UX_writing_course_image from "../images/portfolio/ux_writing_course.png";
import Content_assessments from "../images/portfolio/Content_assessments.png";
import Spark_image from "../images/portfolio/Spark.png";
import CD_Guild_image from "../images/portfolio/CD_Guild_Slack.png";

const PortfolioPage = () => {
  return (
    <Layout fullWidth={true}>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Portfolio of work</h1>
            <p>
              <em>
                Some examples of the content and design work that I do. If you'd
                like further details, do{" "}
                <a href="mailto:tomwaterton@gmail.com?Subject=Hello">
                  get in touch
                </a>
                .
              </em>
            </p>
            <p>
              <em>
                (See also the{" "}
                <Link to="/experience">experience and skills</Link>,{" "}
                <Link to="/testimonials">testimonials</Link>, and{" "}
                <Link to="/articles">articles</Link> sections of this site.)
              </em>
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="1">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Delivered an AI assistant</h2>
            <p className="padded">
              <em>Enabling users to get quick answers to their questions</em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column panel medium-text">
            <ul>
              <li>
                Some IBMers were struggling with the many internal IBM release
                management processes. To help such users, I configured and
                deployed an AI assistant.
              </li>
              <li>
                I used the IBM watsonx Orchestrate platform to connect the
                assistant to a documentation set that I had written.
              </li>
              <li>
                The AI assistant is embedded directly in the internal release
                management application that Product Managers and other
                colleagues already use (not shown).
              </li>
              <li>
                The AI assistant responds to users' natural language questions,
                providing a summary response as well as providing links to
                further details.
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshots showing the AI assistant"
              src={AI_assistant}
            />
            <p className="caption-text">
              The release management AI assistant that I delivered
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="2">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Created a Figma plugin that checks content</h2>
            <p className="padded">
              <em>
                Helps designers at IBM easily check and improve the written
                aspects of their designs
              </em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshot of the content guidance section within the Carbon for IBM Products site"
              src={Figma_plugin}
            />
            <p className="caption-text">
              The content checker Figma plugin that I helped create for IBM
              designers
            </p>
          </div>
          <div className="column panel medium-text">
            <ul>
              <li>
                While we have good content guidelines at IBM (see later section
                on this), it's easy for our designers to forget aspects,
                sometimes leading to poor UI content.
              </li>
              <li>
                I came up with the idea of providing them with a way to check
                the written content of their product UI designs directly within
                Figma.
              </li>
              <li>
                Some colleagues helped me get a prototype AI-powered Figma
                plugin running and I then worked on providing the content rules
                for the AI model to reference.
              </li>
              <li>
                I then iteratively tested the plugin on example Figma designs
                and refined the content guidelines and LLM settings until the
                plugin was ready to publish.
              </li>
              <li>
                The Figma plugin is now being used by over 200 IBM designers,
                helping them perfect their UI content. 🎯
              </li>
            </ul>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="3">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Writing UI content</h2>
            <p className="padded">
              <em>Working with product teams to deliver great content</em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column panel medium-text">
            <ul>
              <li>
                I work with lots of different IBM product teams. For example, a
                while back I joined the{" "}
                <span className="strong">IBM Event Streams</span> team for a
                period of 5 months.
              </li>
              <li>
                I ran a content audit to help the team review what content they
                already had published, what user needs it addressed, and what
                needed removing, updating, or creating.
              </li>
              <li>
                After learning about the target users, I wrote all of the UI
                content for the new features that the team were working on.
              </li>
              <li>
                I helped the team design a new set of{" "}
                <a
                  href="https://www.ibm.com/cloud/event-streams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  marketing pages
                </a>{" "}
                that articulated how the product addressed common user goals.
              </li>
              <li>
                We won an{" "}
                <a
                  href="https://www.indigoawards.com/winners/731"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  external design award
                </a>{" "}
                🏆 for the product itself and a separate{" "}
                <a
                  href="https://istc.org.uk/homepage/professional-development-and-recognition/uk-technical-communication-awards/award-winners-2019/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  external design award
                </a>{" "}
                🏆 for the{" "}
                <a
                  href="https://ibm.github.io/event-automation/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs site
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshot of the IBM Event Streams product UI"
              src={ES_UI_image}
            />
            <p className="caption-text">
              An example: the IBM Event Streams product UI that I worked on
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="2">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Setting content standards</h2>
            <p className="padded">
              <em>
                Providing guidance to IBM designers on all aspects of product
                content
              </em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshot of the content guidance section within the Carbon for IBM Products site"
              src={Carbon_image}
            />
            <p className="caption-text">
              The content guidance section that I wrote and maintain
            </p>
          </div>
          <div className="column panel medium-text">
            <ul>
              <li>
                Back in 2016, I was asked to produce IBM Design's first voice
                and tone guide. I started by conducting thorough research to
                understand what aspects of writing designers and engineers were
                struggling with.
              </li>
              <li>
                I then focused on how we could best design and deliver the
                guidance so that it would be fun, useful, and easy to use. I've
                written a little about this process in{" "}
                <a
                  href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this article
                </a>
                .
              </li>
              <li>
                When IBM started using the awesome{" "}
                <a
                  href="https://www.carbondesignsystem.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carbon Design System
                </a>{" "}
                for all product UIs, I began contributing to both{" "}
                <a
                  href="https://www.carbondesignsystem.com/guidelines/content/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the brief external
                </a>{" "}
                and more extensive internal content guides.
              </li>
              <li>
                This is something that I and others continue to evolve —
                inspired by the knowledge that Carbon is used by hundreds of IBM
                product teams, as well as many outside of IBM.
              </li>
            </ul>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="1">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Researching and testing terminology</h2>
            <p className="padded">
              <em>
                Ensuring that the words we use communicate clearly with our
                target users
              </em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column panel medium-text">
            <ul>
              <li>
                One IBM product team was showing some potential customers early
                product designs and noticed there was some confusion around some
                of the terms in the designs.
              </li>
              <li>
                The team were divided about which terms to use and unsure how to
                proceed so I was asked to work with them to help resolve these
                terminology issues.
              </li>
              <li>
                I designed and ran a 'cloze test' research study where recruited
                target users were given a series of sentences about the product
                and asked to supply missing words.
              </li>
              <li>
                This research activity provided the team with empirical data
                showing which terms resonated well with the target audience and
                which terms did not.
              </li>
              <li>
                This taught the team more about their target users' mental
                models and enabled the team to make informed decisions about
                which terms to use.
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              className="panel-images"
              alt="Examples from the terminology cloze test that I ran"
              src={Terminology_research}
            />
            <p className="caption-text">
              Examples from the terminology cloze test that I ran
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="2">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Delivering content education</h2>
            <p className="padded">
              <em>Creating a UX writing course for all IBM designers</em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshot of the IBM UX writing course"
              src={UX_writing_course_image}
            />
            <p className="caption-text">
              The IBM UX writing course that I published in late 2022
            </p>
          </div>
          <div className="column panel medium-text">
            <ul>
              <li>
                IBM has a community of over 3,000 designers. And while we have
                some dedicated content designers (like me!), many design teams
                don't have access to a content specialist.
              </li>
              <li>
                So, in 2022, I was asked to create a self-service online
                education course to help our many talented UX designers, visual
                designers, design researchers, and other design colleauges
                further improve their own UX writing skills.
              </li>
              <li>
                After getting input from a variety of design colleagues, I came
                up with a course outline that mapped to both our Carbon content
                guidelines and to the content heuristics used in our internal
                product design reviews.
              </li>
              <li>
                As I researched and drafted each module I then sought feedback
                from some early adopters, which enabled me to further refine the
                contents until it was ready for publication.
              </li>
            </ul>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="3">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Providing content assessments</h2>
            <p className="padded">
              <em>Helping product teams to further improve their UI content</em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column panel medium-text">
            <ul>
              <li>
                Sadly, many IBM product teams do not have a dedicated content
                specialist.
              </li>
              <li>
                While they have content guidance to follow (see earlier section)
                their UI content often has scope for improvement.
              </li>
              <li>
                Before being released, all products go through a formal 'Design
                & User Experience' review and I often provide the
                content-specific part of this assessment.
              </li>
              <li>
                I assess the written parts of the product UI against a set of
                content heuristics and provide detailed feedback to the product
                teams highlighting both the good content and the areas where
                content could be further improved, along with suggestions and
                supporting materials.
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              className="panel-images"
              alt="Examples of the detailed content reviews I provide to product teams"
              src={Content_assessments}
            />
            <p className="caption-text">
              Examples of the detailed content reviews I provide to product
              teams
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="2">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Helping to create a spark</h2>
            <p className="padded">
              <em>
                Writing the comms for the internal 2023 IBM Spark Design
                Festival
              </em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column">
            <img
              className="panel-images"
              alt="The website for the internal IBM Spark Design Festival 2023"
              src={Spark_image}
            />
            <p className="caption-text">
              The website for the internal IBM Spark Design Festival 2023
            </p>
          </div>
          <div className="column panel medium-text">
            <ul>
              <li>
                For the last few years, IBM has run a fantastic (internal)
                annual design festival. This three-day event features
                presentations, lightning talks, panel discussions, and workshops
                on a wide variety of design-related topics.
              </li>
              <li>
                I joined the leadership committee for this in 2023, responsible
                for all festival content and communications.
              </li>
              <li>
                I worked closely with other committee members, speakers, and
                volunteers to ensure that all festival information was
                communicated clearly and on-brand.
              </li>
              <li>
                This involved writing website copy, event emails, and many Slack
                announcements before, during, and after the festival.
              </li>
              <li>
                A colleague and I also started a monthly Spark blog. Each
                edition explores one design topic and features talks and assets
                from the Spark archives related to that topic.
              </li>
            </ul>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="1">
        <section className="row">
          <div colspan="2" className="column panel">
            <h2>Establishing a community of practice</h2>
            <p className="padded">
              <em>
                Bringing together colleagues who have a passion for great
                content
              </em>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="column panel medium-text">
            <ul>
              <li>
                Back in 2018, many people in IBM hadn't even heard of a content
                designer let alone worked with one.
              </li>
              <li>
                So I got together with the talented{" "}
                <a
                  href="http://www.marandabodas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maranda Bodas
                </a>{" "}
                and a handful of others, and we formed a small community of
                practice, which we called the{" "}
                <span className="strong">IBM Content Design Guild</span>.
              </li>
              <li>
                From an inital meeting with just 7 of us, our community has
                grown month by month over time, and we now have 50+ people at
                our monthly meetings and many more (500+) who engage with our
                Slack channel.{" "}
              </li>
              <li>
                At our lively meetings we share best practices and resources,
                run content crits, and learn about different aspects of content
                design and strategy.
              </li>
              <li>
                You can read more about how we established this vibrant
                community of practice in{" "}
                <a
                  href="https://uxdesign.cc/building-a-community-of-practice-859db7950f77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this article
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              className="panel-images"
              alt="Screenshot of our IBM Content Design Guild Slack channel"
              src={CD_Guild_image}
            />
            <p className="caption-text">
              Our IBM Content Design Guild Slack channel
            </p>
          </div>
        </section>
      </ContentWidth>

      <ContentWidth bgColour="2">
        <section className="row">
          <div className="column">
            <p className="">&nbsp;</p>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => (
  <SEO
    title="Tom Waterton's website: Portfolio"
    description="A breif version of my portfolio, showing some of my recent content design and UX writing work (tomwaterton.com)"
  />
);
