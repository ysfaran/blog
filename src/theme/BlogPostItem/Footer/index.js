import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import Giscus from "@giscus/react";

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div className="docusaurus-mt-lg" />
      <Giscus
        repo="ysfaran/blog"
        repoId="MDEwOlJlcG9zaXRvcnkyNTAzMjYxNDQ="
        category="Blog Comments"
        categoryId="DIC_kwDODuusgM4CRRBp"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
      />
    </>
  );
}
