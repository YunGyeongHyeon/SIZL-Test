import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    height: 90vh;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius:5px;
    padding:10px;
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

const CreatePost = styled.button`
    background:none;
    border-radius:5px;

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
    align-items:center;
    margin:10px 0;
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
    font-size:1.2em;
    width:5%;
    display:flex;
    justify-content:center;
    border-left:1px solid lightgrey;
    border-right:1px solid lightgrey;
`;

const RecitalTitle = styled.span`
    font-size:1.2em;
    width:70%;
    display:flex;
    justify-content:center;
`;

const PostTitle = styled.span`
    font-size:1.2em;
    width:70%;
`;

const Writer = styled.span`
    font-size:1.2em;
    width:15%;
    display:flex;
    justify-content:center;
`;

const PagingBox = styled.div`

`;

export default ({allPostData, loginInfo}) => (
    <Container >
        <BoardHeader>
            <Title>
                자유게시판 
            </Title>
            {loginInfo.findUser.email ? 
                <CreatePost onClick={()=>{}}>
                    <Link to="/createPost"
                          style={{
                                color: "inherit",
                                textDecoration: "inherit"
                    }}>
                            글작성
                    </Link>
                </CreatePost> : 
                <CreatePost onClick={()=>{
                    alert("로그인이 필요합니다.");
                }}>
                    글작성
                </CreatePost>
            }
        </BoardHeader>
        <PostList>
            <Recital>
                <PostNumber>No</PostNumber>
                <RecitalTitle>제목</RecitalTitle>
                <Writer>작성자</Writer>
            </Recital>
            <UnderLine />
            {allPostData.map((onePost,index)=>(
                <OnePost key={"Post"+index}>
                    <PostNumber>{index+1}</PostNumber>
                    <PostTitle >
                        <Link to={"/post/"+onePost.id} 
                              style={{
                                color: "inherit",
                                textDecoration: "inherit"
                                }}>
                            {onePost.title}
                        </Link>
                    </PostTitle>
                    <Writer>{onePost.username.nickname}</Writer>
                </OnePost>
            ))}
        </PostList>
    </Container>
);