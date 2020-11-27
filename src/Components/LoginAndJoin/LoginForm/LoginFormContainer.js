import React from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../../Public/useInput";
import LoginFormPresenter from "./LoginFormPresenter";
import { LOCAL_LOG_IN, LOG_IN } from "./LoginFormQuery";

export default ({
    joinForm,
    setJoinForm,
    loginForm,
    setLoginForm
}) => {
    
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const inputTextId = useInput("");
    const inputTextPassword = useInput("");


    const {
        data,
        loading,
        error
    } = useQuery(LOG_IN,{
        variables:{
            email: inputTextId.value,
            password: inputTextPassword.value 
        }
    });

    const onSubmit = async() => {
        if(!loading){
            const token = data.login;
            if(data.login !== "" && data.login !== undefined){
                await localLogInMutation({ variables: { token } });
                localStorage.setItem("userEmailToken", inputTextId.value);
            }
            window.location.reload();
        }else{
            alert("잠시만 기다려주세요");
        }
    }

    return (
        <LoginFormPresenter 
            inputTextId={inputTextId}
            inputTextPassword={inputTextPassword}
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            joinForm={joinForm}
            setJoinForm={setJoinForm}
            onSubmit={onSubmit}
        />
    );
}
