// This types file provides the types of the API Response for the ABS DATA API Key
export interface DataApiTypes {
    meta: {
      schema: string;
      id: string;
      prepared: string;
      test: boolean;
      contentLanguages: string[];
      sender: {
        id: string;
        name: string;
        names: {
          [key: string]: string;
        };
      };
    };
    data: {
      dataSets: Array<{
        action: string;
        links: Array<{
          urn: string;
          rel: string;
        }>;
        annotations: number[];
        attributes: number[];
        series: {
          [key: string]: {
            attributes: any[];
            annotations: any[];
            observations: {
              [key: string]: [number];
            };
          };
        };
      }>;
      structure: {
        name: string;
        description: string;
        names: {
          [key: string]: string;
        };
        descriptions: {
          [key: string]: string;
        };
        dimensions: {
          dataset: any[];
          series: Array<{
            id: string;
            name: string;
            names: {
              [key: string]: string;
            };
            keyPosition: number;
            roles: string[];
            values: Array<{
              id: string;
              order: number;
              name: string;
              names: {
                [key: string]: string;
              };
              annotations?: number[];
            }>;
          }>;
          observation: Array<{
            id: string;
            name: string;
            names: {
              [key: string]: string;
            };
            keyPosition: number;
            roles: string[];
            values: Array<{
              start?: string;
              end?: string;
              id: string;
              name: string;
              names: {
                [key: string]: string;
              };
            }>;
          }>;
        };
        attributes: {
          dataSet: Array<{
            id: string;
            name: string;
            names: {
              [key: string]: string;
            };
            roles: {
              [key: string]: any;
            };
            relationship: {
              none?: any;
            };
            values: Array<{
              id: string;
              order: number;
              name: string;
              names: {
                [key: string]: string;
              };
            }>;
            annotations?: any[];
          }>;
          series: any[];
          observation: Array<{
            id: string;
            name: string;
            names: {
              [key: string]: string;
            };
            roles: {
              [key: string]: any;
            };
            values: any[];
          }>;
        };
        annotations: Array<{
          type: string;
          text: string;
          texts: {
            [key: string]: string;
          };
          title?: string;
        }>;
      };
    };
  };