import { ScraperInput } from "src/scrapers/types/ScraperInput/ScraperInput"
import { IMessage, MessageType } from "../../../../../message"

interface ISendReportScrapingInputRequestPayload {
    values: string[]
}

export interface ISendReportScrapingInputRequestMessage extends IMessage<ISendReportScrapingInputRequestPayload>{
    type: MessageType.SEND_REPORT_SCRAPING_INPUT_REQUEST
}
