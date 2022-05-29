import { GraphQLClient } from 'graphql-request';

const endpointUrl = 'https://api.geographql.rudio.dev/graphql';

export const client = new GraphQLClient(endpointUrl);

export default {
  client,
};
