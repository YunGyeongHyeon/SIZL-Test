import { gql } from "apollo-boost";

export const ALL_POST = gql`
    query allPost{
        allPost{
            id
            title
            username{
                id
                username
                email
                nickname
            }
            content

        }
    }
`;