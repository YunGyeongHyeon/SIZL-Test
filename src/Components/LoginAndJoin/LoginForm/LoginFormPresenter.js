import styled from "styled-components";
import useInput from "../../../Public/useInput";

const Container = styled.div`
        width:100%;
        height:100vh;
        display:flex;
        position:absolute;
        top:0;
        left:0;
        justify-content:center;
        align-items:center;
`;

const Background =styled.div`
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background:rgba(0,0,0,0.3);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:1;
`;

const MainForm = styled.div`
        width:40%;
        height:55vh;
        background:white;
        z-index:10;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:5px;
`;

const Title = styled.span`
    font-size:1.2em;
    padding-bottom:15px;
`;

const InputForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:55%;
    padding:15px;
`;

const IdInput = styled.input.attrs({})`
    width:55%;
`;

const PwInput = styled.input.attrs({
    type:"password"
})`
    width:55%;
    margin: 10px 0;
`;

const LoginButton = styled.button`
    width:55%;
    background:orange;
    height:30px;
    border-radius:5px;
`;

const ActionBox = styled.div`
    display:flex;
    justify-content:center;
    font-size:1em;
`;

const JoinButton = styled.button`
    border:none;
    background:none;
    font-size:0.5em;
`;

const FindBox = styled.span`
    display:flex;
    font-size:0.5em;
`;

const FindId = styled.button`
    border:none;
    background:none;
    font-size:0.5em;
`;

const FindPW = styled.button`
    border:none;
    background:none;
    font-size:0.5em;
`;

export default ({
    loginForm, 
    setLoginForm,
    joinForm,
    setJoinForm,
    inputTextId,
    inputTextPassword,
    onSubmit
}) => {

    

    return (
        <Container >  
            <Background onClick={()=>{setLoginForm(!loginForm)}}/>
            <MainForm >
                <Title>로그인</Title>
                <InputForm>
                    <IdInput placeholder="이메일" {...inputTextId} />
                    <PwInput placeholder="비밀번호" {...inputTextPassword} />
                    <LoginButton onClick={()=>{
                        onSubmit();
                    }}>로그인</LoginButton>
                </InputForm>
                <ActionBox>
                    <JoinButton onClick={()=>{
                         setJoinForm(true);
                         setLoginForm(false);
                    }}>회원가입</JoinButton>
                    <FindBox>
                        <FindId href="#">
                            아이디찾기
                        </FindId> 
                        / 
                        <FindPW href="#">
                            비밀번호 찾기
                        </FindPW>
                    </FindBox>
                </ActionBox>
            </MainForm>

        </Container> 
    )
}