import { IScrapedJob } from "src/jobs/types/ScrapedJob"
import { IMessage, MessageType } from "../message"

export interface IDoneScrapingPayload {
    jobs: IScrapedJob[]
}

export interface IDoneScrapingMessage extends IMessage<IDoneScrapingPayload>{
    type: MessageType.DONE_SCRAPING
}