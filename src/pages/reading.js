import React, { useState } from "react";
import { Seo } from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import AnimatedCount from "../components/animatedCount";
import bookshelves_photo from "../images/reading/bookshelves.jpeg";

const ReadingFictionPage = ({ data }) => {
  const [filter, setFilter] = useState("all");

  const whichFictionToRender = () => {
    const allFiction = data.allFictionJson.nodes;
    let fictionToRenderArray;
    if (filter === "all") {
      fictionToRenderArray = allFiction;
    } else {
      fictionToRenderArray = allFiction.filter((fiction) =>
        fiction.categories.includes(filter)
      );
    }
    return fictionToRenderArray;
  };

  const fictionToRender = whichFictionToRender();

  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column books">
            <h1 id="reading-fiction">Reading fiction</h1>
            <p>
              <em>
                For me, reading fiction is one of life&apos;s great pleasures.
                Here&apos;s a record of the novels, plays, and short story
                collections that I&apos;ve enjoyed over recent years.
              </em>
            </p>
            <p>
              <em>
                You might also be interested in the following:{" "}
                <a
                  href="https://tomwaterton.medium.com/why-i-read-d044f8a01015"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Why I read
                </a>{" "}
                (article) and the{" "}
                <Link to="/recommended-books">recommended non-fiction</Link>{" "}
                page, which covers writing- and design-related books I&apos;ve
                read.
              </em>
            </p>
          </div>
          <div className="column reading-photo-column">
            <img
              alt="Some of our bookshelves at home"
              className="block tilt-landscape-left tom-on-books do-not-print"
              src={bookshelves_photo}
            />
          </div>
        </section>

        <section className="row">
          <div className="flex float-right" id="myBtnContainer">
            <div className="filterButtonContainer">
              <button
                aria-pressed={filter === "all"}
                className={filter === "all" ? "btn active" : "btn"}
                onClick={() => setFilter("all")}
                type="button"
              >
                All fiction read
              </button>
              <button
                aria-pressed={filter === "favourite"}
                className={filter === "favourite" ? "btn active" : "btn"}
                onClick={() => setFilter("favourite")}
                type="button"
              >
                My 25 favourites
              </button>
              <button
                aria-pressed={filter === "re-read"}
                className={filter === "re-read" ? "btn active" : "btn"}
                onClick={() => setFilter("re-read")}
                type="button"
              >
                Read more than once
              </button>
              <button
                aria-pressed={filter === "shorts"}
                className={filter === "shorts" ? "btn active" : "btn"}
                onClick={() => setFilter("shorts")}
                type="button"
              >
                Short story collections
              </button>
              <button
                aria-pressed={filter === "play"}
                className={filter === "play" ? "btn active" : "btn"}
                onClick={() => setFilter("play")}
                type="button"
              >
                Plays
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col padding-bottom">
          <div className="fictionListContainer">
            <p aria-live="polite" className="itemCount">
              <AnimatedCount value={fictionToRender.length} />{" "}
              {fictionToRender.length === 1 ? "title" : "titles"}
            </p>
            <p>
              <em>Books are listed alphabetically by author.</em>
            </p>
            <ul>
              <RenderFiction fiction={fictionToRender} />
            </ul>
          </div>

          <div className="backToTop">
            <a href="#reading-fiction">&uarr; Back to top</a>
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
  <Seo
    description="A personal record of the novels, plays, and short story collections Tom Waterton has read and enjoyed over recent years."
    title="Reading fiction – Tom Waterton"
  />
);

class RenderFiction extends React.Component {
  render() {
    return this.props.fiction.map((fiction) => (
      <FictionList
        author={fiction.author}
        date={fiction.datePub}
        key={`${fiction.title}--${fiction.author}`}
        title={fiction.title}
      />
    ));
  }
}

class FictionList extends React.Component {
  render() {
    return (
      <li>
        <span className="fiction_title">{this.props.title} </span>
        <span className="fiction_date">({this.props.date}) by </span>
        <span className="fiction_author">{this.props.author} </span>
      </li>
    );
  }
}
