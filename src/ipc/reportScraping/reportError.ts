import { MessageType } from "src/ipc/types/message/message"
import { IReportScrapingErrorMessage } from "src/ipc/types/message/variants/ReportScrapingMessage/variants/ReportScrapingErrorMessage"


export const reportError = (message: string) =>{
    const msg: IReportScrapingErrorMessage = {
        type: MessageType.REPORT_SCRAPING_ERROR,
        payload: {
            message
        }
    }
    process.send?.(msg)
}