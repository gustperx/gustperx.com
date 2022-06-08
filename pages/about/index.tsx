import type { NextPage } from "next";
import { About } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const AboutPage: NextPage = () => {
  return (
    <MainLayout title="Gustavo Perez | About">
      <About />
    </MainLayout>
  );
};

export default AboutPage;
