import { IMessage, MessageType } from "../../../message"

interface IReportScrapingErrorPayload {
    message: string
}

export interface IReportScrapingErrorMessage extends IMessage<IReportScrapingErrorPayload>{
    type: MessageType.REPORT_SCRAPING_ERROR
}