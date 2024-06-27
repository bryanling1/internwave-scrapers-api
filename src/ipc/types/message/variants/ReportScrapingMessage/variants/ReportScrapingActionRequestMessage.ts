import { IMessage, MessageType } from "../../../message"

interface IReportScrapingActionRequestPayload {
    message: string
    percentage?: number
}

export interface IReportScrapingActionRequestMessage extends IMessage<IReportScrapingActionRequestPayload>{
    type: MessageType.REPORT_SCRAPING_ACTION_REQUEST
}
