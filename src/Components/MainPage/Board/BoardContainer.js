import React from "react";
import { useQuery } from "react-apollo-hooks";
import BoardPresenter from "./BoardPresenter";
import { ALL_POST } from "./BoardQuery";

import styled from "styled-components";
import { FIND_USER } from "../../LoginAndJoin/UpdateUser/UpdateUserQuery";

const Loading = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
`;

export default ()=>{

    const { data,
            loading,
            error
          } = useQuery(ALL_POST);

    const { data:loginInfo,
            loading:loginInfoLoading,
          error:loginInfoError } = useQuery(FIND_USER);


          if(!loading && !loginInfoLoading){
              return (
                      <BoardPresenter allPostData={data.allPost} loginInfo={loginInfo} />  
                  );
          }else{
            return <Loading>로딩중</Loading>
          }
}