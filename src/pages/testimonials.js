import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import QuoteLeft from "../images/testimonials/quotation-mark-left.svg";
import QuoteRight from "../images/testimonials/quotation-mark-right.svg";

function TestimonialsPage() {
    return (
      <Layout fullWidth={true}>
        <SEO
          keywords={[`content`, `design`, `strategy`, `ux`, `testimonials`, `references`, `tom`, `waterton`]}
          title="Testimonials"
        />

  <ContentWidth>
    <section className="row">
      <div className="column">
        <h1>Testimonials</h1>
      </div>
    </section>

    <section className="row">
      <div className="column">
        <p className="testimonial">&ldquo;It was my utmost honor to work with and learn from Tom during my time at IBM. 
        I was constantly in awe of how much Tom accomplished as he worked diligently to establish standards, practices, 
        and culture of IBM's content design program.</p>
        <p className="testimonial">A true catalyst, Tom had a knack for bringing people along with him, sparking 
        participation, being inclusive of perspectives and voices, and championing progress bit by bit.</p>
        <p className="testimonial">And on top of all that, I can say that Tom is an impressively thoughtful content 
        designer who works from a great wellspring of knowledge and experience about his craft. He was always generous 
        with his time when I'd seek advice or collaboration. I'd work with Tom again — and follow his lead — in a heartbeat.&rdquo;</p>
        <p className="attribution-name">— Jeremy Burton</p>
        <p className="attribution-role">Former Senior UX and Content Designer at IBM<br/>Now Senior Content and UX Designer at Mural</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation mark image" src={QuoteRight} />
      </div>
    </section>

    <section className="row">
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto hide-small" alt="Quotation mark image" src={QuoteLeft} />
      </div>
      <div className="column">
        <p className="testimonial">&ldquo;Tom is truly outstanding. A man of deep integrity 
        and sound judgement, who always maintains a positive attitude. He's one of the best enablers I know. 
        He gathers the right people for a project, encourages them to say and do what they believe to be 
        best for the project, and works harder than anyone else on the project to clear obstacles, keep focus, 
        create momentum and document outcomes.&rdquo;</p>
        <p className="attribution-name">— Barry Gunner</p>
        <p className="attribution-role">IBM Software Engineer</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto show-small" alt="Quotation mark image" src={QuoteLeft} />
      </div>
    </section>

    <section className="row">
      <div className="column">
      <p className="testimonial">&ldquo;Tom is a pleasure to work with. He designs experiences 
        with words, the right ones, the proper ones, the just enough ones. The result is a better engagement 
        and dialogue with the reader or user of the tool, article or product he’s involved in.</p>
        <p className="testimonial">I’ve had the pleasure to collaborate with Tom across multiple projects and 
        I always leave with a deeper understanding on how to better communicate within a team and with users.&rdquo;</p>
        <p className="attribution-name">— Esteban Pérez-Hemminger</p>
        <p className="attribution-role">Former Design Lead at IBM<br/>Now UX Design Lead at Google</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation mark image" src={QuoteRight} />
      </div>
    </section>

    <section className="row">
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto hide-small" alt="Quotation mark image" src={QuoteLeft} />
      </div>
      <div className="column">
        <p className="testimonial">&ldquo;It has been a pleasure working with you. Thank you for the time 
        and talent you have dedicated to helping me learn more about content design, contributing to the 
        visibility of and opportunities for content professionals at IBM, and (most importantly) improving 
        our clients' experience with our content. I appreciate your positivity, collaboration style, 
        and ability to cut through the noise!&rdquo;</p>
        <p className="attribution-name">— Janene Franke</p>
        <p className="attribution-role">Program Manager, IBM Technical Content Transformation</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto show-small" alt="Quotation mark image" src={QuoteLeft} />
      </div>
    </section>

    <section className="row">
      <div className="column">
      <p className="testimonial">&ldquo;Thank you Tom for always pushing the boundaries of what we're doing 
      from a content, strategy, and offering perspective.&rdquo;</p>
        <p className="attribution-name">— Madison Heck</p>
        <p className="attribution-role">Former Product Manager at IBM<br/>Now Senior Product Manager at CollegeVine</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation mark image" src={QuoteRight} />
      </div>
    </section>
  </ContentWidth>

  </Layout>
  );
}

export default TestimonialsPage;