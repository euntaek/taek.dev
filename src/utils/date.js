import format from "date-fns/format";

export const dateFormat = date => {
  return format(new Date(date), "MMMM dd, yyyy");
};

const re = /(\d{4}-\d{2}-\d{2})-/;

export const filterDateFromPath = path => path.replace(re, "");
