export enum ChartType {
  PIE,
}

export interface IChartData {
  title: string;
  data: { [key: string]: number };
  type: ChartType;
}

export interface IChartDataWithKey extends IChartData {
  key: string;
}

export type ICharts = { [key: string]: IChartData };
