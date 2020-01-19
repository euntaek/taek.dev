import React, { useEffect, useRef } from "react";

const src = "https://utteranc.es/client.js";

function Utterances({ repo }) {
  const rootElement = useRef(null);

  useEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comments",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    rootElement.current.appendChild(utterances);
  }, [repo]);

  return <div ref={rootElement} />;
}

export default Utterances;
