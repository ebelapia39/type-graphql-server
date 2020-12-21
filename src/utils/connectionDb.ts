import { createConnection } from "typeorm"

export const getConnection = (name: string = 'default') => {
    return createConnection(process.env.NODE_ENV || name )
}