import { IMessage, MessageType } from "src/ipc/types/message/message"

export const reportProgress = (message: string, percentage: number) => {
    const msg: IMessage<{message: string, percentage: number}> = {
        type: MessageType.REPORT_SCRAPING_PROGRESS,
        payload: {
            message,
            percentage
        }
    }
    process.send?.(msg)
}