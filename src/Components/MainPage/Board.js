import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    height: 90vh;
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
    flex-direction:column;
    height:85%;
`;

const OnePost = styled.div`
    display:flex;
    justify-content:space-around;
    width: 100%;
    height:5%;
    border-bottom:1px solid;
`;

const Recital = styled.div`
    display:flex;
    justify-content:space-around;
    width: 100%;
    height:5%;
`;

const UnderLine = styled.hr`
    width:100%;
`;

const PostNumber = styled.span`
    font-size:0.7em;
    width:5%;
    display:flex;
    justify-content:center;
`;

const PostTitle = styled.span`
    font-size:0.7em;
    width:70%;
    display:flex;
    justify-content:center;

`;

const Writer = styled.span`
    font-size:0.7em;
    width:15%;
    display:flex;
    justify-content:center;

`;

const PagingBox = styled.div`

`;

export default () => (
    <Container >
        <BoardHeader>
            <Title>
                자유게시판
            </Title>
        </BoardHeader>
        <PostList>
            <Recital>
                <PostNumber>No</PostNumber>
                <PostTitle>제목</PostTitle>
                <Writer>작성자</Writer>
            </Recital>
            <UnderLine />
            <OnePost>
                <PostNumber>01</PostNumber>
                <PostTitle>테스트</PostTitle>
                <Writer>abc</Writer>
            </OnePost>
        </PostList>
        <PagingBox>
            123468
        </PagingBox>
    </Container>
);