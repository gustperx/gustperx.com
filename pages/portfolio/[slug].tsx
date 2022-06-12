import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { handleProject } from "../../helpers";
import { SingleProject, SlugProjectParams } from "../../types";

import { MainLayout } from "../../components/layouts";
import {
  Presentation,
  Technologies,
  SectionImage,
  SocialProject,
} from "../../components/ui";

const ProjectPage: NextPage<SingleProject> = ({
  project: {
    title,
    description,
    shortDescription,
    coverImage,
    technologies,
    github,
    webSite,
  },
}) => {
  return (
    <MainLayout title={title}>
      <div className="hero h-80 bg-base-200">
        <div className="hero-content text-center">
          <div>
            <Presentation title={title} shortDescription={shortDescription} />
            <div className="flex justify-center mt-6">
              <SocialProject github={github} webSite={webSite} />
            </div>
          </div>
        </div>
      </div>
      <div className="hero my-8 bg-base-100">
        <div className="hero-content">
          <div>
            <p className="py-6 font-mono text-lg">{description}</p>
            <Technologies technologies={technologies} />
          </div>
        </div>
      </div>

      {coverImage && <SectionImage coverImage={coverImage} />}
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { getSlugs } = handleProject();
  return {
    paths: await getSlugs(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getProject } = handleProject();
  return {
    props: {
      project: await getProject(params as SlugProjectParams),
    },
  };
};

export default ProjectPage;
