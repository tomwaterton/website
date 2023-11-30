import React, { useState } from "react";
import { SEO } from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";

const CrosswordsPage = ({ data }) => {

  const [filter, setFilter] = useState("all");

  const whichCrosswordsToRender = () => {
    const allCrosswords = data.allCrosswordsJson.nodes
    let crosswordsToRenderArray
    if ( filter === "all" ) {
        crosswordsToRenderArray = allCrosswords
    } else {
        crosswordsToRenderArray = allCrosswords.filter( crossword => crossword.categories.includes(filter) )
    }
    return crosswordsToRenderArray
  }

  return(
    <Layout>

      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Cryptic crosswords</h1>
            <p><em>Some cryptic crosswords that I've composed (under the pseudonym 'Meles').</em></p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <ul className="c-tile-list">
            <RenderCrosswords crosswords={whichCrosswordsToRender()} />
          </ul>
        </section>

        </ContentWidth>
    </Layout>

  )
}

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
`

export default CrosswordsPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Cryptic crosswords" 
    description="Some cryptic crosswords that I've composed (tomwaterton.com)" 
    />
)

class RenderCrosswords extends React.Component {
  render() {
    return(
      this.props.crosswords.map( (crossword,i) => (
        <CrosswordTile
          key={crossword.title}
          title={crossword.title}
          url={crossword.url}
          image={crossword.image}
          min={crossword.min}
          date={crossword.date}
        />
      ))
    )
  }
}


class CrosswordTile extends React.Component {
  render() {
    return(
      <li key={this.props.key} className="c-tile-list__item">
        <crossword className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
            <a href={this.props.url}>
              <img className="article-thumbnail"
                alt="Cryptic crossword image"
                src={`../images/crosswords/${this.props.image}`}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <div>
              <h2 className="c-article-tile__title" itemprop="headline">
                <a href={this.props.url}>{this.props.title}</a>
              </h2>
            </div>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time" itemprop="crosswordRef">
              <em>{this.props.min}</em>
            </span>

            <span className="c-article-tile__date" itemprop="datePublished">
              {this.props.date}
            </span>
          </footer>
        </crossword>
      </li>
    )
  }
}