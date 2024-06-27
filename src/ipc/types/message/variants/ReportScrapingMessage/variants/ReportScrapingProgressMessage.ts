import { IMessage, MessageType } from "../../../message"

interface IReportScrapingProgressMessagePayload {
    message: string
    percentage: number
}

export interface IReportScrapingProgressMessage extends IMessage<IReportScrapingProgressMessagePayload>{
    type: MessageType.REPORT_SCRAPING_PROGRESS
}