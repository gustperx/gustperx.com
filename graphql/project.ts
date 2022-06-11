import { gql } from "graphql-request";

export const PROJECTSPAGE_QUERY = gql`
  query QueryAllProjects($lang: SiteLocale) {
    allProjects(locale: $lang) {
      title
      shortDescription
      description
      slug
      order
      isFeatured
      technologies {
        name
      }
      github
      webSite
      coverImage {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
    }
  }
`;

export const PROJECTPAGE_SLUG_QUERY = gql`
  query ProjectSlugQuery {
    allProjects {
      slug
    }
  }
`;

export const PROJECTPAGE_QUERY = gql`
  query WorkQuery($slug: String) {
    allProjects(filter: { slug: { eq: $slug } }) {
      title
      shortDescription
      description
      slug
      order
      isFeatured
      webSite
      github
      technologies {
        name
      }
      coverImage {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
    }
  }
`;
