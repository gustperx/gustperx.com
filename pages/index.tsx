import type { NextPage, GetStaticProps } from "next";

import { handleProfile, handleWork } from "../helpers";
import { Profile, WorkSingle } from "../types";

import { Hero, About, Work } from "../components/sections";
import { MainLayout } from "../components/layouts";

interface Props {
  works: WorkSingle[];
  profile: {
    user: Profile;
  };
}

const HomePage: NextPage<Props> = ({ works, profile: { user } }) => {
  return (
    <MainLayout title="Home">
      <Hero {...user} />
      <About {...user} />
      <Work works={works} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { getWorks } = handleWork();
  const { getProfile } = handleProfile();

  const [works, profile] = await Promise.all([getWorks(), getProfile()]);

  return {
    props: {
      works,
      profile,
    },
  };
};

export default HomePage;
