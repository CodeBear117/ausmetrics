  // function required by Tremor/React components to format large numbers with commas

export const valueFormatter = function (number: { toString: () => string }) {
  // Convert input to a number to handle numeric operations
  const numericValue = Number(number);

  // Determine if the number is an integer
  const formattedNumber = Number.isInteger(numericValue) ?
    numericValue.toString() : // Keep as is if integer
    numericValue.toFixed(1);  // Format to one decimal place if not

  // Adding commas for thousands and returning the formatted number
  return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};