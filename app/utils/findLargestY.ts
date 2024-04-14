// This function finds the largest Y value in a set of coords. The result is used to set the plot y-axis width.

interface DataPoint {
    x: string;
    y: number;
}

export function findLargestY(chartdata: DataPoint[]): number {
    let largestY = chartdata[0].y; // Assume first element has the largest y initially
    for (let i = 1; i < chartdata.length; i++) {
        if (chartdata[i].y > largestY) {
            largestY = chartdata[i].y; // Update largest if current y is bigger
        }
    }
    return largestY;
};