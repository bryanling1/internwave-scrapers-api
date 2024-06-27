import { reportDone } from "src/ipc/reportScraping/reportDone";
import { IStartScrapingMessage, IStartScrapingPayload } from "src/ipc/types/message/variants/StartScrapingMessage";
import { IScrapedJob } from "src/jobs/types/ScrapedJob";


export const onStartScraping = (
    callback:(payload: IStartScrapingPayload) => IScrapedJob[]
) => {
    process.on("message", (message: IStartScrapingMessage) => {
        const jobs = callback(message.payload);
        reportDone(jobs)
    })
} 
