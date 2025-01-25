import React from "react";
import { SEO } from "../components/seo";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import Tom_on_books_photo from "../images/reading/Tom_on_books.jpg";
import Content_books from "../images/reading/content_books.jpeg";
import Growth_books from "../images/reading/growth_books.jpeg";

const ReadingNonFictionPage = () => {
  return (
    <Layout>

<ContentWidth>
  <section className="row">
    <div className="column books">
      <h1>Recommended books</h1>
      <p><em>Some of the work-related non-fiction that I've read over the last few years. For each book 
        I’ve provided a link to further information and written a one-sentence description.</em></p>
        <ul className="ul-small do-not-print">
          <li><a href="#content">Content design / writing books</a></li>
          <li><a href="#non-fiction">Design / growth / leadership books</a></li>
        </ul>
        <p><em>If you also enjoy reading fiction, do check out <Link to="/reading">this page</Link>.</em></p>
    </div>
    <div className="column">
      <img
        alt="Photo of me reading, lying on a mass of books"
        className="block tilt-landscape-left tom-on-books do-not-print"
        src={Tom_on_books_photo}
      />
    </div>
  </section>

  <section className="row">
    <div className="column books">
      <div id="content" className="anchorLinkSpacer"></div>
      <h2 id="content">Content design / writing books</h2>
        <ul>
          <li>
              <a href="https://abbycovert.com/make-sense/">How to Make Sense of Any Mess</a> (2014)
              <span className="black-text"> by Abby Covert</span>
              <p>A nice introduction to some of the main approaches we can use when organizing information.</p>
          </li>
          <li>
              <a href="https://abookapart.com/products/cultivating-content-design">Cultivating Content Design</a> (2021)
              <span className="black-text"> by Beth Dunn</span>
              <p>Some good advice on how to create a strong and respected content design practice.</p>
          </li>
          <li>
              <a href="https://www.contentstrategy.com/content-strategy-for-the-web">Content Strategy for the Web</a> (2012)
              <span className="black-text"> by Kristina Halvorson</span>
              <p>Content strategy, governance, steakholder management, data-driven decision making, and much more besides.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/On_Writing:_A_Memoir_of_the_Craft">On Writing: A Memoir of the Craft</a> (2000; revised 2020)
              <span className="black-text"> by Stephen King</span>
              <p>Part memoir, part writing masterclass, and an all round entertaining read (as you’d expect).</p>
          </li>
          <li>
              <a href="https://www.penguinrandomhouse.com/books/93789/several-short-sentences-about-writing-by-verlyn-klinkenborg/">Several short sentences about writing</a> (2012)
              <span className="black-text"> by Verlyn Klinkenborg</span>
              <p>A call-to-action to focus more consciously on the words, sounds, and rhythms that make up our sentences.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Why-need-content-team-build/dp/1720128448/">Why you need a content team and how to build one</a> (2018)
              <span className="black-text"> by Rachel McConnell</span>
              <p>Lots of good advice about assessing and developing content maturity, skills, and teams.</p>
          </li>
          <li>
              <a href="https://rosenfeldmedia.com/books/writing-is-designing/">Writing is Designing</a> (2020)
              <span className="black-text"> by Michael Metts and Andy Welfle</span>
              <p>A really helpful book (with an apt title) covering most of the core areas of writing for digital products.</p>
          </li>
          <li>
              <a href="https://learning.oreilly.com/library/view/strategic-writing-for/9781492049388/">Strategic Writing for UX</a> (2019)
              <span className="black-text"> by Torrey Podmajersky</span>
              <p>A really practical book on creating frameworks and patterns for creating effective content.</p>
          </li>
          <li>
              <a href="https://contentdesign.london/store/the-content-design-book/">Content Design</a> (2017)
              <span className="black-text"> by Sarah Richards</span>
              <p>I work as a Content Designer, so it’s perhaps no surprise that I’m a big fan of this little book.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Elements_of_Style">The Elements of Style</a> (1918; revised 2018)
              <span className="black-text"> by William Strunk Jr.</span>
              <p>One of the definitive books on writing style that’s still useful 100 years on.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Eats,_Shoots_%26_Leaves">Eats, Shoots & Leaves</a> (2003)
              <span className="black-text"> by Lynne Truss</span>
              <p>A fun book about the importance of punctuation in everyday writing.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Information-Anxiety-2-Hayden-Que/dp/0789724103">Information Anxiety 2</a> (2001)
              <span className="black-text"> by Richard Saul Wurman</span>
              <p>Quite an old book now, but it contains some useful prompts and approaches to organising information.</p>
          </li>
          {/* 
          <li>
              <a href="">???</a> (????)
              <span className="black-text"> by ???</span>
              <p>???</p>
          </li>
          */}
        </ul>
      </div>
    </section>

  <section>
      <div className="booksToRead">
        <h3>And on my "to-read" pile...</h3>
        <ul>
          <li><em>The Content Strategy Toolkit</em> (2015) by Meghan Casey</li>
          <li><em>Conversational Design</em> (2018) by Erika Hall</li>
          <li><em>Writing for Designers</em> (2018) by Scott Kubie</li>
          <li><em>Leading Content Design</em> (2022) by Rachel McConnell</li>
        </ul>
      </div>
  </section>

  <section>
    <div className="column">
      <img
        alt="Photo of some of the content design / writing books I've enjoyed reading recently"
        className="block panel-images do-not-print"
        src={Content_books}
      />
    </div>
    <div className="backToTop">
      <a href="#">&uarr; Back to top</a>
    </div>
  </section>


  <section className="row">
    <div className="column books">
    <div id="non-fiction" className="anchorLinkSpacer"></div>
      <h2>Design / growth / leadership books</h2>
        <ul>
          <li>
              <a href="https://arbinger.com/Landing/LeadershipAndSelfDeception.html">Leadership and Self-Deception</a> (2000)
              <span className="black-text"> by The Arbinger Institute</span>
              <p>I’m fascinated by the extent to which we tend to deceive ourselves, so was naturally drawn to this intriguing volume.</p>
          </li>
          <li>
          <a href="https://www.amazon.co.uk/Daring-Greatly-Courage-Vulnerable-Transforms/dp/1592408419">Daring Greatly</a> (2012), <a href="https://www.amazon.co.uk/Rising-Strong-Bren%C3%A9-Brown/dp/0091955033">Rising Strong</a> (2015), and <a href="https://www.amazon.co.uk/Dare-Lead-Brave-Conversations-Hearts-ebook/dp/B07CZ4H1BQ/">Dare to Lead</a> (2018)
              <span className="black-text"> by Brené Brown</span>
              <p>Books about being brave, trying, failing, rising again, dusting ourselves off, owning our stories — and helping others do the same.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Quiet:_The_Power_of_Introverts_in_a_World_That_Can%27t_Stop_Talking">Quiet</a>
              <span className="black-text"> by Susan Cain</span> (2012)
              <p>A fresh and intelligent look at the introvert/extrovert aspect of our personalities and the power of being, well, quiet.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Creativity,_Inc.">Creativity, Inc</a> (2014)
              <span className="black-text"> by Ed Catmull</span>
              <p>Packed with insights about creating and maintaining a creative organization, written by a former president of Pixar.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People">The 7 Habits of Highly Successful People</a> (1989)
              <span className="black-text"> by Stephen R. Covey</span>
              <p>If you’ve never read this seminal book, do yourself a huge favour and go beg, borrow, or steal a copy today.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Tipping_Point">The Tipping Point</a> (2000)
              <span className="black-text"> by Malcolm Gladwell</span>
              <p>A very readable exploration into how some seemingly small things can lead to major change.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/David_and_Goliath_(book)">David and Goliath</a> (2013)
              <span className="black-text"> by Malcolm Gladwell</span>
              <p>A book about underdogs and the many areas of life in which reality is often counter-intuitive.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Dialogue-Art-Thinking-Together-Communicating/dp/0385479999">Dialogue and the Art of Thinking Together</a> (1999)
              <span className="black-text"> by William Isaacs</span>
              <p>A thorough and fascinating study into how groups of people can learn to better collaborate together.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow">Thinking, Fast and Slow</a> (2011)
              <span className="black-text"> by Daniel Kahneman</span>
              <p>An exploration into the different modes of thinking ("fast" and "slow") and the cognitive biases associated with each.</p>
          </li>
          <li>
              <a href="https://itrevolution.com/book/the-phoenix-project/">The Phoenix Project</a> (2013)
              <span className="black-text"> by G. Kim, K. Behr, and G. Spafford</span>
              <p>A good portrayal of life inside a siloed IT department and what DevOps really has to offer.</p>
          </li>
          <li>
              <a href="https://www.thesprintbook.com/">Sprint</a> (2016)
              <span className="black-text"> by Jake Knapp</span>
              <p>How to approach opportunities and challenges by ideating, prototyping, testing, and getting feedback — all within 5 days.</p>
          </li>
          <li>
              <a href="http://freakonomics.com/books/">Freakonomics</a> (2005) and <a href="http://freakonomics.com/books/">SuperFreakonomics</a> (2009)
              <span className="black-text"> by Steven D. Levitt and Stephen J. Dubner</span>
              <p>Applying economic theories to some of life’s many riddles, such as why do drug dealers still live at home with their moms?</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things">The Design of Everyday Things</a> (1988)
              <span className="black-text"> by Don Norman</span>
              <p>This book was way ahead of its time when it was published in 1988 and is still worth a read today.</p>
          </li>
          <li>
              <a href="https://www.dummies.com/book/body-mind-spirit/emotional-health-psychology/psychology/neurolinguistic-programming/neuro-linguistic-programming-for-dummies-3rd-edition-281592/">Neuro-linguistic Programming For Dummies</a> (2015)
              <span className="black-text"> by Romilla Ready and Kate Burton</span>
              <p>A good introduction to the core concepts and practices of neuro-linguistic programming. </p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Factfulness:_Ten_Reasons_We're_Wrong_About_the_World_%E2%80%93_and_Why_Things_Are_Better_Than_You_Think">Factfulness</a> (2018)
              <span className="black-text"> by Hans Rosling, Ola Rosling, and Anna Rosling Rönnlund</span>
              <p>A fact-based, enlightening, and hope-filled book about what the world is really like.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Lean_Startup">The Lean Startup</a> (2011)
              <span className="black-text"> by Eric Ries</span>
              <p>I read this a couple of years ago and it has definitely had a huge impact on how I now approach any new venture.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Start_with_Why">Start with Why</a> (2009)
              <span className="black-text"> by Simon Sinek</span>
              <p>How being really clear about your "why" helps you to better communicate with and inspire others.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Eat-That-Frog-Important-Things/dp/1444765426">Eat that Frog!</a> (2001)
              <span className="black-text"> by Brian Tracy</span>
              <p>A number of appraoches to help you stop procrastinating, prioritise what's important, and ultimately get more done.</p>
          </li>
          <li>
              <a href="https://margaretwheatley.com/books-products/books/leadership-new-science/">Leadership and the New Science</a> (2006)
              <span className="black-text"> by Margaret Wheatley</span>
              <p>A book that challenges commonly-held perspectives on leadership, management, and how organizations best flourish.</p>
          </li>
          <li>
              <a href="https://www.performanceconsultants.com/coaching-for-performance-book">Coaching for Performance</a> (2017)
              <span className="black-text"> by Sir John Whitmore</span>
              <p>A great introduction to coaching, the GROW model, and how to help raise awareness and responsibility.</p>
          </li>
        </ul>
    </div>
  </section>

  <section>
      <div className="booksToRead">
      <h3>And on my "to-read" pile...</h3>
        <ul>
          <li><em>Getting Things Done</em> (2001) by David Allen</li>
          <li><em>Made to Stick</em> (2007) by Chip and Dan Heath</li>
          <li><em>The Laws of Simplicity</em> (2006) by John Maeda</li>
          <li><em>Thinking in Systems</em> (2008) by Donella Meadows</li>
        </ul>
      </div>
  </section>

  <section>
    <div className="column">
      <img
        alt="Photo of some of the design / growth / leadership books I've enjoyed reading recently"
        className="block panel-images do-not-print"
        src={Growth_books}
      />
    </div>
    <div className="backToTop">
      <a href="#">&uarr; Back to top</a>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  )
}

export default ReadingNonFictionPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Recommended books" 
    description="Some of the work-related content and design and leadership books I've benefitted from reading (tomwaterton.com)"
    />
)
