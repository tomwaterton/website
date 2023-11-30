
import React, { useState } from "react";
import { SEO } from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";

const ArticlesPage = ({ data }) => {

  const [filter, setFilter] = useState("all");

  const whichArticlesToRender = () => {
    const allArticles = data.allArticlesJson.nodes
    let articlesToRenderArray
    if ( filter === "all" ) {
      articlesToRenderArray = allArticles
    } else {
      articlesToRenderArray = allArticles.filter( article => article.categories.includes(filter) )
    }
    return articlesToRenderArray
  }


  return(

    <Layout>

      <ContentWidth>
        <section className="">
          <div className="column">
            <h1>Articles</h1>
          </div>
        </section>
        <section className="row xs:hidden">
            <div id="myBtnContainer" className="flex float-right">
              <div>
                <button className={`btn ${ filter === "all" ? "active" : null }`} onClick={() => setFilter("all")}>all articles</button>
                <button className={`btn ${ filter === "brewing" ? "active" : null}`} onClick={() => setFilter("brewing")}>brewing</button>
                <button className={`btn ${ filter === "comms" ? "active" : null}`} onClick={() => setFilter("comms")}>communication</button>
                <button className={`btn ${ filter === "content" ? "active" : null}`} onClick={() => setFilter("content")}>content</button>
                <button className={`btn ${ filter === "culture" ? "active" : null}`} onClick={() => setFilter("culture")}>culture</button>
                <button className={`btn ${ filter === "design" ? "active" : null}`} onClick={() => setFilter("design")}>design</button>
                <button className={`btn ${ filter === "growth" ? "active" : null}`} onClick={() => setFilter("growth")}>growth</button>
              </div>
            </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <ul className="c-tile-list">
            <RenderArticles articles={whichArticlesToRender()} />
          </ul>
        </section>

      </ContentWidth>
    </Layout>

  )
}

export const query = graphql`
  {
    allArticlesJson {
      nodes {
        title
        subTitle
        url
        image
        mins
        date
        categories
      }
    }
  }
`

export default ArticlesPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Articles" 
    description="Articles about content design, communication, culture, and growth written by Tom Waterton" 
    />
)



class RenderArticles extends React.Component {
  render() {
    return(
      this.props.articles.map( (article,i) => (
        <ArticleTile
          key={article.title}
          title={article.title}
          subTitle={article.subTitle}
          url={article.url}
          image={article.image}
          mins={article.mins}
          date={article.date}
        />
      ))
    )
  }
}



class ArticleTile extends React.Component {
  render() {
    return(
      <li key={this.props.key} className="c-tile-list__item">
        <article className="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
          <div className="c-article-tile__header">
            <a href={this.props.url}>
              <img className="article-thumbnail"
                alt="Article image"
                src={`../images/articles/${this.props.image}`}
              />
            </a>
          </div>

          <div className="c-article-tile__body">
            <div>
              <h2 className="c-article-tile__title" itemprop="headline">
                <a href={this.props.url}>{this.props.title}</a>
              </h2>
              <p className="article-subhead">{this.props.subTitle}</p>
            </div>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time" itemprop="readTime">
              {this.props.mins} min read
            </span>

            <span className="c-article-tile__date" itemprop="datePublished">
              {this.props.date}
            </span>
          </footer>
        </article>
      </li>
    )
  }
}