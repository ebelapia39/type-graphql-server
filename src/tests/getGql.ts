import { graphql } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import { Container } from "typedi";
import { createSchema } from "../utils/createSchema";

interface Options {
    source: string,
    variableValues?: Maybe<{
        [key: string]: any;
    }>,
    container?: typeof Container
}

export const getGql = async ({ source, variableValues, container }: Options) => {
    return graphql({
        schema: await createSchema(container),
        source,
        variableValues
    })
}