import { getConnection } from '../utils/connectionDb'

getConnection('test').then(() => process.exit())