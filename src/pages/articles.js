import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import article_8_Illustration from "../images/article_thumbnail_10.jpg";
import article_9_Illustration from "../images/article_thumbnail_10.jpg";
import article_10_Illustration from "../images/article_thumbnail_10.jpg";

function ArticlesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Articles"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
            <h1>Articles</h1>
            <p class="description">Some of my recent articles.</p>
        </div>
      </section>


	<section>

<ul class="c-tile-list">
  
  <li class="c-tile-list__item">
    <article class="c-article-tile col1" itemscope itemtype="http://schema.org/Article">
      <div class="c-article-tile__header">
	    <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">
		  <img class="article-thumbnail"
			alt="Photo of me working with colleagues on some designs"
			src={article_10_Illustration}
		  />
		</a>
      </div>

      <div class="c-article-tile__body">
        <h2 class="c-article-tile__title" itemprop="headline">
          <a href="https://medium.com/design-ibm/confessions-of-a-content-designer-9be86daca04">Confessions of a Content Designer</a>
        </h2>
      </div>

      <footer class="c-article-tile__footer">
        <span class="c-article-tile__read-time">
			10 min read
        </span>

        <date class="c-article-tile__date" itemprop="datePublished">
			Jun 18 2019
        </date>
      </footer>
    </article>
  </li>


  <li class="c-tile-list__item">
    <article class="c-article-tile col2" itemscope itemtype="http://schema.org/Article">
      <div class="c-article-tile__header">
	    <a href="https://medium.com/design-ibm/on-content-design-d8f9830ff302">
	      <img class="article-thumbnail"
            alt="Cat and human sitting on a couch"
            src={article_9_Illustration}
          />
		</a>
      </div>

      <div class="c-article-tile__body">
        <h2 class="c-article-tile__title" itemprop="headline">
          <a href="https://medium.com/design-ibm/on-content-design-d8f9830ff302">On Content Design (a poem)</a>
        </h2>
      </div>

      <footer class="c-article-tile__footer">
        <span class="c-article-tile__read-time">
			3 min read
        </span>

        <date class="c-article-tile__date" itemprop="datePublished">
          Feb 11, 2019
        </date>
      </footer>
    </article>
  </li>


  <li class="c-tile-list__item">
    <article class="c-article-tile col3" itemscope itemtype="http://schema.org/Article">
      <div class="c-article-tile__header">
	    <a href="https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53">
	      <img class="article-thumbnail"
            alt="Cat and human sitting on a couch"
            src={article_8_Illustration}
          />
		</a>
      </div>

      <div class="c-article-tile__body">
        <h2 class="c-article-tile__title" itemprop="headline">
          <a href="https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53">How to punctuate like a pro</a>
        </h2>
      </div>

      <footer class="c-article-tile__footer">
        <span class="c-article-tile__read-time">
		9 min read
        </span>

        <date class="c-article-tile__date" itemprop="datePublished">
          Oct 20, 2018
        </date>
      </footer>
    </article>
  </li>
</ul>








<br/><br/>
On Content Design
	https://medium.com/design-ibm/on-content-design-d8f9830ff302
	Feb 11 2019
	3 min read
	#content_desgin
<br/><br/>
How to punctuate like a pro
	https://medium.com/@tomwaterton/how-to-punctuate-like-a-pro-f1cb66b87f53
	Oct 20 2018
	9 min read
	#writing
	<br/><br/>
Taking responsibility for our communication
	https://medium.com/design-ibm/taking-responsibility-for-our-communication-b677100d61f5
	Jul 20 2018
	7 min read
	#communication #collaboration
	<br/><br/>
Why I read
	https://medium.com/@tomwaterton/why-i-read-d044f8a01015	
	May 02 2018
	8 min read
	#learning #reading
	<br/><br/>
Failing fast, using feedback loops, and the benefits of iterative design
	https://medium.com/design-ibm/failing-fast-using-feedback-loops-and-the-benefits-of-iterative-design-e0b86d037f50
	Feb 20 2018
	8 min read
	#design-thinking #lean-startup #prototyping #feedback-loop #fail-fast
	<br/><br/>
How to emphasize key words in your text
	https://medium.com/@tomwaterton/how-to-emphasize-key-words-in-your-text-b8738f146972
	Sep 13 2017
	6 min read
	#writing 
	<br/><br/>
Creating a culture of design
	https://medium.com/design-ibm/creating-a-culture-of-design-dfb9a36623b3
	Jun 08 2017
	9 min read
	#design #culture #design-thinking
	<br/><br/>
What’s your passion?
	https://medium.com/@tomwaterton/whats-your-passion-c570374a8810
	Jul 18 2016
	4 min read	
	#story #communication
	<br/><br/>
Tell me a story
	https://medium.com/@tomwaterton/tell-me-a-story-a809032e95d5
	Jul 03 2016
	4 min read
	#story #communication
	<br/>


      </section>
    </Layout>
  );
}

export default ArticlesPage;
