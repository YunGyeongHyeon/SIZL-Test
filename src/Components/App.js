import styled from "styled-components";
import React from "react";
import {HashRouter} from "react-router-dom";
import Header from "./Header";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import SideMenu from "./SideMenu";
import Board from "./Board";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const Content = styled.div`
  display:flex;
  width: 80%;
  justify-content: space-between;
`;

export default () => (
    <Container className="App">
      <GlobalStyles/>
        <Header />
        <Content>
          <HashRouter >
            <SideMenu />
            <Board />
          </HashRouter>
        </Content>
    </Container>
  );

