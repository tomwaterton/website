import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bookshelves_photo from "../images/reading/bookshelves.jpg";

function ReadingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Reading"
      />

  <section className="row">
    <div className="column">
      <h1>Reading</h1>
      <p className="description">I'm an incurable bookworm so I always have a book or two on the go. 
      Here are some highlights from the last few years.</p>
        <ul className="ul-small-2 do-not-print">
          <li><a href="#non-fiction">Non-fiction</a></li>
          <li><a href="#fiction">Fiction</a></li>
        </ul>
        <p className="description">For each book I've provided a link to further information 
        and written my own one-sentence description.</p>
    </div>
    <div className="column">
      <img
        alt="Bookselves photo"
        className="block tilt-landscape-left do-not-print"
        src={bookshelves_photo}
      />
    </div>
  </section>


  <section className="row">
    <div className="column books">
      <h2><a id="non-fiction"></a>Non-fiction</h2>
        <ul>
          <li>
              <a href="https://arbinger.com/Landing/LeadershipAndSelfDeception.html" target="_blank">Leadership and Self-Deception</a> by The Arbinger Institute
              <p>I’m fascinated by the extent to which we tend to deceive ourselves, so was naturally drawn to this intriguing volume.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Rising-Strong-Bren%C3%A9-Brown/dp/0091955033" target="_blank">Rising Strong</a> by Brené Brown
              <p>A book about being brave, trying, often failing, then rising again, dusting ourselves off, and owning our stories.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Quiet:_The_Power_of_Introverts_in_a_World_That_Can%27t_Stop_Talking" target="_blank">Quiet</a> by Susan Cain
              <p>A fresh and intelligent look at the introvert/extrovert aspect of our personalities and the power of being, well, quiet.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Creativity,_Inc." target="_blank">Creativity, Inc</a> by Ed Catmull
              <p>Packed with insights about creating and maintaining a creative organization, written by a former president of Pixar.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People" target="_blank">The 7 Habits of Highly Successful People</a> by Stephen R. Covey
              <p>If you’ve never read this seminal book, do yourself a huge favour and go beg, borrow, or steal a copy today.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Tipping_Point" target="_blank">The Tipping Point</a> by Malcolm Gladwell
              <p>A very readable exploration into how some seemingly small things can lead to major change.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/David_and_Goliath_(book)" target="_blank">David and Goliath</a> by Malcolm Gladwell
              <p>A book about underdogs and the many areas of life in which reality is often counter-intuitive.</p>
          </li>
          <li>
              <a href="https://www.contentstrategy.com/content-strategy-for-the-web" target="_blank">Content Strategy for the Web</a> by Kristina Halvorson
              <p>Content strategy, governance, steakholder management, data-driven decision making, and much more besides.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Dialogue-Art-Thinking-Together-Communicating/dp/0385479999" target="_blank">Dialogue and the Art of Thinking Together</a> by William Isaacs
              <p>A thorough and fascinating study into how groups of people can learn to better collaborate together.</p>
          </li>
          <li>
              <a href="https://itrevolution.com/book/the-phoenix-project/" target="_blank">The Phoenix Project</a> by G. Kim, K. Behr, and G. Spafford
              <p>A good portrayal of life inside a siloed IT department and what DevOps really has to offer.</p>
          </li>
          <li>
              <a href="http://freakonomics.com/books/" target="_blank">Freakonomics</a> and <a href="http://freakonomics.com/books/" target="_blank">SuperFreakonomics</a> by Steven D. Levitt and Stephen J. Dubner
              <p>Applying economic theories to some of life's many riddles, such as why do drug dealers still live at home with their moms?</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things" target="_blank">The Design of Everyday Things</a> by Don Norman
              <p>This book was way ahead of its time when it was published in 1988 and is still worth a read today.</p>
          </li>
          <li>
              <a href="https://contentdesign.london/book/" target="_blank">Content Design</a> by Sarah Richards
              <p>I work as a Content Designer, so it’s perhaps no surprise that I’m a big fan of this little book.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Lean_Startup" target="_blank">The Lean Startup</a> by Eric Ries
              <p>I read this a couple of years ago and it has definitely had a huge impact on how I now approach any new venture.</p>
          </li>
          <li>
              <a href="https://margaretwheatley.com/books-products/books/leadership-new-science/" target="_blank">Leadership and the New Science</a> by Margaret Wheatley
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
              <a href="https://en.wikipedia.org/wiki/My_Family_and_Other_Animals" target="_blank">My Family and Other Animals</a> by Gerald Durrell
              <p>The adventures of the young naturalist as he and his eccentric family moved from England to Corfu in the 1930s.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby" target="_blank">The Great Gatsby</a> by F. Scott Fitzgerald
              <p>A portrait of the Roaring Twenties, where unbounded riches, decadence, and idealism are forced, ultimately, to sober up.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Tender_Is_the_Night" target="_blank">Tender is the Night</a> by F. Scott Fitzgerald
              <p>The Great Gatsby is Fitzgerald’s most famous work, but Tender is, I think, perhaps an even greater achievement.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Howards_End" target="_blank">Howards End</a> by E. M. Forster
              <p>A brilliant novel exploring our desire to know and to be known — or as the epitaph puts it, to “Only connect”.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Magus_(novel)" target="_blank">The Magus</a> by John Fowles
              <p>On a Greek island, a young man meets a wealthy and mysterious recluse and becomes embroiled in psychological games.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Sophie%27s_World" target="_blank">Sophie’s World</a> by Jostein Gaarder
              <p>A book that manages to be both a comprehensive introduction to Western philosophy and a gripping story.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Heart_of_the_Matter" target="_blank">The Heart of the Matter</a> by Graham Greene
              <p>The tale of Major Scobie in a West African collony during WW2 and a study on failure and the great price of pity.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Go-Between" target="_blank">The Go-Between</a> by L. P. Hartley
              <p>A very British coming-of-age novel, set at the end of the Victorian era, told through the eyes of a naïve schoolboy. </p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Remains_of_the_Day" target="_blank">The Remains of the Day</a> by Kazuo Ishiguro
              <p>Another fine novel about the past told by an unreliable narrator — this time the butler of an English stately home.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Atonement_(novel)" target="_blank">Atonement</a> by Ian McEwan
              <p>Of all McEwan’s many fine novels, this is my firm favorite.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Good_Soldier" target="_blank">The Good Soldier</a> by Ford Madox Ford
              <p>Another peculiarly English novel featuring an unreliable narrator and a treat of pioneering literary impressionism.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Wolf_Hall" target="_blank">Wolf Hall</a> by Hilary Mantel
              <p>If you’re into historical fiction, you’ll love this — and if you’re not into historical fiction you will also love this!</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Lolita" target="_blank">Lolita</a> by Vladimir Nabokov
              <p>Worth reading for the dazzling brilliance of the writing; one of the worlds greatest stylist at the height of his powers.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye" target="_blank">The Catcher in the Rye</a> by J. D. Salinger
              <p>A critique on all that's "phony" in society, told by 17-year-old Holden Caulfield; Once read, never forgotten.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/East_of_Eden_(novel)" target="_blank">East of Eden</a> by John Steinbeck
              <p>An epic tale of two families living in the Salinas Valley in California at the beginning of the twentieth century.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Secret_History" target="_blank">The Secret History</a> by Donna Tartt
              <p>What becomes of six unusual and secretive classics students at a small, elite Vermont college.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Anna_Karenina" target="_blank">Anna Karenina</a> by Leo Tolstoy
              <p>A complex, sprawling novel, with many memorable characters; often hailed as the greatest work of world literature.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Brideshead_Revisited" target="_blank">Brideshead Revisited</a> by Evelyn Waugh
              <p>This novel has it all: youth, love, loss, faith, family, and a teddy bear named Aloysius.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Code_of_the_Woosters" target="_blank">The Code of the Woosters</a> by P. G. Wodehouse
              <p>A peculiarly British form of comedy, but I could happily read a Jeeves and Wooster novel any day of the year.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/To_the_Lighthouse" target="_blank">To the Lighthouse</a> by Virginia Woolf
              <p>Despite little dialogue and almost no action, this remains a fascinating, beautiful novel.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

    </Layout>
  );
}

export default ReadingPage;
