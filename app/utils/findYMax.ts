// This function finds the largest Y value in a set of coords. The coords are in an array of labelled objects. The result is used to set the plot y-axis width.

type DataPointTypes = {
    [key: string]: string | number;
  };

export function findYMax(chartdata: DataPointTypes[], yKey: string): number {
    let yMax = chartdata[0][yKey] as number; // Safe casting since you know yKey will always be a number
    for (let i = 1; i < chartdata.length; i++) {
        const currentValue = chartdata[i][yKey] as number;
        if (currentValue > yMax) {
            yMax = currentValue;
        };
    };
    return yMax;
};