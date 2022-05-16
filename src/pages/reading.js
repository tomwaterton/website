import React from "react";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";
import Tom_on_books_photo from "../images/reading/Tom_on_books.jpg";
import Content_books from "../images/reading/content_books_2.png";

function ReadingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`reading`, `books`, `learning`, `tom`, `waterton`]}
        title="Reading"
      />

<ContentWidth>
  <section className="row">
    <div className="column">
      <h1>Reading</h1>
      <p className="description">I'm an incurable bookworm so I always have at least one book on the go. 
      Here are some highlights from the last few years.</p>
        <ul className="ul-small py-4 do-not-print">
          <li><a href="#content">Content / writing books</a></li>
          <li><a href="#non-fiction">Other non-fiction</a></li>
          <li><a href="#fiction">Fiction</a></li>
        </ul>
        <p className="description">For each book I've provided a link to further information 
        and written a one-sentence description.</p>
    </div>
    <div className="column">
      <img
        alt="Photo of me reading, lying on a mass of books"
        className="block tilt-landscape-left do-not-print"
        src={Tom_on_books_photo}
      />
    </div>
  </section>


  <section className="row">
    <div className="column books">
      <h2><a id="content"></a>Content / writing books</h2>
        <ul>
          {/* <li>
              <a href="https://learning.oreilly.com/library/view/the-content-strategy/9780134105116/">The Content Strategy Toolkit</a> (2015)
              <span className="black-text"> by Meghan Casey</span>
              <p>???</p>
          </li> */}
          <li>
              <a href="https://abbycovert.com/make-sense/">How to Make Sense of Any Mess</a> (2014)
              <span className="black-text"> by Abby Covert</span>
              <p>A nice introduction to some of the main approaches we can use when organizing information.</p>
          </li>
          <li>
              <a href="https://www.contentstrategy.com/content-strategy-for-the-web">Content Strategy for the Web</a> (2012)
              <span className="black-text"> by Kristina Halvorson</span>
              <p>Content strategy, governance, steakholder management, data-driven decision making, and much more besides.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/On_Writing:_A_Memoir_of_the_Craft">On Writing: A Memoir of the Craft</a> (2000; revised 2020)
              <span className="black-text"> by Stephen King</span>
              <p>Part memoir, part writing masterclass, and an all round entertaining read (as you'd expect).</p>
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
              <p>One of the definitive books on writing style that's still useful 100 years on.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Eats,_Shoots_%26_Leaves">Eats, Shoots & Leaves</a> (2003)
              <span className="black-text"> by Lynne Truss</span>
              <p>A fun book about the importance of punctuation in everyday writing.</p>
          </li>
          {/* 
          <li>
              <a href="">???</a>
              <span className="black-text"> by ???</span>
              <p>???</p>
          </li> 
          */}
          {/* 
          To add when read: 
          - Writing for Designers (2018) by Scott Kubie
            https://abookapart.com/products/writing-for-designers 
          - Cultivating Content Design (2021) by Beth Dunn
            https://abookapart.com/products/cultivating-content-design 
          - Leading Content Design by Rachel McConnell
	          https://abookapart.com/products/leading-content-design 
          - Content Strategy for Mobile by Karen McGrane
	          https://abookapart.com/products/content-strategy-for-mobile 
          - Conversational Design by Erika Hall
	          https://abookapart.com/products/conversational-design 
          */}
        </ul>
    </div>
  </section>


  <section className="row">
    <div className="column text-center">
      <img
        alt="Photo of some books on writing and content design"
        className="block landscape do-not-print"
        src={Content_books}
      />
      <p className="italic pt-3 px-10">I'm a sucker for any book about or related to writing and content design.</p>
    </div>
  </section>


  <section className="row">
    <div className="column books">
      <h2><a id="non-fiction"></a>Other non-fiction</h2>
        <ul>
          <li>
              <a href="https://arbinger.com/Landing/LeadershipAndSelfDeception.html">Leadership and Self-Deception</a> (2000)
              <span className="black-text"> by The Arbinger Institute</span>
              <p>I’m fascinated by the extent to which we tend to deceive ourselves, so was naturally drawn to this intriguing volume.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Rising-Strong-Bren%C3%A9-Brown/dp/0091955033">Rising Strong</a> (2015)
              <span className="black-text"> by Brené Brown</span>
              <p>A book about being brave, trying, often failing, then rising again, dusting ourselves off, and owning our stories.</p>
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
              <p>Applying economic theories to some of life's many riddles, such as why do drug dealers still live at home with their moms?</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things">The Design of Everyday Things</a> (1988)
              <span className="black-text"> by Don Norman</span>
              <p>This book was way ahead of its time when it was published in 1988 and is still worth a read today.</p>
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
              <a href="https://margaretwheatley.com/books-products/books/leadership-new-science/">Leadership and the New Science</a> (2006)
              <span className="black-text"> by Margaret Wheatley</span>
              <p>A book that challenges commonly-held perspectives on leadership, management, and how organizations best flourish.</p>
          </li>
        </ul>
    </div>
  </section>


  <section className="row">
    <div className="column">
      <h2><a id="fiction"></a>Fiction</h2>
      <p className="description">There are so many novels that I love, but to prevent you scrolling for ever I've limited myself to 20 novels here.</p>
      <div className="books">
        <ul>
          <li>
              <a href="https://en.wikipedia.org/wiki/My_Family_and_Other_Animals">My Family and Other Animals</a> (1956)
              <span className="black-text"> by Gerald Durrell</span>
              <p>The adventures of the young naturalist as he and his eccentric family moved from England to Corfu in the 1930s.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby">The Great Gatsby</a> (1925)
              <span className="black-text"> by F. Scott Fitzgerald</span>
              <p>A portrait of the Roaring Twenties, where unbounded riches, decadence, and idealism are forced, ultimately, to sober up.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Tender_Is_the_Night">Tender is the Night</a> (1934)
              <span className="black-text"> by F. Scott Fitzgerald</span>
              <p>The Great Gatsby is Fitzgerald’s most famous work, but Tender is, I think, perhaps an even greater achievement.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Howards_End">Howards End</a> (1910)
              <span className="black-text"> by E. M. Forster</span>
              <p>A brilliant novel exploring our desire to know and to be known — or as the epitaph puts it, to “Only connect”.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Magus_(novel)">The Magus</a> (1965; revised 1977)
              <span className="black-text"> by John Fowles</span>
              <p>On a Greek island, a young man meets a wealthy and mysterious recluse and becomes embroiled in psychological games.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Sophie%27s_World">Sophie’s World</a> (1991)
              <span className="black-text"> by Jostein Gaarder</span>
              <p>A book that manages to be both a comprehensive introduction to Western philosophy and a gripping story.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Heart_of_the_Matter">The Heart of the Matter</a> (1948)
              <span className="black-text"> by Graham Greene</span>
              <p>The tale of Major Scobie in a West African collony during WW2 and a study on failure and the great price of pity.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Go-Between">The Go-Between</a> (1953)
              <span className="black-text"> by L. P. Hartley</span>
              <p>A very British coming-of-age novel, set at the end of the Victorian era, told through the eyes of a naïve schoolboy. </p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Remains_of_the_Day">The Remains of the Day</a> (1989)
              <span className="black-text"> by Kazuo Ishiguro</span>
              <p>Another fine novel about the past told by an unreliable narrator — this time the butler of an English stately home.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Atonement_(novel)">Atonement</a> (2001)
              <span className="black-text"> by Ian McEwan</span>
              <p>Of all McEwan’s many fine novels, this is my firm favorite.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Good_Soldier">The Good Soldier</a> (1915)
              <span className="black-text"> by Ford Madox Ford</span>
              <p>Another peculiarly English novel featuring an unreliable narrator and a treat of pioneering literary impressionism.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Wolf_Hall">Wolf Hall</a> (2009)
              <span className="black-text"> by Hilary Mantel</span>
              <p>If you’re into historical fiction, you’ll love this — and if you’re not into historical fiction you will also love this!</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Lolita">Lolita</a> (1955)
              <span className="black-text"> by Vladimir Nabokov</span>
              <p>Worth reading for the dazzling brilliance of the writing; one of the worlds greatest stylist at the height of his powers.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye">The Catcher in the Rye</a> (1951)
              <span className="black-text"> by J. D. Salinger</span>
              <p>A critique on all that's "phony" in society, told by 17-year-old Holden Caulfield; once read, never forgotten.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/East_of_Eden_(novel)">East of Eden</a> (1952)
              <span className="black-text"> by John Steinbeck</span>
              <p>An epic tale of two families living in the Salinas Valley in California at the beginning of the twentieth century.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Secret_History">The Secret History</a> (1992)
              <span className="black-text"> by Donna Tartt</span>
              <p>What becomes of six unusual and secretive classics students at a small, elite Vermont college.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Anna_Karenina">Anna Karenina</a> (1878)
              <span className="black-text"> by Leo Tolstoy</span>
              <p>A complex, sprawling novel, with many memorable characters; often hailed as the greatest work of world literature.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Brideshead_Revisited">Brideshead Revisited</a> (1945)
              <span className="black-text"> by Evelyn Waugh</span>
              <p>This novel has it all: youth, love, loss, faith, family, and a teddy bear named Aloysius.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Code_of_the_Woosters">The Code of the Woosters</a> (1938)
              <span className="black-text"> by P. G. Wodehouse</span>
              <p>A peculiarly British form of comedy, but I could happily read a Jeeves and Wooster novel any day of the year.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/To_the_Lighthouse">To the Lighthouse</a> (1927)
              <span className="black-text"> by Virginia Woolf</span>
              <p>Despite little dialogue and almost no action, this remains a fascinating, beautiful novel.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  </ContentWidth>
    </Layout>
  );
}

export default ReadingPage;
