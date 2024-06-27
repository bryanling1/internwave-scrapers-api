import { MessageType } from "src/ipc/types/message/message"
import { IDoneScrapingMessage } from "src/ipc/types/message/variants/DoneScrapingMessage"
import { IScrapedJob } from "src/jobs/types/ScrapedJob"

export const reportDone = (jobs: IScrapedJob[]) => {
    const msg: IDoneScrapingMessage = {
        type: MessageType. DONE_SCRAPING,
        payload: {
            jobs
        }
    }
    process.send?.(msg)
}