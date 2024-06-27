import { IMessage, MessageType } from "../message"

export interface IStartScrapingPayload {
    optionValues: string[]
}

export interface IStartScrapingMessage extends IMessage<IStartScrapingPayload>{
    type: MessageType.START_SCRAPING
}