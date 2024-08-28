import { MessageType } from "src/ipc/types/message/message"
import { IRcvReportScrapingInputRequestMessage } from "src/ipc/types/message/variants/ReportScrapingMessage/variants/ReportScrapingInputRequestMessage/rcv/RcvReportScrapingInputRequestMessage"
import { messageApp } from "src/ipc/utils/messageApp"
import { ScraperInput } from "src/scrapers/types/ScraperInput/ScraperInput"

export const requestInput = async(
    inputs: ScraperInput[]
):Promise<string[]> => {
    const initMsg: IRcvReportScrapingInputRequestMessage = {
        type: MessageType.RCV_REPORT_SCRAPING_INPUT_REQUEST,
        payload: {
            inputs
        }
    }

    return messageApp(
        (message, resolve, reject) => {
            if(message.type === MessageType.SEND_REPORT_SCRAPING_INPUT_REQUEST){
                resolve(message.payload.values);
            }else{
                reject(new Error('Unexpected message type'));
            }
        },
        initMsg
    )
}