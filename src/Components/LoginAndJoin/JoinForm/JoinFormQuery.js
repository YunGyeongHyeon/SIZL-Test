import { gql } from "apollo-boost";

export const CREATE_USER = gql`
    mutation createAccount(
        $username: String!,
        $gender: String!,
        $email: String!,
        $password: String!
        ){
            createAccount(
                username: $username
                gender: $gender
                email: $email
                password: $password
                
            )
        }
`;  

export const OVERLAP_USER = gql`
    query overlapUser($email: String!){
        overlapUser(email:$email)
    }
`;