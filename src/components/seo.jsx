import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import TypewriterIllustration from "../images/favicon/typewriter.svg";

export const SEO = ({ title, author, description, pathname, children }) => {
  const {
    title: defaultTitle,
    author: defaultAuthor,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ""}`,
    twitterUsername
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta content={seo.description} name="description" />
      <meta content={seo.author} name="author" />
      <meta content={seo.image} name="image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={seo.title} name="twitter:title" />
      <meta content={seo.url} name="twitter:url" />
      <meta content={seo.description} name="twitter:description" />
      <meta content={seo.image} name="twitter:image" />
      <meta
        content="Screenshot of Tom Waterton's website homepage. The homepage features a profile photo of Tom and brief description of what can be found on the website."
        name="twitter:image:alt"
      />
      <meta content={seo.twitterUsername} name="twitter:creator" />
      <meta content="188022199" name="twitter:creator:id" />
      <link alt="Typewriter icon" href={TypewriterIllustration} rel="icon" />
      {children}
    </>
  );
};
