// This types file provides the types of the API Response for the ABS INDICATOR API Key
export interface ApiResponse {
    header: Header;
    dataSets: DataSet[];
    structure: Structure;
  }

  export interface Header {
    id: string;
    prepared: string;
    test: boolean;
    sender: Sender;
  }

  export interface Sender {
    id: string;
    name: string;
  }

  export interface DataSet {
    action: string;
    series: { [key: string]: SeriesData };
  }

  export interface SeriesData {
    attributes: number[];
    annotations: any[];
    observations: { [key: string]: number[] };
  }

  export interface Structure {
    name: string;
    description: string;
    dimensions: Dimension;
    attributes: Attributes;
    annotations: any[];
  }

  export interface Dimension {
    dataset: any[];
    series: DimensionDetail[];
    observation: DimensionDetail[];
  }

  export interface DimensionDetail {
    id: string;
    name: string;
    keyPosition: number;
    role: string;
    values: Value[];
  }

  export interface Value {
    id: string;
    name: string;
    start?: string;
    end?: string;
  }

  export interface Attributes {
    dataSet: any[];
    series: AttributeDetail[];
    observation: AttributeDetail[];
  }

  export interface AttributeDetail {
    id: string;
    name: string;
    role: string;
    values: ValueDetail[];
  }

  export interface ValueDetail {
    id: string;
    name: string;
  }
