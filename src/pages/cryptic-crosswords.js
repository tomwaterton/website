import React from "react";
import { Seo } from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";

const CrosswordsPage = ({ data }) => {
  return (
    <Layout>
      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Cryptic crosswords</h1>
            <p>
              <em>
                Some cryptic crosswords that I've composed (under the pseudonym
                'Meles').
              </em>
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <ul className="c-tile-list">
            <RenderCrosswords crosswords={data.allCrosswordsJson.nodes} />
          </ul>
        </section>
      </ContentWidth>
    </Layout>
  );
};

export const query = graphql`
  {
    allCrosswordsJson {
      nodes {
        title
        url
        image
        min
        date
      }
    }
  }
`;

export default CrosswordsPage;

export const Head = () => (
  <Seo
    description="Cryptic crosswords composed by Tom Waterton under the pseudonym 'Meles'."
    title="Cryptic crosswords – Tom Waterton"
  />
);

class RenderCrosswords extends React.Component {
  render() {
    return this.props.crosswords.map((crossword, i) => (
      <CrosswordTile
        date={crossword.date}
        image={crossword.image}
        key={crossword.title}
        min={crossword.min}
        title={crossword.title}
        url={crossword.url}
      />
    ));
  }
}

class CrosswordTile extends React.Component {
  render() {
    return (
      <li className="c-tile-list__item">
        <article
          className="c-article-tile col3"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="c-article-tile__header">
            <a href={this.props.url} rel="noopener noreferrer" target="_blank">
              <img
                alt={this.props.title}
                className="article-thumbnail"
                src={`../images/crosswords/${this.props.image}`}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <div>
              <h2 className="c-article-tile__title" itemProp="headline">
                <a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.title}</a>
              </h2>
            </div>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time" itemProp="crosswordRef">
              <em>{this.props.min}</em>
            </span>

            <span className="c-article-tile__date" itemProp="datePublished">
              {this.props.date}
            </span>
          </footer>
        </article>
      </li>
    );
  }
}
