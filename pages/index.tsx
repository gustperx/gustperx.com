import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div
        style={{
          height: "calc(100vh - 50px)",
          width: "100%",
          backgroundImage: "url('http://localhost:3000/img/base_1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      >
        <div> Hello </div>
      </div>
    </MainLayout>
  );
};

export default Home;
