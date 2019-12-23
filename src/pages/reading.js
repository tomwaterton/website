import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bookshelves_photo from "../images/books/bookshelves.jpg";

function ReadingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Reading"
      />

  <section class="row">
    <div class="column">
      <h1>Reading</h1>
      <p class="description">I'm an incurable bookworm so I always have a book on the go. 
      Here are some highlights from the last few years:</p>
        <ul class="ul-small">
          <li><a href="#non-fiction">Non-fiction</a></li>
          <li><a href="#fiction">Fiction</a></li>
        </ul>
    </div>
    <div class="column">
      <img
        alt="Bookselves photo"
        className="block tilt"
        src={bookshelves_photo}
      />
    </div>
  </section>


  <section class="row">
    <div class="column books">
      <h2><a id="non-fiction"></a>Non-fiction</h2>
        <ul>
          <li>
              <a href="https://arbinger.com/Landing/LeadershipAndSelfDeception.html" target="_blank">Leadership and Self-Deception</a> by The Arbinger Institute
              <p>I’m fascinated by the extent to which we tend to deceive ourselves, so was naturally drawn to this intriguing volume.</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Rising-Strong-Bren%C3%A9-Brown/dp/0091955033" target="_blank">Rising Strong</a> by Brené Brown
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Quiet:_The_Power_of_Introverts_in_a_World_That_Can%27t_Stop_Talking" target="_blank">Quiet</a> by Susan Cain
              <p>A fresh and intelligent look at the introvert/extrovert aspect of our personalities and the power of being, well, quiet.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Creativity,_Inc." target="_blank">Creativity, Inc</a> by Ed Catmull
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People" target="_blank">The 7 Habits of Highly Successful People</a> by Stephen R. Covey
              <p>If you’ve never read this seminal book, do yourself a huge favor and go beg, borrow, or steal a copy today.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Tipping_Point" target="_blank">The Tipping Point</a> by Malcolm Gladwell
              <p>A very readable exploration into how some seemingly small things can lead to major change.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/David_and_Goliath_(book)" target="_blank">David and Goliath</a> by Malcolm Gladwell
              <p>...</p>
          </li>
          <li>
              <a href="https://www.contentstrategy.com/content-strategy-for-the-web" target="_blank">Content Strategy for the Web</a> by Kristina Halvorson
              <p>...</p>
          </li>
          <li>
              <a href="https://www.amazon.co.uk/Dialogue-Art-Thinking-Together-Communicating/dp/0385479999" target="_blank">Dialogue and the Art of Thinking Together</a> by William Isaacs
              <p>A fascinating study into how people can learn to better collaborate together.</p>
          </li>
          <li>
              <a href="https://itrevolution.com/book/the-phoenix-project/" target="_blank">The Phoenix Project</a> by G. Kim, K. Behr, and G. Spafford
              <p>A good portrayal of life inside a siloed IT department and what DevOps really has to offer.</p>
          </li>
          <li>
              <a href="http://freakonomics.com/books/" target="_blank">Freakonomics</a> and <a href="http://freakonomics.com/books/" target="_blank">SuperFreakonomics</a> by Steven D. Levitt and Stephen J. Dubner
              <p>...</p>
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
              <p>A book that challenges commonly-held perspectives on leadership, management, and how organizations actually best flourish.</p>
          </li>
        </ul>
    </div>
  </section>

  <section class="row">
    <div class="column books">
      <h2><a id="fiction"></a>Fiction</h2>
      <p class="description">Selecting highlights is much harder here, but I've limited myself to 20 novels...</p>
        <ul>
          <li>
              <a href="https://en.wikipedia.org/wiki/My_Family_and_Other_Animals" target="_blank">My Family and Other Animals</a> by Gerald Durrell
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Magus_(novel)" target="_blank">The Magus</a> by John Fowles
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Tender_Is_the_Night" target="_blank">Tender is the Night</a> by F. Scott Fitzgerald
              <p>Many people know Fitzgerald’s most famous work, The Great Gatsby, but Tender is, I think, perhaps an even greater achievement.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby" target="_blank">The Great Gatsby</a> by F. Scott Fitzgerald
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Howards_End" target="_blank">Howards End</a> by E. M. Forster
              <p>A brilliant novel exploring our desire to know and be known — or as the epitaph puts it, to “Only connect”.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Sophie%27s_World" target="_blank">Sophie’s World</a> by Jostein Gaarder
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Heart_of_the_Matter" target="_blank">The Heart of the Matter</a> by Graham Greene
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Go-Between" target="_blank">The Go-Between</a> by L. P. Hartley
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Remains_of_the_Day" target="_blank">The Remains of the Day</a> by Kazuo Ishiguro
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Atonement_(novel)" target="_blank">Atonement</a> by Ian McEwan
              <p>Of all McEwan’s many fine novels, this is my firm favorite.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Good_Soldier" target="_blank">The Good Soldier</a> by Ford Madox Ford
              <p>...</p>
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
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/East_of_Eden_(novel)" target="_blank">East of Eden</a> by John Steinbeck
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Secret_History" target="_blank">The Secret History</a> by Donna Tartt
              <p>What becomes of six unusual and secretive classics students at a small, elite Vermont college...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Anna_Karenina" target="_blank">Anna Karenina</a> by Leo Tolstoy
              <p>...</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/Brideshead_Revisited" target="_blank">Brideshead Revisited</a> by Evelyn Waugh
              <p>This novel has it all: youth, love, loss, faith, family, and a teddy bear named Aloysius.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/The_Code_of_the_Woosters" target="_blank">The Code of the Woosters</a> by P. G. Wodehouse
              <p>This is perhaps a peculiarly British form of comedy, but I could happily read a Jeeves and Wooster novel any day of the year.</p>
          </li>
          <li>
              <a href="https://en.wikipedia.org/wiki/To_the_Lighthouse" target="_blank">To the Lighthouse</a> by Virginia Woolf
              <p>...</p>
          </li>
        </ul>
    </div>
  </section>

    </Layout>
  );
}

export default ReadingPage;
