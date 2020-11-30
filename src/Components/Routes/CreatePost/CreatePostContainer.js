import React from "react";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../../Public/useInput";
import CreatePostPresenter from "./CreatePostPresenter";
import {CREATE_POST} from "./CreatePostQuery";

export default()=>{
    
    const InputTextTitle = useInput("");
    const TextAreaContent = useInput("");

    const [uploadPost] = useMutation(CREATE_POST);

    const submit = () =>{
        if(InputTextTitle.value.length <= 0  || TextAreaContent.value.length <= 0  ){
            alert("내용을 입력해주세요.");
        }else{
            uploadPost({variables:{
                title: InputTextTitle.value,
                content: TextAreaContent.value
            }})
            window.location.href = "/";
        }
    }
    return (
        <CreatePostPresenter 
            InputTextTitle={InputTextTitle}
            TextAreaContent={TextAreaContent} 
            submit={submit}
        />
    );
}