import type { NextPage } from "next";
import { Hero, About } from "../components/home";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />

      <About />
    </MainLayout>
  );
};

export default Home;
