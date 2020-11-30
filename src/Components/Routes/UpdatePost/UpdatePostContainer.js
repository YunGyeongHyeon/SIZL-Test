import React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import useInput from "../../../Public/useInput";
import { SEARCH_POST } from "../WatchPost/WatchPostQuery";
import UpdatePostPresenter from "./UpdatePostPresenter";
import styled from "styled-components";
import { UPDATE_POST } from "./UpdatePostQuery";

const Loading = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
`;


export default withRouter((props) => {

    const InputTextTitle = useInput("");
    const TextAreaContent = useInput("");

    const postId = props.match.params.id;

    const {
            data,
            loading,
            error
          } = useQuery(SEARCH_POST,{variables:{postId}});

          console.log(InputTextTitle.value);
          console.log(TextAreaContent.value);

    const [updatePost] = useMutation(UPDATE_POST);

    const submit = () => {
        updatePost({variables:{
            id:postId,
            title:InputTextTitle.value,
            content:TextAreaContent.value
        }});
        alert("수정완료");
        window.location.href="/";
    }
          if(!loading){
              return (<UpdatePostPresenter 
                  InputTextTitle={InputTextTitle}
                  TextAreaContent={TextAreaContent}
                  postData={data}
                  submit={submit}
                  />);
          }else{
            return <Loading>로딩중</Loading>
          }
});