export interface IScrapedSalary {
    amount: string;
    currency?: string;
    period?: string;
  
}
export interface IScrapedJobSalaries {
    salary?: IScrapedSalary;
    salaryMin?: IScrapedSalary;
    salaryMax?: IScrapedSalary;
    coop1Salary?: IScrapedSalary;
    coop2Salary?: IScrapedSalary;
    coop3Salary?: IScrapedSalary;
    coop4Salary?: IScrapedSalary;
    coop5Salary?: IScrapedSalary;
    coop6Salary?: IScrapedSalary;
    coop7PlusSalary?: IScrapedSalary;
}
