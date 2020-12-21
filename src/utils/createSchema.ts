import path from 'path'
import { buildSchema, BuildSchemaOptions } from "type-graphql";
import { Container } from "typedi";
import { useContainer } from 'typeorm';

useContainer(Container);

export const createSchema = () => {
    const schemaOption: BuildSchemaOptions = {
        resolvers: [path.join(__dirname, '../resolvers/**/*.resolver.{ts,js}')],
        container: Container
    }

    return buildSchema(schemaOption);
}
