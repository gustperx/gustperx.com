import type { NextPage, GetStaticProps } from "next";

import { Profile } from "../../types";
import { ClientGraphQL } from "../../lib";
import { PROFILE_QUERY } from "../../graphql";

import { About } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

interface Props {
  profile: {
    user: Profile;
  };
}

const AboutPage: NextPage<Props> = ({ profile: { user } }) => {
  return (
    <MainLayout title="About">
      <About {...user} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const profileData = await ClientGraphQL({
    query: PROFILE_QUERY,
  });

  return {
    props: {
      profile: profileData,
    },
  };
};

export default AboutPage;
