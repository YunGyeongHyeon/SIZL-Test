import { gql } from "apollo-boost";

export const UPDATE_POST = gql`
    mutation updatePost($id:String!,$title:String!, $content:String!){
        updatePost(id:$id,title:$title,content:$content)
    }
`;
