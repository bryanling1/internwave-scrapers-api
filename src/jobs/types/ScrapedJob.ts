import { ILocation } from "./Location";
import { IDates } from "./Dates";
import { ICompany } from "./Company";
import { ICategorizations } from "./Categorizations";
import { ICharts } from "./Charts";
import { IDescription } from "./Descriptions";
import { IScrapedJobSalaries } from "./Salary";

export interface IScrapedJob {
  id: string;
  //header widgets
  url?: string;
  jobType?: string;
  company: ICompany;
  jobTitle: string;
  openings?: number;
  location: ILocation;
  dates: IDates;
  applications?: number;
  //body widgets
  categorizations: ICategorizations;
  descriptions: IDescription[];
  charts: ICharts;
  salaries?: IScrapedJobSalaries;
}
