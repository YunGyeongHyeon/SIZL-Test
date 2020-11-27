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
        min-height:55vh;
        max-height:70vh;
        background:white;
        z-index:10;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:5px;
`;

const Title = styled.span`
    font-size:1.5em;
    padding-bottom:15px;
`;

const InputForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    width:55%;
    padding:15px;
    height:30vh;
`;

const PwInput = styled.input.attrs({type:"password"})`
    width:55%;
`;

const EmailImputBox = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
`;

const EmailInput = styled.input.attrs({})`
    width:55%;
`;

const OverlapCheckButton = styled.button`
    border-radius: 5px;
    background: none;
    width: 21%;
    font-size: 1.1px;
`;

const NameInput = styled.input.attrs({})`
    width:55%;
`;
const PwChackInput = styled.input.attrs({type:"password"})`
    width:55%;
`;


const JoinButton = styled.button`
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

const LoginButton = styled.button`
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

const Text = styled.label``;

const GenderBox = styled.div`
    display:flex;
    justify-content:space-around;
    width:55%;
`;

const MaleButton = styled.div``;
const FemaleButton = styled.div``;

const MaleSelectButton = styled.input.attrs({type:"radio"})``;
const FemaleSelectButton = styled.input.attrs({type:"radio"})``;

export default ({
    setLoginForm,
    joinForm,
    setJoinForm, 
    inputTextId,
    inputTextName,
    inputTextEmail,
    inputTextPassword,
    inputTextPasswordCheck,
    inputCheckGender,
    data,
    loading,
    submit
    }) => {
        const verifyEmail = () => {
            let emailValue = inputTextEmail.value;

            const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            // 검증에 사용할 정규식 변수 regExp에 저장
          
            if (emailValue.match(regExp) != null) {
              return true;
            }
            else {
                return false;
            }
          };

    return (
        <Container >  
            <Background onClick={()=>{setJoinForm(!joinForm)}}/>
            <MainForm >
                <Title>회원가입</Title>
                <InputForm>
                    <EmailInput placeholder="ex)abc@naver.com" {...inputTextEmail}/>
                    {!loading ? 
                        verifyEmail() ? 
                            data.overlapUser ? 
                                "중복된 이메일입니다." : 
                                "사용가능한 이메일입니다."
                            : "이메일을 제대로 입력해주세요."
                        : "확인중입니다."}
                    <NameInput placeholder="ex)홍길동" {...inputTextName} />
                    <GenderBox>
                        <MaleButton >
                            <Text htmlFor="male">남자</Text>
                            <MaleSelectButton {...inputCheckGender}  id="male" name="selectGender" value="male" />
                        </MaleButton>
                       
                        <FemaleButton >
                            <Text htmlFor="female">여자</Text>
                            <FemaleSelectButton {...inputCheckGender} id="female" name="selectGender" value="female" />
                        </FemaleButton>
                    </GenderBox>
                    <PwInput placeholder="Password" {...inputTextPassword} />
                    <PwChackInput placeholder="PasswordCheck" {...inputTextPasswordCheck}/>

                    <JoinButton onClick={()=>{
                        if(!verifyEmail()){
                            alert("이메일을 제대로 입력해주세요.");
                        }else if(inputTextPassword.value.length < 8){
                            alert("비밀번호를 8자리 이상으로 해주세요.")
                        }
                        else if(inputTextPassword.value !== inputTextPasswordCheck.value){
                            alert("비밀번호를 확인해주세요.")
                        }
                        else{
                            submit();
                        }
                    }}>회원가입</JoinButton>
                </InputForm>
                <ActionBox>
                    <LoginButton onClick={()=>{
                         setJoinForm(!joinForm);
                         setLoginForm(true);
                    }}>로그인</LoginButton>
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