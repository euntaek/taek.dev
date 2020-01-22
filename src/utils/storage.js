import metaData from "../../gatsby-siteMetadata-config";
const win = typeof window !== "undefined" && window;

const key = `_${metaData.siteUrl}_`;

export const getCategory = () => win.sessionStorage.getItem(`${key}category`);

export const setCategory = category =>
  win.sessionStorage.setItem(`${key}category`, category);

export const getTags = () => {
  const tags = win.sessionStorage.getItem(`${key}tags`);
  return tags && tags.split(",");
};

export const setTags = tags => win.sessionStorage.setItem(`${key}tags`, tags);

export const getShowTags = () => {
  const showTags = win.sessionStorage.getItem(`${key}show-tags`);
  return showTags === "true";
};

export const setShowTags = showTags =>
  win.sessionStorage.setItem(`${key}show-tags`, showTags);
