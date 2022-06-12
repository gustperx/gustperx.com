import {
  WORKPAGE_QUERY,
  WORKPAGE_SLUG_QUERY,
  WORKSPAGE_QUERY,
} from "../graphql";
import { ClientGraphQL } from "../lib";
import { Slug, WorkSingle, SlugWorkParams } from "../types";

export const useWork = () => {
  const allDataGraphQL = () => {
    return ClientGraphQL({
      query: WORKSPAGE_QUERY,
      variables: {
        lang: "en",
      },
    });
  };

  const allSlugGraphQL = () => {
    return ClientGraphQL({
      query: WORKPAGE_SLUG_QUERY,
    });
  };

  const singleWorkGraphQL = (params: SlugWorkParams) => {
    return ClientGraphQL({
      query: WORKPAGE_QUERY,
      variables: params,
    });
  };

  const getSlugs = async () => {
    const data = await allSlugGraphQL();
    return data.allWorks.map((slug: Slug) => ({ params: slug }));
  };

  const getWorks = async () => {
    const data = await allDataGraphQL();
    return orderWorks(data.allWorks);
  };

  const getWork = async (params: SlugWorkParams) => {
    const data = await singleWorkGraphQL(params);
    return data.allWorks[0];
  };

  const orderWorks = (allWorks: WorkSingle[]) => {
    return allWorks.sort((a, b) => a.order - b.order);
  };

  return {
    allDataGraphQL,
    getWorks,
    getSlugs,
    getWork,
    orderWorks,
  };
};
