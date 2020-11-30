import { gql } from "apollo-boost";

export const CREATE_POST = gql`
    mutation createPost($title:String!, $content:String!){
        createPost(
            title:$title,
            content:$content
        )
    }
`;