// This function finds the largest Y value in a set of coords. The result is used to set the plot y-axis width.

type DataPointTypes = {
    [key: string]: string | number;
  };

export function findLargestY(chartdata: DataPointTypes[], yKey: string): number {
    let largestY = chartdata[0][yKey] as number; // Safe casting since you know yKey will always be a number
    for (let i = 1; i < chartdata.length; i++) {
        const currentValue = chartdata[i][yKey] as number;
        if (currentValue > largestY) {
            largestY = currentValue;
        };
    };
    return largestY;
};