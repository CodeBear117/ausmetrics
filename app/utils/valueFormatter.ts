  // function to format large numbers with commas

  export const valueFormatter = function (number: { toString: () => string }) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };