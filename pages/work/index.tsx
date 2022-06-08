import type { NextPage } from "next";
import { Work } from "../../components/sections";
import { MainLayout } from "../../components/layouts";

const WorkPage: NextPage = () => {
  return (
    <MainLayout title="Gustavo Perez | Work">
      <Work />
    </MainLayout>
  );
};

export default WorkPage;
