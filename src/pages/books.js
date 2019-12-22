import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import book_photo from "../images/books/books.jpg";

function BooksPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Books"
      />

  <section class="row">
    <div class="column">
      <h1>Books</h1>
      <p class="description">I'm an incurable bookworm so I always have a book on the go. 
      Here are some recommendations:</p>
        <ul class="ul-small">
          <li><a href="#non-fiction">Non-fiction</a></li>
          <li><a href="#fiction">Fiction</a></li>
        </ul>
    </div>
    <div class="column">
      <img
        alt="Book photo"
        className="block tilt2"
        src={book_photo}
      />
    </div>
  </section>


  <section class="row">
    <div class="column books">
      <h2><a id="non-fiction"></a>Non-fiction</h2>
        <ul>
          <li>
              <a href="/" target="_blank">Creativity, Inc</a> by Ed Catmull
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Quiet</a> by Susan Cain
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Rising Strong</a> by Brené Brown
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">The 7 Habits of Highly Successful People</a> by Stephen R. Covey
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Leadership and the New Science</a> by Margaret Wheatley
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Dialogue and the Art of Thinking Together</a> by William Isaacs
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">The Lean Startup</a> by Eric Ries
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">The Phoenix Project</a> by G. Kim, K. Behr, and G. Spafford
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Leadership and Self-Deception</a> by The Arbinger Institute
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Content Design</a> by Sarah Richards
              <p>I work as a Content Designer, so it’s perhaps no surprise that I’m a big fan of this little book.</p>
          </li>
          <li>
              <a href="/" target="_blank">Content Strategy for the Web</a> by Kristina Halvorson
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">The Design of Everyday Things</a> by Don Norman
              <p>This book was way ahead of its time when it was published in 1988 and is still worth a read today.</p>
          </li>
          <li>
              <a href="/" target="_blank">The Tipping Point</a> by Malcolm Gladwell
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">David and Goliath</a> by Malcolm Gladwell
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Freakonomics</a> by Steven D. Levitt and Stephen J. Dubner
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">SuperFreakonomics</a> by Steven D. Levitt and Stephen J. Dubner
              <p>This is my one-sentence description of this book...</p>
          </li>
        </ul>
    </div>
  </section>

  <section class="row">
    <div class="column books">
      <h2><a id="fiction"></a>Fiction</h2>
        <ul>
          <li>
              <a href="/" target="_blank">Howards End</a> by E. M. Forster
              <p>A brilliant novel exploring our desire to know and be known — or as the epitaph puts it, to “Only connect”.</p>
          </li>
          <li>
              <a href="/" target="_blank">Book title</a> by F. Scott Fitzgerald
              <p>Many people know Fitzgerald’s most famous work, The Great Gatsby, but Tender is, I think, perhaps an even greater achievement.</p>
          </li>
          <li>
              <a href="/" target="_blank">Brideshead Revisited</a> by Evelyn Waugh
              <p>This novel has it all: youth, love, loss, faith, family, and a teddy bear named Aloysius.</p>
          </li>
          <li>
              <a href="/" target="_blank">Lolita</a> by Vladimir Nabokov
              <p>Worth reading for the dazzling brilliance of the writing; one of the worlds greatest stylist at the height of his powers.</p>
          </li>
          <li>
              <a href="/" target="_blank">The Code of the Woosters</a> by P. G. Wodehouse
              <p>This is perhaps a peculiarly British form of comedy, but I could happily read a Jeeves and Wooster novel any day of the year.</p>
          </li>
          <li>
              <a href="/" target="_blank">Book title</a> by author
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Book title</a> by author
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Book title</a> by author
              <p>This is my one-sentence description of this book...</p>
          </li>
          <li>
              <a href="/" target="_blank">Book title</a> by author
              <p>This is my one-sentence description of this book...</p>
          </li>
        </ul>
    </div>
  </section>


    </Layout>
  );
}

export default BooksPage;
