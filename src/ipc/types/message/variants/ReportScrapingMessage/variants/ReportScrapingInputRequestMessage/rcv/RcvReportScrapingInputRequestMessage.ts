import { ScraperInput } from "src/scrapers/types/ScraperInput/ScraperInput"
import { IMessage, MessageType } from "../../../../../message"

interface IRcvReportScrapingInputRequestPayload {
    percentage?: number
    inputs: ScraperInput[]
}

export interface IRcvReportScrapingInputRequestMessage extends IMessage<IRcvReportScrapingInputRequestPayload>{
    type: MessageType.RCV_REPORT_SCRAPING_INPUT_REQUEST
}
