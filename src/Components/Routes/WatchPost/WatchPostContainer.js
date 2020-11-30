import React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import useInput from "../../../Public/useInput";
import { FIND_USER } from "../../LoginAndJoin/UpdateUser/UpdateUserQuery";
import WatchPostPresenter from "./WatchPostPresenter";
import { SEARCH_POST, UPLOAD_COMMENT } from "./WatchPostQuery";
import styled from "styled-components";

const Loading = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
`;

export default withRouter ((props) => {

        const InputTextComment = useInput("");

        const postId = props.match.params.id;
        const {
                data,
                loading,
                error
            } = useQuery(SEARCH_POST,{
                variables:{
                postId
                }
            });
        
        const {
            data:loginInfo,
            loading:loginInfoLoading,
            error:loadingInfoError
        } = useQuery(FIND_USER);

        const [uploadComment] = useMutation(UPLOAD_COMMENT);
        console.log(loginInfo, loginInfoLoading);
        const commentSubmit = () => {
                uploadComment({
                    variables:{
                        postId,
                        commentContent:InputTextComment.value
                    }
                });    
        }   
        if(!loading && !loginInfoLoading){
            const postData = data.searchPost;
            console.log(postData);
            return (
                <WatchPostPresenter 
                    PostData={postData} 
                    InputTextComment={InputTextComment}
                    commentSubmit={commentSubmit}   
                    loginInfo={loginInfo}
                    loginInfoLoading={loginInfoLoading} 
                />
            )
        }else{
            return <Loading>로딩중</Loading>;
        }
    })