import { reportDone } from "src/ipc/reportScraping/reportDone";
import { IStartScrapingMessage, IStartScrapingPayload } from "src/ipc/types/message/variants/StartScrapingMessage";
import { IScrapedJob } from "src/jobs/types/ScrapedJob";


export const onStartScraping = (
    callback:(payload: IStartScrapingPayload) => Promise<IScrapedJob[]>
) => {
    process.on("message", async (message: IStartScrapingMessage) => {
        const jobs = await callback(message.payload);
        reportDone(jobs)
    })
} 
