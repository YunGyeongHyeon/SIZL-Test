import { gql } from "apollo-boost";

export const FIND_USER = gql`
    query findUser{
        findUser{
            username
            gender
            email
            nickname
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUserInfo(
        $username:String, 
        $gender:String, 
        $email:String,
        $password:String,
        $nickname:String
    ){
        updateUserInfo(
            username: $username
            gender: $gender
            email: $email
            password: $password
            nickname: $nickname
        )
    }
`;