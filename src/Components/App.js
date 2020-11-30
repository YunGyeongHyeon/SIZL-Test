import styled from "styled-components";
import React, { useState } from "react";
import {HashRouter} from "react-router-dom";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import LoginBox from "./MainPage/LoginBox";
import LoginForm from "./LoginAndJoin/LoginForm";
import JoinForm from "./LoginAndJoin/JoinForm";
import UpdateUserForm from "./LoginAndJoin/UpdateUser";
import Routes from "./Routes";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;


const Content = styled.div`
  display:flex;
  width: 80%;
  justify-content: space-between;
  padding:5vh 0;
`;

const Side = styled.div`
  width:20%;
  height:15vh;
  border: 1px solid;
  display:flex;
  align-items:center;
  border-radius:5px;
`;


export default () => {
  
  const [loginForm, setLoginForm] = useState(false);
  const [joinForm, setJoinForm] = useState(false);
  const [updateUserForm, setUpdateUserForm] = useState(false);

  return (
  <Container className="App">
      <GlobalStyles/>
        <Content>
          <HashRouter >
            {loginForm ? 
            <LoginForm 
              joinForm={joinForm} 
              setJoinForm={setJoinForm}
              loginForm={loginForm}
              setLoginForm={setLoginForm}
            />
          :
          ""  
          }{joinForm? 
            <JoinForm 
              joinForm={joinForm} 
              setJoinForm={setJoinForm}
              loginForm={loginForm}
              setLoginForm={setLoginForm}
              updateUserForm={updateUserForm}
              setUpdateUserForm={setUpdateUserForm}
            />
            : ""
          }
          {updateUserForm? 
            <UpdateUserForm 
              joinForm={joinForm} 
              setJoinForm={setJoinForm}
              loginForm={loginForm}
              setLoginForm={setLoginForm}
              updateUserForm={updateUserForm}
              setUpdateUserForm={setUpdateUserForm}
            />
            : ""
          }
            <Side>
              <LoginBox 
                setLoginForm={setLoginForm} 
                loginForm={loginForm}
                updateUserForm={updateUserForm}
                setUpdateUserForm={setUpdateUserForm}
              />
              {/* <SideMenu  /> */}
            </Side>
            <Routes />
           
          </HashRouter>
        </Content>
    </Container>
  );
}
