import { gql } from "apollo-boost";

export const SEARCH_POST = gql`
    query searchPost($postId:String!){
        searchPost(
            postId:$postId
        ){
            id
            title
            content
            username{
                email
                nickname
            }
            comments{
                user{
                    email
                    nickname
                }
                text
            }

        }
    }
`;

export const UPLOAD_COMMENT = gql`
      mutation uploadComment($postId:String!, $commentContent: String!){
        uploadComment(
            postId:$postId,
            commentContent:$commentContent
        )
    }
`;


