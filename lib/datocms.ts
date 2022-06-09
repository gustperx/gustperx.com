import { GraphQLClient } from "graphql-request";

interface Request {
  query: string;
  variables?: string;
  preview?: boolean;
}

export const request = ({ query, variables, preview = false }: Request) => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
};
