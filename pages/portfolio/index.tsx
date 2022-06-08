import type { NextPage } from "next";
import { Portfolio } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const PortfolioPage: NextPage = () => {
  return (
    <MainLayout title="Gustavo Perez | Projects">
      <Portfolio />
    </MainLayout>
  );
};

export default PortfolioPage;
