import metaData from "../../gatsby-siteMetadata";
import { sessionStorage } from "./window";

const key = `_${metaData.siteUrl}_`;

const checkStorage = storage => {
  const bool = !storage ? true : false;
  return bool;
};

const getVal = (storage, key) => {
  if (checkStorage(sessionStorage)) return;
  const data = storage.getItem(key);
  if (!data) return;
  return data;
};

const setVal = (storage, key, val) => {
  if (checkStorage(sessionStorage)) return;
  return storage.setItem(key, val);
};

export const getCategory = () => {
  const category = getVal(sessionStorage, `${key}category`);
  return category;
};

export const setCategory = category => {
  return setVal(sessionStorage, `${key}category`, category);
};

export const getTags = () => {
  const tags = getVal(sessionStorage, `${key}tags`);
  return tags && tags.split(",");
};

export const setTags = tags => {
  return setVal(sessionStorage, `${key}tags`, tags);
};

export const getShowTags = () => {
  const showTags = getVal(sessionStorage, `${key}show-tags`);
  return showTags === "true";
};

export const setShowTags = showTags => {
  return setVal(sessionStorage, `${key}show-tags`, showTags);
};
