import { IScraperInput,  ScraperInputType } from "src/scrapers/types/ScraperInput/ScraperInput";

export interface ITextScraperInput extends IScraperInput {
    type: ScraperInputType.TEXT
}