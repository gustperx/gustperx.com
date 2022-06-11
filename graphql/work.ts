import { gql } from "graphql-request";

export const WORKSPAGE_QUERY = gql`
  query QueryAllWorks($lang: SiteLocale) {
    allWorks(locale: $lang) {
      title
      order
      period
      slug
      shortDescription
    }
  }
`;

export const WORKPAGE_SLUG_QUERY = gql`
  query WorkSlugQuery {
    allWorks {
      slug
    }
  }
`;

export const WORKPAGE_QUERY = gql`
  query WorkQuery($slug: String) {
    allWorks(filter: { slug: { eq: $slug } }) {
      title
      shortDescription
      description
      period
      slug
      order
      technologies {
        name
      }
    }
  }
`;
