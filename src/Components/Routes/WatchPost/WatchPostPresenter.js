import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    min-height: 90vh;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    /* padding:30px; */
    border-radius:5px;
    padding:10px;
`;



const PostBox = styled.div`
    width:100%;
`;

const TitleBox = styled.div`
    display:flex;
    justify-content:space-between;
`

const ModifyButton = styled.button`
    background:none;
    border-radius:5px;
`


const Title = styled.div`
    font-size:1.5em;
    margin-bottom:10px;
`;

const AdditionBox = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px 0;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
`;

const Wirter = styled.div`
    font-size:0.8em;
`;
const Content = styled.div`
    min-height:50vh;
    margin-top:10px;
`;
const CommentBox = styled.div`
    display:flex;  
    flex-direction:column;
    border-top: 1px solid;
`;
const CommentInputBox = styled.div`
    display:flex;
    height:100%;
    margin: 5px 0 20px  0;
`;

const UserEmail = styled.div`
    margin:0.5em 0 0 0;
`;

const CommentInput = styled.input.attrs({type:"text"})`
    width:90%;
    height:70px;
`;

const CommentInputButton = styled.button`
    width:10%;
    background:none;
`;

const CommentsBox = styled.div``;

const OneComment = styled.div`
    border-top:1px solid;
    margin-top:1.5em;
`;
const OneCommentWriter = styled.div`
    margin:0.5em 0;
`;
const OneCommentText = styled.div`
    margin-left:10px;
`;

const ButtonBox = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`;

const ListButton = styled.button`
    width:5em;
    background:none;
    border-radius:3px;
`;


export default ({
    PostData,
    InputTextComment,
    commentSubmit ,
    loginInfo,
    loginInfoLoading
}) => {
    return (
        <Container>
            <PostBox>
                <TitleBox>
                    <Title>{PostData.title}</Title>
                    {loginInfo.findUser.email === PostData.username.email ? 
                        <ModifyButton>
                            <Link to={"/updatePost/"+PostData.id}
                                style={{
                                    color: "inherit",
                                    textDecoration: "inherit"
                                    }}>
                                수정
                            </Link>
                        </ModifyButton> 
                    : ""}
                </TitleBox>
                <AdditionBox>
                    <Wirter>{PostData.username.nickname}</Wirter>
                </AdditionBox>
                <Content>{PostData.content}</Content>
            </PostBox>
            <CommentBox>
                <UserEmail>{loginInfo.findUser.nickname}:</UserEmail>
                <CommentInputBox>
                    {localStorage.getItem("userEmailToken") ? 
                        <CommentInput placeholder="댓글을 입력해주세요." {...InputTextComment}/>
                        :
                        <CommentInput placeholder="로그인이 필요합니다." readOnly />
                    }
                    <CommentInputButton 
                        onClick={()=>{
                            if(loginInfo.findUser.username.length){
                                if(InputTextComment.value <= 0){
                                    alert("댓글을 입력해주세요.");
                                }else{
                                    commentSubmit();
                                }
                            }else{
                                alert("로그인이 필요한 기능입니다.");
                            }
                        }
                    }>확인</CommentInputButton>
                </CommentInputBox>
                <CommentsBox>
                    댓글들
                    {PostData.comments.map((commentData, index)=>{
                        return(
                            <OneComment key={"comment"+index}>
                                <OneCommentWriter>{commentData.user.nickname}</OneCommentWriter>
                                <OneCommentText>{commentData.text}</OneCommentText>
                            </OneComment>
                        )
                    })}
                </CommentsBox>
                <ButtonBox>
                    <ListButton>
                        <Link to="/" 
                            style={{
                                color: "inherit",
                                textDecoration: "inherit"
                                }} >
                            목록
                        </Link>
                    </ListButton>
                </ButtonBox>
            </CommentBox>
        </Container>
    )
}