import { IScraperInput, ScraperInputType } from "src/scrapers/types/ScraperInput/ScraperInput";

export interface IPasswordScraperInput extends IScraperInput {
    type: ScraperInputType.PASSWORD
}