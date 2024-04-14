// Function to transform raw API data into usable information

type DataPointTypes = {
  [key: string]: string | number;
};

interface DataTransformProps {
  frequency: string;
  dataset: { [key: string]: number[] };
  startPeriod: string;
  xLabel: string;
  yLabel: string;
};

// input rawdata from api: string / number
export const dataTransforms = function ({ frequency, dataset, startPeriod, xLabel, yLabel }: DataTransformProps): DataPointTypes[] {

  let chartdata: DataPointTypes[] = [];

  switch (frequency) {

    // annual data polling frequency
    case "A": {
      const transformedData: { [year: string]: number } = {}; // create empty object
        Object.keys(dataset).forEach((key) => { // iterate over elements in dataset
          const year = parseInt(startPeriod) + parseInt(key, 10); // calc new year val for each key in dataset
          transformedData[year.toString()] = dataset[key][0]; // assign current dataset key to the transformed object
        });
        chartdata = Object.keys(transformedData).map((key) => ({
          [xLabel]: key,
          [yLabel]: transformedData[key]
        }));
      break;
    };

    // quarterly data polling frequency
    case "Q": {
      const transformedData: { [yearQuarter: string]: number } = {};
        Object.keys(dataset).forEach((key) => {
          const index = parseInt(key, 10);
          const year = parseInt(startPeriod) + Math.floor(index / 4);
          const quarter = (index % 4) + 1;
          const yearQuarterKey = `${year}Q${quarter}`;
          transformedData[yearQuarterKey] = dataset[key][0];
        });
        chartdata = Object.keys(transformedData).map((key) => ({
          [xLabel]: key,
          [yLabel]: transformedData[key]
        }));
      break;
    };

    // monthly data polling frequency
    case "M": {
      const transformedData: { [yearMonth: string]: number } = {};
        Object.keys(dataset).forEach((key) => {
          const index = parseInt(key, 10);
          const year = parseInt(startPeriod) + Math.floor(index / 12);
          const month = (index % 12) + 1;
          const yearMonthKey = `${year}-${month.toString().padStart(2, '0')}`;
          transformedData[yearMonthKey] = dataset[key][0];
        });
        chartdata = Object.keys(transformedData).map((key) => ({
          [xLabel]: key,
          [yLabel]: transformedData[key]
        }));
      break;
    };

    default:
      throw new Error("Unsupported frequency");
  };

    return chartdata;
  };