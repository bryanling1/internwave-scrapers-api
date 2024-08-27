import { IScraperInput, ScraperInputType } from "src/scrapers/types/ScraperInput/ScraperInput";

export interface ISelectScraperInput extends IScraperInput {
    type: ScraperInputType.SELECT;
    selectOptions: string[];
}