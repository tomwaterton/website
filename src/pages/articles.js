
import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import SEO from "../components/seo";

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
      <SEO
        keywords={[`articles`, `tom`, `waterton`, `content`, `design`]}
        title="Articles"
      />

      <ContentWidth>
        <section className="row">
          <div className="column">
            <h1>Articles</h1>
            <p className="description">Some of my recent articles.</p>

            {/* TOM PASTE YOUR CONTENT SWITCHER HERE */}

          </div>
        </section>


        <section className="flex flex-col md:flex-row items-center padding-bottom">
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




class RenderArticles extends React.Component {
  render() {
    return(
      this.props.articles.map( (article,i) => (
        <ArticleTile
          key={article.title}
          title={article.title}
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
            <h2 className="c-article-tile__title" itemprop="headline">
              <a href="https://medium.com/@tomwaterton/the-danger-of-being-too-safe-8266babc3c0c">{this.props.title}</a>
            </h2>
          </div>

          <footer className="c-article-tile__footer">
            <span className="c-article-tile__read-time">
              {this.props.mins} min read
            </span>

            <date className="c-article-tile__date" itemprop="datePublished">
              {this.props.date}
            </date>
          </footer>
        </article>
      </li>
    )
  }
}