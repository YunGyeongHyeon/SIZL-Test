import React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../../Public/useInput";
import JoinFormPresenter from "./JoinFormPresenter";
import { CREATE_USER, OVERLAP_USER } from "./JoinFormQuery";

export default ({
    joinForm,
    setJoinForm,
    loginForm,
    setLoginForm
}) =>{
    
    const inputTextId = useInput("");
    const inputTextName = useInput("");
    const inputTextEmail = useInput("");
    const inputTextPassword = useInput("");
    const inputTextPasswordCheck = useInput("");
    const inputCheckGender = useInput("");

    const [joinUser] = useMutation(CREATE_USER,{
        variables:{
            username: inputTextName.value,
            gender: inputCheckGender.value,
            email: inputTextEmail.value,
            password: inputTextPassword.value,
        }
    });

    const {
        data,
        loading,
        error
    } = useQuery(OVERLAP_USER,{
        variables:{email: inputTextEmail.value}
    });

   console.log(data, inputTextEmail.value, loading);

    const submit = () => {
        joinUser();
        setLoginForm(!loginForm);
        setJoinForm(!joinForm);
    }

    return (
        <JoinFormPresenter 
            inputTextId={inputTextId}
            inputTextName={inputTextName}
            inputTextEmail={inputTextEmail}
            inputTextPassword={inputTextPassword}
            inputTextPasswordCheck={inputTextPasswordCheck}
            inputCheckGender={inputCheckGender}
            joinForm={joinForm}
            setJoinForm={setJoinForm}
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            data={data}
            loading={loading}
            submit={submit}
        />
    );
}