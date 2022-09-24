import connection from "../connection"
import { purchase } from "../type"


export const getUserById = async(id: string) : Promise <purchase[]> => {

    const user  = await connection("labecommerce_users").select().where({id: id})
        
    return user[0]
}