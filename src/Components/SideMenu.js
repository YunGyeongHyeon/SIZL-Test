import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 20%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Onemenu = styled.div`
    width: 100%;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border: 1px solid;
`;

export default () => (
    <Container >
        {/* map을 돌릴 부분 */}
        <Onemenu>
            자유게시판
        </Onemenu>
    </Container>
);