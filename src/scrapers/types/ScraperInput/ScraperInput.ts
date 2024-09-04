import { ICheckboxScraperInput } from "src/scrapers/types/ScraperInput/variants/CheckboxScraperInput";
import { IPasswordScraperInput } from "src/scrapers/types/ScraperInput/variants/PasswordScraperInput";
import { ISelectScraperInput } from "src/scrapers/types/ScraperInput/variants/SelectScraperInput";
import { ITextScraperInput } from "src/scrapers/types/ScraperInput/variants/TextScraperInput";

export enum ScraperInputType {
    SELECT = "Select",
    TEXT = "Text",
    PASSWORD = "Password",
    CHECKBOX = "Checkbox"
  }
  
  export interface IScraperInput{
    label: string;
    type: ScraperInputType;
    required?: boolean;
  }


export type ScraperInput = 
    ITextScraperInput | 
    IPasswordScraperInput | 
    ISelectScraperInput | 
    ICheckboxScraperInput