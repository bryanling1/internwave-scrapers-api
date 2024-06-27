export enum ScraperOptionType {
    SELECT = "Select",
    TEXT = "Text",
    PASSWORD = "Password",
  }
  
  export interface IScraperOption {
    label: string;
    type: string;
    selectOptions?: string[];
  }
  