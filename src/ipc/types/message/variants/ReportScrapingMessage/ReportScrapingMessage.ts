import { IDoneScrapingMessage } from "src/ipc/types/message/variants/DoneScrapingMessage";
import { IReportScrapingActionRequestMessage } from "./variants/ReportScrapingActionRequestMessage";
import { IReportScrapingErrorMessage } from "./variants/ReportScrapingErrorMessage";
import { IReportScrapingProgressMessage } from "./variants/ReportScrapingProgressMessage";

export type ReportingScrapingMessage = IReportScrapingErrorMessage | IReportScrapingActionRequestMessage | IReportScrapingProgressMessage | IDoneScrapingMessage
