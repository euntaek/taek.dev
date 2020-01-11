import format from "date-fns/format";

const dataFormatter = date => {
  return format(new Date(date), "MMMM dd, yyyy").toUpperCase();
};

export default dataFormatter;
