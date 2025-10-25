import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import QuoteLeft from "../images/testimonials/quotation-mark-left.svg";
import QuoteRight from "../images/testimonials/quotation-mark-right.svg";

const TestimonialsPage = () => {
  return (
    <Layout fullWidth={true}>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Testimonials</h1>
            <p>
              <em>
                Note that my{" "}
                <a
                  href="https://www.linkedin.com/in/tomwaterton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn profile
                </a>{" "}
                also lists some colleague recommendations.
              </em>
            </p>
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column-no-padding">
            <img
              className="quote-mark hide-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
          <div className="column">
            <p className="testimonial">
              As one of the first official content designers at IBM, Tom helped
              build the practice from the ground up, constantly finding ways to
              elevate the craft and advocate for content design as a strategic
              partner. He has an incredible way of developing and scaling
              content solutions, all while contributing back to the community as
              a mentor.
            </p>
            <p className="testimonial">
              I don't think I'd be where I'm at in my career if it weren't for
              Tom's incredible leadership, support, and passion for the craft.
            </p>
            <p className="attribution-name">— Maranda Bodas</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">Content Designer</span> at{" "}
              <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Senior Staff Content Designer & Design Manager
              </span>{" "}
              at <span className="attribution-role-company">Google</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/marandabodas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark show-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column">
            <p className="testimonial">
              &ldquo;It was my utmost honor to work with and learn from Tom
              during my time at IBM. I was constantly in awe of how much Tom
              accomplished as he worked diligently to establish standards,
              practices, and culture of IBM's content design program.
            </p>
            <p className="testimonial">
              A true catalyst, Tom had a knack for bringing people along with
              him, sparking participation, being inclusive of perspectives and
              voices, and championing progress bit by bit.
            </p>
            <p className="testimonial">
              And on top of all that, I can say that Tom is an impressively
              thoughtful content designer who works from a great wellspring of
              knowledge and experience about his craft. He was always generous
              with his time when I'd seek advice or collaboration. I'd work with
              Tom again — and follow his lead — in a heartbeat.&rdquo;
            </p>
            <p className="attribution-name">— Jeremy Burton</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">
                Senior UX and Content Designer
              </span>{" "}
              at <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Director of Content Design
              </span>{" "}
              at <span className="attribution-role-company">Upwork</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/jeremygburton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark"
              alt="Quotation mark image"
              src={QuoteRight}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column-no-padding">
            <img
              className="quote-mark hide-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
          <div className="column">
            <p className="testimonial">
              &ldquo;Tom is the best and brightest IBM has to offer as their top
              content expert and leader. During my time in the Design Program
              Office as Content Design Lead, I watched in awe as Tom built style
              guides to set the content tone, voice, strategy, and more for the
              largest org (Cloud and Cognitive), and establish and lead our
              Content Design Guild which I served on as a committee co-chair.
            </p>
            <p className="testimonial">
              Tom would regularly pull in top thought leaders from the industry
              to speak in our guild, develop workshops, invite internal experts,
              and more. Tom has incredibly deep knowledge as a content designer.
            </p>
            <p className="testimonial">
              I consider myself incredibly lucky to have been able to work with
              Tom. Above all, he is kind and humble, and really a joy to be
              around. He truly embodies the human-centered principles that
              designers always tout, but don’t always deliver on (he does). And,
              he goes above and beyond, making sure he shares his wisdom
              regularly by speaking at industry events.&rdquo;
            </p>
            <p className="attribution-name">— Allison Biesboer</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">
                Content Designer and Strategist
              </span>{" "}
              at <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Senior Content Design Manager
              </span>{" "}
              at <span className="attribution-role-company">Visa</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/allisonbiesboer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark show-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column">
            <p className="testimonial">
              &ldquo;It's very rare to find someone so knowledgeable in their
              field and so willing to share. I have had the pleasure of working
              with Tom on a number of complex enterprise products and I was
              constantly impressed by his drive for consistent, personable, and
              professional UX copy. He was always quick to share his thinking
              and knowledge, and I'm not sure he's even aware of how many of his
              teachings I use on a daily basis.
            </p>
            <p className="testimonial">
              Not only is Tom a fantastic beacon for his own craft, he
              constantly seeks to extend his skillset into other areas, such as
              more traditional design disciplines and even front-end
              development. This makes it super easy to communicate quickly and
              directly on source files resulting in a very productive working
              relationship. Tom does all this, whilst honestly being one of the
              kindest people I've met in this industry! I highly recommend Tom
              as a colleague, mentor, and friend.&rdquo;
            </p>
            <p className="attribution-name">— Peter Loveland</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">UI/UX Designer</span>{" "}
              at&nbsp;
              <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Senior Product Designer
              </span>{" "}
              at <span className="attribution-role-company">GitHub</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/peterloveland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark"
              alt="Quotation mark image"
              src={QuoteRight}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column-no-padding">
            <img
              className="quote-mark hide-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
          <div className="column">
            <p className="testimonial">
              &ldquo;Tom is a pleasure to work with. He designs experiences with
              words, the right ones, the proper ones, the just enough ones. The
              result is a better engagement and dialogue with the reader or user
              of the tool, article or product he’s involved in.
            </p>
            <p className="testimonial">
              I’ve had the pleasure to collaborate with Tom across multiple
              projects and I always leave with a deeper understanding on how to
              better communicate within a team and with users.&rdquo;
            </p>
            <p className="attribution-name">— Esteban Pérez-Hemminger</p>
            <p className="attribution">
              Former <span className="attribution-role-name">Design Lead</span>{" "}
              at <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Staff Interaction Designer
              </span>{" "}
              at <span className="attribution-role-company">Google</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/estebanjperez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark show-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column">
            <p className="testimonial">
              &ldquo;Tom is truly outstanding. A man of deep integrity and sound
              judgement, who always maintains a positive attitude. He's one of
              the best enablers I know. He gathers the right people for a
              project, encourages them to say and do what they believe to be
              best for the project, and works harder than anyone else on the
              project to clear obstacles, keep focus, create momentum and
              document outcomes.&rdquo;
            </p>
            <p className="attribution-name">— Barry Gunner</p>
            <p className="attribution">
              <span className="attribution-role-name">Software Engineer</span>{" "}
              at <span className="attribution-role-company">IBM</span>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark"
              alt="Quotation mark image"
              src={QuoteRight}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column-no-padding">
            <img
              className="quote-mark hide-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
          <div className="column">
            <p className="testimonial">
              &ldquo;It has been a pleasure working with you. Thank you for the
              time and talent you have dedicated to helping me learn more about
              content design, contributing to the visibility of and
              opportunities for content professionals at IBM, and (most
              importantly) improving our clients' experience with our content. I
              appreciate your positivity, collaboration style, and ability to
              cut through the noise!&rdquo;
            </p>
            <p className="attribution-name">— Janene Franke</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">
                Business Transformation Program Manager
              </span>{" "}
              at <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Vice President, Professional Services
              </span>{" "}
              at <span className="attribution-role-company">AMCS Group</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/janenefranke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark show-small"
              alt="Quotation mark image"
              src={QuoteLeft}
            />
          </div>
        </section>

        <section className="row bottom-border">
          <div className="column">
            <p className="testimonial">
              &ldquo;Thank you Tom for always pushing the boundaries of what
              we're doing from a content, strategy, and offering
              perspective.&rdquo;
            </p>
            <p className="attribution-name">— Madison Heck</p>
            <p className="attribution">
              Former{" "}
              <span className="attribution-role-name">Product Manager</span> at{" "}
              <span className="attribution-role-company">IBM</span>
            </p>
            <p className="attribution">
              Now{" "}
              <span className="attribution-role-name">
                Staff Product Manager, AI
              </span>{" "}
              at <span className="attribution-role-company">Clio</span>
            </p>
            <p className="attribution">
              <a
                href="https://www.linkedin.com/in/madison-heck09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>
            </p>
          </div>
          <div className="column-no-padding">
            <img
              className="quote-mark"
              alt="Quotation mark image"
              src={QuoteRight}
            />
          </div>
        </section>

        <section className="row">
          <div className="column">
            <p className="">&nbsp;</p>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export default TestimonialsPage;

export const Head = () => (
  <SEO
    title="Tom Waterton's website: Testimonials"
    description="Some testimonials and references that I've received from colleagues past and present (tomwaterton.com)"
  />
);
