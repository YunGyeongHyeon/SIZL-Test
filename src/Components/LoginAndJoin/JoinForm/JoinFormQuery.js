import { gql } from "apollo-boost";

export const CREATE_USER = gql`
    mutation createAccount(
        $username: String!,
        $gender: String!,
        $email: String!,
        $password: String!,
        $nickname: String
        ){
            createAccount(
                username: $username
                gender: $gender
                email: $email
                password: $password
                nickname: $nickname
                
            )
        }
`;  

export const OVERLAP_USER = gql`
    query overlapUser($email: String!){
        overlapUser(email:$email)
    }
`;