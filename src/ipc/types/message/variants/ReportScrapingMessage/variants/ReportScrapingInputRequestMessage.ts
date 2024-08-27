import { IMessage, MessageType } from "../../../message"

interface IReportScrapingInputRequestPayload {
    percentage?: number
    
}

export interface IReportScrapingInputRequestMessage extends IMessage<IReportScrapingInputRequestPayload>{
    type: MessageType.REPORT_SCRAPING_INPUT_REQUEST
}
