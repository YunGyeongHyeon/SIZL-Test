import React from "react";
import UpdateUserPresenter from "./UpdateUserPresneter";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../../Public/useInput";
import { OVERLAP_USER } from "../JoinForm/JoinFormQuery";
import { FIND_USER, UPDATE_USER } from "./UpdateUserQuery";

export default ({
    joinForm,
    setJoinForm,
    loginForm,
    setLoginForm,
    updateUserForm,
    setUpdateUserForm
}) =>{

    const {
        data:findUser,
        loading:findUserLoading,
        error:findUserError
    } = useQuery(FIND_USER);

    
    const inputTextId = useInput("");
    const inputTextName = useInput("");
    const inputTextEmail = useInput("");
    const inputTextPassword = useInput("");
    const inputTextPasswordCheck = useInput("");
    const inputCheckGender = useInput("");
    const inputTextNickName = useInput("");


    const {
        data,
        loading,
        error
    } = useQuery(OVERLAP_USER,{
        variables:{email: inputTextEmail.value}
    });

    const [updateUser] = useMutation(UPDATE_USER);

    const submit = () => {
        setUpdateUserForm(!updateUserForm);
        updateUser({variables:{
            username: inputTextName.value,
            gender: inputCheckGender.value,
            email: inputTextEmail.value,
            password: inputTextPassword.value,
            nickname: inputTextNickName.value
        }})
    }

    return (
        <UpdateUserPresenter
            inputTextId={inputTextId}
            inputTextName={inputTextName}
            inputTextEmail={inputTextEmail}
            inputTextPassword={inputTextPassword}
            inputTextPasswordCheck={inputTextPasswordCheck}
            inputCheckGender={inputCheckGender}
            inputTextNickName={inputTextNickName}
            joinForm={joinForm}
            setJoinForm={setJoinForm}
            updateUserForm={updateUserForm}
            setUpdateUserForm={setUpdateUserForm}
            data={data}
            loading={loading}
            findUser={findUser}
            submit={submit}
        />
    );
}