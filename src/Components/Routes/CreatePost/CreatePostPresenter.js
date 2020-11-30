import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 75%;
    min-height: 40vh;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    padding:10px;
`;

const ContentBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:20px 50px 20px 50px;
`;



const Title = styled.div`
    font-size:1.2em;
    width:80%;
`;

const TitleInput = styled.input.attrs({})`
    width:80%;
    margin:10px 0;    
`;

const ContentTitle = styled.div`
    width:80%;
    font-size:1.2em;
`;

const ContentInput = styled.textarea.attrs({
})`
    width:80%;
    margin:10px 0; 
    height:20vh;
    resize:none;
`;

const ButtonBox = styled.div`
    display:flex;
    justify-content:flex-end;
    width:80%;
`;

const WriteButton = styled.button`
    background:none;
    border-radius:5px;
    margin:0 10px;
`;

const CancelButton = styled.button`
    background:none;
    border-radius:5px;

`;



export default ({InputTextTitle,TextAreaContent,submit}) => {
    return (
        <Container>
            <ContentBox>
                <Title>
                    제목
                </Title>
                <TitleInput {...InputTextTitle}/>
                <ContentTitle>
                    내용
                </ContentTitle>
                <ContentInput {...TextAreaContent} />
            </ContentBox>
            <ButtonBox>
                <WriteButton onClick={()=>{
                    submit();
                }}>작성</WriteButton>
                <CancelButton>
                    <Link
                     to="/" 
                     style={{
                            color: "inherit",
                            textDecoration: "inherit"
                            }} >
                        취소
                    </Link>
                </CancelButton>
            </ButtonBox>
        </Container>
    );
}