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
          keywords={[`content`, `design`, `strategy`, `copy`, `writing`, `editing`, `ux`, `testimonials`, `references`, `tom`, `waterton`]}
          title="Experience and skills"
        />
  
  <ContentWidth>
    <section className="row">
      <div className="column">
        <h1>Testimonials</h1>
      </div>
    </section>

    <section className="row">
      <div className="column">
        <p className="italic font-mono sm:text-sm xs:text-sm">&ldquo;I am deeply grateful for all the work you've done to establish a foundation 
        for content design at IBM that the rest of us now get to build on. I feel really lucky to be part 
        of a community with you in it.&rdquo;</p>
        <p className="text-pink-500">— Jeremy Burton, IBM Senior UX Designer</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation Mark" src={QuoteRight} />
      </div>
    </section>

    <section className="row">
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto hide-small" alt="Quotation Mark" src={QuoteLeft} />
      </div>
      <div className="column">
        <p className="italic font-mono sm:text-sm xs:text-sm">&ldquo;Tom is truly outstanding. A man of deep integrity 
        and sound judgement, who always maintains a positive attitude. He's one of the best enablers I know. 
        He gathers the right people for a project, encourages them to say and do what they believe to be 
        best for the project, and works harder than anyone else on the project to clear obstacles, keep focus, 
        create momentum and document outcomes.&rdquo;</p>
        <p className="text-pink-500">— Barry Gunner, IBM Software Engineer</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto show-small" alt="Quotation Mark" src={QuoteLeft} />
      </div>
    </section>

    <section className="row">
      <div className="column">
        <p className="italic font-mono sm:text-sm xs:text-sm">&ldquo;Tom is a pleasure to work with. He designs experiences 
        with words, the right ones, the proper ones, the just enough ones. The result is a better engagement 
        and dialogue with the reader or user of the tool, article or product he’s involved in.<br/><br/>
        I’ve had the pleasure to collaborate with Tom across 
        multiple projects and I always leave with a deeper understanding on how to better communicate within 
        a team and with users.&rdquo;</p>
        <p className="text-pink-500">— Esteban Pérez-Hemminger, Senior UX Designer</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation Mark" src={QuoteRight} />
      </div>
    </section>

    <section className="row">
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto hide-small" alt="Quotation Mark" src={QuoteLeft} />
      </div>
      <div className="column">
        <p className="italic font-mono sm:text-sm xs:text-sm">&ldquo;It has been a pleasure working with you. 
        Thank you for the time and talent you have dedicated to helping me learn more about content design, 
        contributing to the visibility of and opportunities for content professionals at IBM, and (most importantly) 
        improving our clients' experience with our content. I appreciate your positivity, collaboration style, 
        and ability to cut through the noise!&rdquo;</p>
        <p className="text-pink-500">— Janene Franke, Program Manager, IBM Technical Content Transformation</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto show-small" alt="Quotation Mark" src={QuoteLeft} />
      </div>
    </section>

    <section className="row">
      <div className="column">
        <p className="italic font-mono sm:text-sm xs:text-sm">&ldquo;Thank you Tom for always pushing the 
        boundaries of what we're doing from a content, strategy, and offering perspective.&rdquo;</p>
        <p className="text-pink-500">— Madison Heck, IBM Offering Manager</p>
      </div>
      <div className="column-no-padding m-auto">
        <img className="quote-mark m-auto" alt="Quotation Mark" src={QuoteRight} />
      </div>
    </section>
  </ContentWidth>

  </Layout>
  );
}

export default TestimonialsPage;