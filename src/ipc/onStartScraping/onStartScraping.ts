import { reportDone } from "src/ipc/reportScraping/reportDone";
import { IStartScrapingMessage, IStartScrapingPayload } from "src/ipc/types/message/variants/StartScrapingMessage";
import { IScrapedJob } from "src/jobs/types/ScrapedJob";
import { reportError } from "src/ipc/reportScraping/reportError";


export const onStartScraping = (
    callback:(payload: IStartScrapingPayload) => Promise<IScrapedJob[] | void>
) => {
    process.on("message", async (message: IStartScrapingMessage) => {
        try{
            const jobs = await callback(message.payload);
            if(jobs){
                reportDone(jobs)
            }
        }catch(e){
            if(e instanceof Error){
                reportError(e.message)
            }else if(typeof e === "string"){
                reportError(e)
            }
        }
        
    })
} 
