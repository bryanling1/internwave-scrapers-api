import { IScraperInput,  ScraperInputType } from "src/scrapers/types/ScraperInput/ScraperInput";

export interface ICheckboxScraperInput extends IScraperInput {
    type: ScraperInputType.CHECKBOX,
    initialValue?: boolean
}