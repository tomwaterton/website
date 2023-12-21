
import React, { useState } from "react";
import { SEO } from "../components/seo";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ContentWidth from "../components/contentWidth";
import Tom_on_books_photo from "../images/reading/Tom_on_books.jpg";

const ReadingFictionPage = ({ data }) => {

  const [filter, setFilter] = useState("all");

  const whichFictionToRender = () => {
    const allFiction = data.allFictionJson.nodes
    let fictionToRenderArray
    if ( filter === "all" ) {
      fictionToRenderArray = allFiction
    } else {
      fictionToRenderArray = allFiction.filter( fiction => fiction.categories.includes(filter) )
    }
    return fictionToRenderArray
  }


  return(

    <Layout>

      <ContentWidth>
        <section className="">
          <div className="column">
            <h1>Reading: Fiction</h1>
            <p><em>I’m an incurable bookworm and read a lot of fiction. (Books are listed alphabetically by author.)</em></p>
          </div>
        </section>

        <section className="row xs:hidden">
            <div id="myBtnContainer" className="flex float-right">
              <div className="filterButtonContainer">
                <button className={`btn ${ filter === "all" ? "active" : null }`} onClick={() => setFilter("all")}>all fiction read</button>
                <button className={`btn ${ filter === "10" ? "active" : null}`} onClick={() => setFilter("10")}>my top 10</button>
                <button className={`btn ${ filter === "25" ? "active" : null}`} onClick={() => setFilter("25")}>my top 25</button>
                <button className={`btn ${ filter === "50" ? "active" : null}`} onClick={() => setFilter("50")}>my top 50</button>
                <button className={`btn ${ filter === "re-read" ? "active" : null}`} onClick={() => setFilter("re-read")}>read more than once</button>
                <button className={`btn ${ filter === "shorts" ? "active" : null}`} onClick={() => setFilter("shorts")}>short story collections</button>
              </div>
            </div>
        </section>

        <section className="flex flex-col md:flex-row padding-bottom">
          <div className="fictionListContainer">
            <ol>
              <RenderFiction fiction={whichFictionToRender()} />
            </ol>
          </div>
        </section>

      </ContentWidth>
    </Layout>

  )
}

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
`

export default ReadingFictionPage

export const Head = () => (
  <SEO 
    title="Tom Waterton's website: Reading: Fiction" 
    description="Some of the novels, novellas, and short story collections I've read (tomwaterton.com)"
    />
)


class RenderFiction extends React.Component {
  render() {
    return(
        this.props.fiction.map( (fiction,i) => (
          <FictionList
            key={fiction.title}
            title={fiction.title}
            author={fiction.author}
            date={fiction.datePub}
          />
        ))
      )
  }
}


class FictionList extends React.Component {
    render() {
      return(
        <li key={this.props.key}>
          <span className="fiction_title">{this.props.title} </span>
          <span className="fiction_date">({this.props.date}) by </span>
          <span className="fiction_author">{this.props.author} </span>
        </li>
    )
}
}