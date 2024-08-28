import { ReportingScrapingMessage } from "src/ipc/types/message/variants/ReportScrapingMessage/ReportScrapingMessage";
import { SendScrapingMessage } from "src/ipc/types/message/variants/ReportScrapingMessage/SendScrapingMessage";

export const messageApp = async <T>(
    handleResponse: (
        message: SendScrapingMessage,
        resolve: (data:T) => void,
        reject: (reason?: Error) => void
    ) => void,
    initMessage: ReportingScrapingMessage
) => {
    return new Promise<T>((resolve, reject) => {
        if(!process.send){
            reject(new Error('No IPC channel available'));
            return;
        }

        const messageHandler = (message: SendScrapingMessage) => {
            process.off('message', messageHandler);
            handleResponse(message, resolve, reject);
        };

        process.on('message', messageHandler);
        process.send(initMessage)
    })
}