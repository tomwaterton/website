import React, { useState } from "react";
import { SEO } from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import bookshelves_photo from "../images/reading/bookshelves.jpeg";

const ReadingFictionPage = ({ data }) => {
  const [filter, setFilter] = useState(`all`);

  const whichFictionToRender = () => {
    const allFiction = data.allFictionJson.nodes;
    let fictionToRenderArray;
    if (filter === `all`) {
      fictionToRenderArray = allFiction;
    } else {
      fictionToRenderArray = allFiction.filter((fiction) =>
        fiction.categories.includes(filter)
      );
    }
    return fictionToRenderArray;
  };

  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column books">
            <h1>Reading fiction</h1>
            <p>
              <em>
                For me, reading fiction is one of life's great pleasures. Here's
                a record of the novels and short story collections that I've
                enjoyed over recent years.
              </em>
            </p>
            <p>
              <em>
                You might also be interested in the following related links:
              </em>
            </p>
            <ul className="ul-small do-not-print">
              <li>
                <a
                  href="https://tomwaterton.medium.com/why-i-read-d044f8a01015"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why I read
                </a>{" "}
                (article)
              </li>
              <li>
                <a href="#content">
                  <Link to="/recommended-books">
                    Recommended non-fiction (writing / design related)
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <img
              alt="Photo of some of our bookshelves at home"
              className="block tilt-landscape-left tom-on-books do-not-print"
              src={bookshelves_photo}
            />
          </div>
        </section>

        <section className="row xs:hidden">
          <div id="myBtnContainer" className="flex float-right">
            <div className="filterButtonContainer">
              <button
                className={`btn ${filter === `all` ? `active` : null}`}
                onClick={() => setFilter(`all`)}
              >
                All fiction read
              </button>
              <button
                className={`btn ${filter === `favourite` ? `active` : null}`}
                onClick={() => setFilter(`favourite`)}
              >
                My favourites
              </button>
              {/* <button
                className={`btn ${filter === "10" ? "active" : null}`}
                onClick={() => setFilter("10")}
              >
                my top 10
              </button>
              <button
                className={`btn ${filter === `25` ? `active` : null}`}
                onClick={() => setFilter(`25`)}
              >
                Favourites (1-25)
              </button>
              <button
                className={`btn ${filter === `50` ? `active` : null}`}
                onClick={() => setFilter(`50`)}
              >
                Favourites (26-50)
              </button>
              <button
                className={`btn ${filter === `75` ? `active` : null}`}
                onClick={() => setFilter(`75`)}
              >
                Favourites (51-75)
              </button> */}
              <button
                className={`btn ${filter === `re-read` ? `active` : null}`}
                onClick={() => setFilter(`re-read`)}
              >
                Read more than once
              </button>
              <button
                className={`btn ${filter === `shorts` ? `active` : null}`}
                onClick={() => setFilter(`shorts`)}
              >
                Short story collections
              </button>
              <button
                className={`btn ${filter === `play` ? `active` : null}`}
                onClick={() => setFilter(`play`)}
              >
                Plays
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <div className="fictionListContainer">
            <p>
              <em>Books are listed alphabetically by author.</em>
            </p>
            <ol>
              <RenderFiction fiction={whichFictionToRender()} />
            </ol>
          </div>

          <div className="backToTop">
            <a href="#">&uarr; Back to top</a>
          </div>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export const query = graphql`
  {
    allFictionJson {
      nodes {
        title
        author
        datePub
        categories
      }
    }
  }
`;

export default ReadingFictionPage;

export const Head = () => (
  <SEO
    title="Tom Waterton's website: Reading fiction"
    description="Some of the novels, novellas, plays, and short story collections I've read (tomwaterton.com)"
  />
);

class RenderFiction extends React.Component {
  render() {
    return this.props.fiction.map((fiction, i) => (
      <FictionList
        key={fiction.title}
        title={fiction.title}
        author={fiction.author}
        date={fiction.datePub}
      />
    ));
  }
}

class FictionList extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        <span className="fiction_title">{this.props.title} </span>
        <span className="fiction_date">({this.props.date}) by </span>
        <span className="fiction_author">{this.props.author} </span>
      </li>
    );
  }
}
