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

    const [loginSubmit] = useMutation(LOG_IN);

    const onSubmit = async() => {
       const tokenObj = await loginSubmit({variables:{ email: inputTextId.value,
            password: inputTextPassword.value }});
            
            const token = tokenObj.data.login;
            console.log(token);
        if(token){         
            await localLogInMutation({ variables: { token } });
            localStorage.setItem("userEmailToken", inputTextId.value);
            window.location.reload();
        }else{
            alert("이메일 및 비밀번호가 다릅니다.");
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
