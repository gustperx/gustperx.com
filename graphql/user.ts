import { gql } from "graphql-request";

export const PROFILE_QUERY = gql`
  query UserQuery {
    user {
      title
      subTitle
      shortDescription
      description
      coverImage {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }
`;
