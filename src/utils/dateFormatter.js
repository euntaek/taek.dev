import format from "date-fns/format";

export const dateFormat = date => {
  return format(new Date(date), "MMMM dd, yyyy");
};
