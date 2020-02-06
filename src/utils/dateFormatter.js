import format from "date-fns/format";

export const dateForMatter = date => {
  return format(new Date(date), "MMMM dd, yyyy");
};
