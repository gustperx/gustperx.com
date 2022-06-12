import type { NextPage, GetStaticProps } from "next";

import { Profile } from "../../types";
import { handleProfile } from "../../helpers";

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
  const { getProfile } = handleProfile();
  return {
    props: {
      profile: await getProfile(),
    },
  };
};

export default AboutPage;
