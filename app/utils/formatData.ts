// Function accepts a value and returns that value in its correct format based on a input symbol when called.

export const formatData = (data: number, symbol: string) => {

    let formattedData = ""

switch (symbol) {
    case "$":
        formattedData =
        `${symbol}` + data.toFixed(2);
      break;

    case "%":
        formattedData =
        parseFloat(data.toFixed(1)) + `${symbol}`;
      break;

    case "pts":
        formattedData =
        parseFloat(data.toFixed(1)) + `${symbol}`;
      break;
  }
  return formattedData
};