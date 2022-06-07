import { FC, ReactNode } from "react";
import Head from "next/head";

import { Footer, Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ title = "Home", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <div className="z-20">{children}</div>

      <Footer />
    </>
  );
};
