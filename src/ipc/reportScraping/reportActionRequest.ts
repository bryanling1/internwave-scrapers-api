import { MessageType } from "src/ipc/types/message/message"
import { IReportScrapingActionRequestMessage } from "src/ipc/types/message/variants/ReportScrapingMessage/variants/ReportScrapingActionRequestMessage"

export const reportActionRequest = (message: string, percentage?: number) => {
    const msg: IReportScrapingActionRequestMessage = {
        type: MessageType.REPORT_SCRAPING_ACTION_REQUEST,
        payload: {
            message,
            percentage
        }
    }
    process.send?.(msg)
}