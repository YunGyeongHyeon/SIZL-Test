import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin:5% 10%;
`;

const LoginButton = styled.button`
    width:80%;
    height:2.5em;
    border:1px solid;
    margin-bottom:10px;
    font-size:1em;
    font-weight:500;
    background: none;
`;



export default ({loginForm, setLoginForm}) => (
    <Container>
        {localStorage.getItem("userEmailToken") ? 
        <LoginButton onClick={async()=>{
            localStorage.removeItem("userEmailToken");
            localStorage.removeItem("token");
            window.location.reload();
        }}>
            로그아웃
        </LoginButton> : 
        <LoginButton onClick={async()=>{
            await setLoginForm(!loginForm);
        }}>
            로그인
        </LoginButton>
        }
        

    </Container>
);