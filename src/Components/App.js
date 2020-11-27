import styled from "styled-components";
import React, { useState } from "react";
import {HashRouter} from "react-router-dom";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import LoginBox from "./MainPage/LoginBox";
import SideMenu from "./MainPage/SideMenu";
import Board from "./MainPage/Board";
import LoginForm from "./LoginAndJoin/LoginForm";
import JoinForm from "./LoginAndJoin/JoinForm";

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
`;


export default () => {
  
  const [loginForm, setLoginForm] = useState(false);
  const [joinForm, setJoinForm] = useState(false);
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
            />
            : ""
          }
            <Side>
          
              <LoginBox setLoginForm={setLoginForm} loginForm={loginForm}/>
           
              {/* <SideMenu  /> */}
            </Side>
            <Board />
          </HashRouter>
        </Content>
    </Container>
  );
}
