import { PROFILE_QUERY } from "../graphql";
import { ClientGraphQL } from "../lib";

export const handleProfile = () => {
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
    getProfile,
  };
};
