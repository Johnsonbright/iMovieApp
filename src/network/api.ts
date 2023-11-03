import { network } from "../config";
import { Character } from "../typings/store";
import reportError from "../utils/reportError";




export const getCharacters = async (page:number) => {
try {
    const data = await network.get(`character?page=${page}`)
    return data?.data
} catch (error) {
    reportError(error as Error)
    return error
    
}     
}
