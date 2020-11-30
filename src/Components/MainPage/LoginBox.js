import styled from "styled-components";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { FIND_USER } from "../LoginAndJoin/UpdateUser/UpdateUserQuery";

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin:5% 10%;
`;

const ButtonBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;

`;

const LoginButton = styled.button`
    width:60%;
    height:2em;
    border:1px solid;
    border-radius:3px;
    margin-bottom:10px;
    font-size:1.5em;
    font-weight:500;
    background: none;
`;

const LogoutButton = styled.button`
    width:40%;
    height:2.5em;
    border:1px solid;
    margin-bottom:10px;
    font-size:0.5em;
    font-weight:500;
    background: none;
    border-radius:5px;
`;

const UpdateUserButton = styled.button`
    width:40%;
    height:2.5em;
    border:1px solid;
    margin-bottom:10px;
    font-size:0.5em;
    font-weight:500;
    background: none;
    border-radius:5px;
`;

const UserEmail = styled.div`
    
`;


export default ({
    loginForm, 
    setLoginForm,
    updateUserForm,
    setUpdateUserForm
}) => {
    let nickName = "";
    const {data, loading, error}= useQuery(FIND_USER);
    if(!loading){
        nickName = data.findUser.nickname;
    }
    return(<Container>
        {localStorage.getItem("userEmailToken") ? 
        <>
            <UserEmail>
                {nickName}님
            </UserEmail>
            <ButtonBox>
                <LogoutButton onClick={async()=>{
                    localStorage.removeItem("userEmailToken");
                    localStorage.removeItem("token");
                    window.location.reload();
                }}>
                    로그아웃
                </LogoutButton>
                <UpdateUserButton onClick={()=>{
                    setUpdateUserForm(!updateUserForm);
                }}>
                    정보 수정
                </UpdateUserButton>
            </ButtonBox>
        </>
         : 
        <LoginButton onClick={async()=>{
            await setLoginForm(!loginForm);
        }}>
            로그인
        </LoginButton>
        }
    </Container>)
};