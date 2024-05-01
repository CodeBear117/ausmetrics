// Function accepts a value and returns that value in its correct format based on a input symbol when called.

export const formatData = (data: number, symbol: string) => {
  if (typeof data !== 'number') {
    data = parseFloat(data); // Converts to number if needed
}

    let formattedData = ""

switch (symbol) {
    case "$":
      if (data >= 1000000) {
        formattedData = `${symbol}` + (data / 1000000).toFixed(2) + 'M';
    } else {
        formattedData = `${symbol}` + data.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };
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