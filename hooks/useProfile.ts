import { PROFILE_QUERY } from "../graphql";
import { ClientGraphQL } from "../lib";

export const useProfile = () => {
  const allDataGraphQL = () => {
    return ClientGraphQL({
      query: PROFILE_QUERY,
    });
  };

  const getProfile = async () => {
    const profile = await allDataGraphQL();
    return profile;
  };

  return {
    allDataGraphQL,
    getProfile,
  };
};
