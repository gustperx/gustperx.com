import type { NextPage } from "next";
import { Hero, About, Work } from "../components/sections";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout title="Gustavo Perez | Home">
      <Hero />
      <About />
      <Work />
    </MainLayout>
  );
};

export default Home;
