import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    height: 100px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const BoardHeader = styled.div`
    width: 80%;
    display:flex;
    justify-content: space-between;
    margin: 2% 0;
`;

const Title = styled.div`
    font-size:1.5em;
    font-weight:bold;
`;

const Serchbar = styled.div`
    display:flex;
`;

const PostList = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;

const OnePost = styled.div`
    display:flex;
    justify-content:space-between;
    width: 90%;
`;

const PostNumber = styled.span``;

const PostTitle = styled.span``;

const Writer = styled.span``;

export default () => (
    <Container >
        <BoardHeader>
            <Title>
                자유게시판
            </Title>
            <Serchbar>
                검색
                <input type="text"/>
            </Serchbar>
        </BoardHeader>
        <PostList>
            <OnePost>
                <PostNumber>PostNumber</PostNumber>
                <PostTitle>PostTitle</PostTitle>
                <Writer>Writer</Writer>
            </OnePost>
        </PostList>
    </Container>
);