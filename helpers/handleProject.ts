import {
  PROJECTPAGE_QUERY,
  PROJECTPAGE_SLUG_QUERY,
  PROJECTSPAGE_QUERY,
} from "../graphql";
import { ClientGraphQL } from "../lib";
import { Project, Slug, SlugProjectParams } from "../types";

export const handleProject = () => {
  const allDataGraphQL = () => {
    return ClientGraphQL({
      query: PROJECTSPAGE_QUERY,
      variables: {
        lang: "en",
      },
    });
  };

  const allSlugGraphQL = () => {
    return ClientGraphQL({
      query: PROJECTPAGE_SLUG_QUERY,
    });
  };

  const singleProjectGraphQL = (params: SlugProjectParams) => {
    return ClientGraphQL({
      query: PROJECTPAGE_QUERY,
      variables: params,
    });
  };

  const getSlugs = async () => {
    const data = await allSlugGraphQL();
    return data.allProjects.map((slug: Slug) => ({ params: slug }));
  };

  const getProjects = async () => {
    const data = await allDataGraphQL();
    return orderProjects(data.allProjects);
  };

  const getProject = async (params: SlugProjectParams) => {
    const data = await singleProjectGraphQL(params);
    return data.allProjects[0];
  };

  const orderProjects = (allProjects: Project[]) => {
    return allProjects.sort((a, b) => a.order - b.order);
  };

  return {
    getProjects,
    getSlugs,
    getProject,
  };
};
