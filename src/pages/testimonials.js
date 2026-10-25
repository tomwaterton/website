import React from "react";
import { Seo } from "../components/seo";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import QuoteLeft from "../images/testimonials/quotation-mark-left.svg";
import QuoteRight from "../images/testimonials/quotation-mark-right.svg";
import testimonials from "../data/testimonials.json";

const TestimonialsPage = () => {
  return (
    <Layout fullWidth={true}>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Testimonials</h1>
            <p>
              <em>
                Some recommendations from colleagues across senior design,
                engineering, and product leadership roles.
              </em>
            </p>
            <p>
              <em>
                {" "}
                Note that my{" "}
                <a
                  href="https://www.linkedin.com/in/tomwaterton/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn profile
                </a>{" "}
                also lists some colleague recommendations.
              </em>
            </p>
          </div>
        </section>

        {testimonials.map((t, index) => {
          const isRight = index % 2 === 0;
          const quoteMarkColumn = (extraClass) => (
            <div className="column-no-padding">
              <img
                alt=""
                className={`quote-mark${extraClass ? ` ${extraClass}` : ""}`}
                src={isRight ? QuoteLeft : QuoteRight}
              />
            </div>
          );

          return (
            <section className="row bottom-border" key={t.id}>
              {isRight && quoteMarkColumn("hide-small")}
              <div className="column">
                {t.paragraphs.map((para, i) => (
                  <p className="testimonial" key={i}>
                    {i === 0 && "\u201C"}
                    {para}
                    {i === t.paragraphs.length - 1 && "\u201D"}
                  </p>
                ))}
                <p className="attribution-name">— {t.name}</p>
                {t.formerRole && (
                  <p className="attribution">
                    Former{" "}
                    <span className="attribution-role-name">
                      {t.formerRole}
                    </span>{" "}
                    at{" "}
                    <span className="attribution-role-company">
                      {t.formerCompany}
                    </span>
                  </p>
                )}
                <p className="attribution">
                  {t.formerRole ? "Now " : ""}
                  <span className="attribution-role-name">
                    {t.currentRole}
                  </span>{" "}
                  at{" "}
                  <span className="attribution-role-company">
                    {t.currentCompany}
                  </span>
                </p>
                {t.linkedIn && (
                  <p className="attribution">
                    <a
                      href={t.linkedIn}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn profile
                    </a>
                  </p>
                )}
              </div>
              {isRight && quoteMarkColumn("show-small")}
              {!isRight && quoteMarkColumn(null)}
            </section>
          );
        })}

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
  <Seo
    description="Testimonials and references for Tom Waterton from colleagues past and present."
    title="Testimonials – Tom Waterton"
  />
);
