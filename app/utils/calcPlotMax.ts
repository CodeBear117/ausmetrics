// this function calculates a suitable max value to show on a plot

export function calcPlotMax(yMax: number): number {
    if (yMax <= 0) {
        return 0; // Handle non-positive values
    }

    const orderOfMagnitude = Math.floor(Math.log10(yMax));
    const divisor = Math.pow(10, orderOfMagnitude);
    let niceMax = Math.ceil(yMax / divisor) * divisor;

    // If the niceMax is excessively close to yMax, consider step up one more level
    if ((niceMax - yMax) / divisor < 0.1) { // if less than 5% of the order of magnitude
        niceMax += (4*divisor);
    }

    return niceMax;
};