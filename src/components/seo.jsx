import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import TypewriterIllustration from "../images/favicon/typewriter.svg";

export const SEO = ({ title, author, description, pathname, children }) => {
  const { title: defaultTitle, author: defaultAuthor, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content="Screenshot of Tom Waterton's website homepage. The homepage features a profile photo of Tom and brief description of what can be found on the website." />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:creator:id" content="188022199" />
      <link rel="icon" src={TypewriterIllustration} alt="Typewriter icon" />
      {children}
    </>
  )
}