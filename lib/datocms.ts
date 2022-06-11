import { GraphQLClient } from "graphql-request";

interface Request {
  query: string;
  variables?: { [id: string]: string | number };
}

export const ClientGraphQL = ({ query, variables }: Request) => {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
};
