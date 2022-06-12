import { FC, ReactNode } from "react";
import Head from "next/head";

import { userLinks } from "../../lib";
import { Footer, Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ title = "Home", children }) => {
  return (
    <>
      <Head>
        <title>{`Gustavo Perez | ${title}`}</title>

        <link rel="shortcut icon" href={userLinks.seo.favicon} />

        <meta name="author" content={userLinks.seo.author} />
        <meta name="description" content={userLinks.seo.description} />
        <meta name="keyworks" content={userLinks.seo.keyworks} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={userLinks.seo.title} />
        <meta name="twitter:description" content={userLinks.seo.description} />
        <meta name="twitter:image" content={userLinks.seo.image}></meta>

        <meta property="og:title" content={userLinks.seo.title} />
        <meta property="og:description" content={userLinks.seo.description} />
        <meta property="og:image" content={userLinks.seo.image} />
      </Head>

      <Navbar />

      <div className="z-20">{children}</div>

      <Footer />
    </>
  );
};
