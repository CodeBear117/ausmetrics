// This component provides the code to check the data for an API to a certain endpoint

// This component is used in development only

import React from "react";
import { dataTransforms } from "../../utils/dataTransforms";
import fetchABSDataAPI from "@/app/services/fetchABSDataAPI";

// assign types for path params based on template URL provided by ABS Docs
interface EndpointProps {
  dataflowIdentifier: string;
  dataKey: string;
  startPeriod: string;
  endPeriod: string | null;
  detail: string | null;
  dimensionAtObservation: string | null;
}

const PlotDataCheck: React.FC<EndpointProps> = async ({
  dataflowIdentifier,
  dataKey,
  startPeriod,
  endPeriod,
  detail,
  dimensionAtObservation,
}) => {
  // // build the endpoint
  let queryParams = [
    startPeriod ? `startPeriod=${startPeriod}` : "",
    endPeriod ? `endPeriod=${endPeriod}` : "",
    detail ? `detail=${detail}` : "",
    dimensionAtObservation
      ? `dimensionAtObservation=${dimensionAtObservation}`
      : "",
  ]
    .filter(Boolean)
    .join("&");

  let endpoint = `data/${dataflowIdentifier}/${dataKey}/${
    queryParams ? `?${queryParams}` : ""
  }`;
  // direct endpoint url:
  //check endpoint
  //console.log(endpoint);

  // fetch data from endpoint
  const data = await fetchABSDataAPI(endpoint); // all raw data from call

  // extract dataset from raw response
  const dataset = data.data.dataSets[0].series["0:0:0:0:0"].observations;

  // extract dataset info from raw response
  const datainfo = [
    data.data.structure.name, // title
    data.data.structure.description, // description
    data.data.structure.dimensions.series[4].values[0].id, // polling frequency
  ];

  const frequency = datainfo[2];
  const chartdata = dataTransforms({ frequency, dataset, startPeriod });

  // labelled data - these labels are hardcoded and need to be dynamic in the future
  const labelledChartData = chartdata.map((item) => ({
    x: Object.keys(item)[0],
    y: Object.values(item)[0],
  }));

  // x and y data for grpah
  // const x: string[] = Object.keys(transformedData);
  // const y: number[] = Object.values(transformedData);

  // extract axis labels for plots
  const xLabel = data.data.structure.dimensions.observation[0].name;
  //const yLabel = data.data.structure.attributes.dataSet[0].values[0].name;

  return (
    <>
      <h2>All Raw Data:</h2>
      <p>{JSON.stringify(data)}</p>
      <br />
      <h2>Actual Data:</h2>
      <p>{JSON.stringify(dataset)}</p>
      <br />
      <h2>Data Info:</h2>
      <p>{JSON.stringify(datainfo)}</p>
      <br />
      {/* <h2>Transformed Data:</h2>
      <p>{JSON.stringify(transformedData)}</p>
      <br /> */}
      {/* <h2>X Data:</h2>
      <p>{JSON.stringify(x)}</p>
      <br /> */}
      <h2>X Axis Label:</h2>
      <p>{JSON.stringify(xLabel)}</p>
      <br />
      {/* <h2>Y Data:</h2>
      <p>{JSON.stringify(y)}</p>
      <br /> */}
      <h2>Y axis Label:</h2>
      {/* <p>{JSON.stringify(yLabel)}</p> */}
      <br />
      <h2>Data as coordinates:</h2>
      <p>{JSON.stringify(chartdata)}</p>
      <br />
      <h2>Labelled data:</h2>
      <p>{JSON.stringify(labelledChartData)}</p>
    </>
  );
};

export default PlotDataCheck;

// data API raw formatted

// const APIdata = {
//   "meta": {
//     "schema": "https://raw.githubusercontent.com/sdmx-twg/sdmx-json/master/data-message/tools/schemas/1.0/sdmx-json-data-schema.json",
//     "id": "IREF118896",
//     "prepared": "2024-04-09T14:09:52Z",
//     "test": false,
//     "contentLanguages": ["en"],
//     "sender": {
//       "id": "_Stat_V8",
//       "name": "unknown",
//       "names": {"en": "unknown"}
//     }
//   },
//   "data": {
//     "dataSets": [
//       {
//         "action": "Information",
//         "links": [
//           {
//             "urn": "urn:sdmx:org.sdmx.infomodel.datastructure.DataStructure=ABS:ABS_PERSONS_PROJ(1.0.0)",
//             "rel": "DataStructure"
//           }
//         ],
//         "annotations": [0, 1, 2, 3, 4, 5],
//         "attributes": [0],
//         "series": {
//           "0:0:0:0:0": {
//             "attributes": [],
//             "annotations": [],
//             "observations": {
//               "0": [24190907],
//               "1": [24597847],
//               "2": [25015825],
//               "3": [25444104],
//               "4": [25873480],
//               "5": [26301274],
//               "6": [26727025],
//               "7": [27147199],
//               "8": [27562195],
//               "9": [27970435],
//               "10": [28372315],
//               "11": [28765734],
//               "12": [29157085],
//               "13": [29545877],
//               "14": [29931725],
//               "15": [30314335],
//               "16": [30693262],
//               "17": [31068410],
//               "18": [31439821],
//               "19": [31807641],
//               "20": [32172123],
//               "21": [32533632],
//               "22": [32892495],
//               "23": [33248991],
//               "24": [33603376],
//               "25": [33955939]
//             }
//           }
//         }
//       }
//     ],
//     "structure": {
//       "name": "Projected persons, by living arrangement, Australia, 2016 to 2041",
//       "names": {"en": "Projected persons, by living arrangement, Australia, 2016 to 2041"},
//       "description": "Projected number of households and families in Australia by state and capital city / rest of state for the period 2016 to 2041. Unit of measure: Households, Families, Persons. Geographic coverage: Australia/State/GCCSA. Catalogue number: 3236.0",
//       "descriptions": {"en": "Projected number of households and families in Australia by state and capital city / rest of state for the period 2016 to 2041. Unit of measure: Households, Families, Persons. Geographic coverage: Australia/State/GCCSA. Catalogue number: 3236.0"},
//       "dimensions": {
//         "dataset": [],
//         "series": [
//           {
//             "id": "REGION",
//             "name": "Region",
//             "names": {"en": "Region"},
//             "keyPosition": 0,
//             "roles": ["REGION"],
//             "values": [
//               {
//                 "id": "0",
//                 "order": 0,
//                 "name": "Australia",
//                 "names": {"en": "Australia"},
//                 "annotations": [6]
//               }
//             ]
//           },
//           {
//             "id": "AGE",
//             "name": "Age",
//             "names": {"en": "Age"},
//             "keyPosition": 1,
//             "roles": ["AGE"],
//             "values": [
//               {
//                 "id": "TT",
//                 "order": 151,
//                 "name": "All ages",
//                 "names": {"en": "All ages"},
//                 "annotations": [7]
//               }
//             ]
//           },
//           {
//             "id": "PERSON_LA",
//             "name": "Person Living Arrangement",
//             "names": {"en": "Person Living Arrangement"},
//             "keyPosition": 2,
//             "roles": ["PERS_LIV_ARR"],
//             "values": [
//               {
//                 "id": "16",
//                 "order": 15,
//                 "name": "Total projected persons",
//                 "names": {"en": "Total projected persons"},
//                 "annotations": [8]
//               }
//             ]
//           },
//           {
//             "id": "PROJ_SERIES",
//             "name": "Projection Assumption",
//             "names": {"en": "Projection Assumption"},
//             "keyPosition": 3,
//             "roles": ["PROJ_ASSUM"],
//             "values": [
//               {
//                 "id": "2",
//                 "order": 1,
//                 "name": "Series II",
//                 "names": {"en": "Series II"},
//                 "annotations": [9]
//               }
//             ]
//           },
//           {
//             "id": "FREQUENCY",
//             "name": "Frequency",
//             "names": {"en": "Frequency"},
//             "keyPosition": 4,
//             "roles": ["FREQ"],
//             "values": [
//               {
//                 "id": "A",
//                 "order": 6,
//                 "name": "Annual",
//                 "names": {"en": "Annual"}
//               }
//             ]
//           }
//         ],
//         "observation": [
//           {
//             "id": "TIME_PERIOD",
//             "name": "Time Period",
//             "names": {"en": "Time Period"},
//             "keyPosition": 5,
//             "roles": ["TIME_PERIOD"],
//             "values": [
//               {
//                 "start": "2016-01-01T00:00:00Z",
//                 "end": "2016-12-31T23:59:59Z",
//                 "id": "2016",
//                 "name": "2016",
//                 "names": {"en": "2016"}
//               },
//               {
//                 "start": "2017-01-01T00:00:00Z",
//                 "end": "2017-12-31T23:59:59Z",
//                 "id": "2017",
//                 "name": "2017",
//                 "names": {"en": "2017"}
//               },
//               {
//                 "start": "2018-01-01T00:00:00Z",
//                 "end": "2018-12-31T23:59:59Z",
//                 "id": "2018",
//                 "name": "2018",
//                 "names": {"en": "2018"}
//               },
//               {
//                 "start": "2019-01-01T00:00:00Z",
//                 "end": "2019-12-31T23:59:59Z",
//                 "id": "2019",
//                 "name": "2019",
//                 "names": {"en": "2019"}
//               },
//               {
//                 "start": "2020-01-01T00:00:00Z",
//                 "end": "2020-12-31T23:59:59Z",
//                 "id": "2020",
//                 "name": "2020",
//                 "names": {"en": "2020"}
//               },
//               {
//                 "start": "2021-01-01T00:00:00Z",
//                 "end": "2021-12-31T23:59:59Z",
//                 "id": "2021",
//                 "name": "2021",
//                 "names": {"en": "2021"}
//               },
//               {
//                 "start": "2022-01-01T00:00:00Z",
//                 "end": "2022-12-31T23:59:59Z",
//                 "id": "2022",
//                 "name": "2022",
//                 "names": {"en": "2022"}
//               },
//               {
//                 "start": "2023-01-01T00:00:00Z",
//                 "end": "2023-12-31T23:59:59Z",
//                 "id": "2023",
//                 "name": "2023",
//                 "names": {"en": "2023"}
//               },
//               {
//                 "start": "2024-01-01T00:00:00Z",
//                 "end": "2024-12-31T23:59:59Z",
//                 "id": "2024",
//                 "name": "2024",
//                 "names": {"en": "2024"}
//               },
//               {
//                 "start": "2025-01-01T00:00:00Z",
//                 "end": "2025-12-31T23:59:59Z",
//                 "id": "2025",
//                 "name": "2025",
//                 "names": {"en": "2025"}
//               },
//               {
//                 "start": "2026-01-01T00:00:00Z",
//                 "end": "2026-12-31T23:59:59Z",
//                 "id": "2026",
//                 "name": "2026",
//                 "names": {"en": "2026"}
//               },
//               {
//                 "start": "2027-01-01T00:00:00Z",
//                 "end": "2027-12-31T23:59:59Z",
//                 "id": "2027",
//                 "name": "2027",
//                 "names": {"en": "2027"}
//               },
//               {
//                 "start": "2028-01-01T00:00:00Z",
//                 "end": "2028-12-31T23:59:59Z",
//                 "id": "2028",
//                 "name": "2028",
//                 "names": {"en": "2028"}
//               },
//               {
//                 "start": "2029-01-01T00:00:00Z",
//                 "end": "2029-12-31T23:59:59Z",
//                 "id": "2029",
//                 "name": "2029",
//                 "names": {"en": "2029"}
//               },
//               {
//                 "start": "2030-01-01T00:00:00Z",
//                 "end": "2030-12-31T23:59:59Z",
//                 "id": "2030",
//                 "name": "2030",
//                 "names": {"en": "2030"}
//               },
//               {
//                 "start": "2031-01-01T00:00:00Z",
//                 "end": "2031-12-31T23:59:59Z",
//                 "id": "2031",
//                 "name": "2031",
//                 "names": {"en": "2031"}
//               },
//               {
//                 "start": "2032-01-01T00:00:00Z",
//                 "end": "2032-12-31T23:59:59Z",
//                 "id": "2032",
//                 "name": "2032",
//                 "names": {"en": "2032"}
//               },
//               {
//                 "start": "2033-01-01T00:00:00Z",
//                 "end": "2033-12-31T23:59:59Z",
//                 "id": "2033",
//                 "name": "2033",
//                 "names": {"en": "2033"}
//               },
//               {
//                 "start": "2034-01-01T00:00:00Z",
//                 "end": "2034-12-31T23:59:59Z",
//                 "id": "2034",
//                 "name": "2034",
//                 "names": {"en": "2034"}
//               },
//               {
//                 "start": "2035-01-01T00:00:00Z",
//                 "end": "2035-12-31T23:59:59Z",
//                 "id": "2035",
//                 "name": "2035",
//                 "names": {"en": "2035"}
//               },
//               {
//                 "start": "2036-01-01T00:00:00Z",
//                 "end": "2036-12-31T23:59:59Z",
//                 "id": "2036",
//                 "name": "2036",
//                 "names": {"en": "2036"}
//               },
//               {
//                 "start": "2037-01-01T00:00:00Z",
//                 "end": "2037-12-31T23:59:59Z",
//                 "id": "2037",
//                 "name": "2037",
//                 "names": {"en": "2037"}
//               },
//               {
//                 "start": "2038-01-01T00:00:00Z",
//                 "end": "2038-12-31T23:59:59Z",
//                 "id": "2038",
//                 "name": "2038",
//                 "names": {"en": "2038"}
//               },
//               {
//                 "start": "2039-01-01T00:00:00Z",
//                 "end": "2039-12-31T23:59:59Z",
//                 "id": "2039",
//                 "name": "2039",
//                 "names": {"en": "2039"}
//               },
//               {
//                 "start": "2040-01-01T00:00:00Z",
//                 "end": "2040-12-31T23:59:59Z",
//                 "id": "2040",
//                 "name": "2040",
//                 "names": {"en": "2040"}
//               },
//               {
//                 "start": "2041-01-01T00:00:00Z",
//                 "end": "2041-12-31T23:59:59Z",
//                 "id": "2041",
//                 "name": "2041",
//                 "names": {"en": "2041"}
//               },
//             ],
//           },
//         ],
//       },

//       "attributes": {
//         "dataSet": [
//           {
//             "id": "UNIT_MEASURE",
//             "name": "Unit of Measure",
//             "names": {"en": "Unit of Measure"},
//             "roles": ["UNIT_MEASURE"],
//             "relationship": {"none": {}},
//             "values": [
//               {
//                 "id": "PSNS",
//                 "order": 9,
//                 "name": "Persons",
//                 "names": {"en": "Persons"}
//               }
//             ],
//             "annotations": [10]
//           }
//         ],
//       "series": [],
//         "observation": [
//           {
//             "id": "OBS_STATUS",
//             "name": "Observation Status",
//             "names": {"en": "Observation Status"},
//             "roles": ["OBS_STATUS"],
//             "relationship": {"primaryMeasure": "OBS_VALUE"},
//             "values": []
//           },
//           {
//             "id": "OBS_COMMENT",
//             "name": "Observation Comment",
//             "names": {"en": "Observation Comment"},
//             "roles": ["OBS_COMMENT"],
//             "relationship": {"primaryMeasure": "OBS_VALUE"},
//             "values": []
//           }
//         ]
//     },
//     "annotations": [
//       {
//         "type": "NonProductionDataflow",
//         "text": "true",
//         "texts": {"en": "true"}
//       },
//       {"title": "TIME_PERIOD", "type": "LAYOUT_COLUMN"},
//       {"title": "PROJ_SERIES,AGE", "type": "LAYOUT_ROW"},
//       {"title": "REGION,PERSON_LA", "type": "LAYOUT_ROW_SECTION"},
//       {
//         "title": "REGION=0,AGE=TT+A04+A59+A10+A15+A20+A25+A30+A35+A40+A45+A50+A55+A60+A65+A70+A75+A80+8599,PERSON_LA=16,PROJ_SERIES=1+2+3,FREQUENCY=A,TIME_PERIOD_START=2016",
//         "type": "DEFAULT"
//       },
//       {
//         "type": "EXT_RESOURCE",
//         "text": "Methodology|https://www.abs.gov.au/statistics/people/population/migration-australia/latest-release#methodology|https://www.abs.gov.au/ausstats/wmdata.nsf/activeimages/methodology/$File/methodology.png",
//         "texts": {
//           "en": "Methodology|https://www.abs.gov.au/statistics/people/population/migration-australia/latest-release#methodology|https://www.abs.gov.au/ausstats/wmdata.nsf/activeimages/methodology/$File/methodology.png"
//         }
//       },
//       {"type": "ORDER", "text": "1", "texts": {"en": "1"}},
//       {"type": "ORDER", "text": "157", "texts": {"en": "157"}},
//       {"type": "ORDER", "text": "16", "texts": {"en": "16"}},
//       {"type": "ORDER", "text": "2", "texts": {"en": "2"}},
//       {
//         "type": "CONTEXT",
//         "text": "If a unit multiplier exists the data is recorded according to the combination of the unit multiplier and the unit of measure.",
//         "texts": {
//           "en": "If a unit multiplier exists the data is recorded according to the combination of the unit multiplier and the unit of measure."
//         }
//       }
//     ]
//   }
//   }
// }
