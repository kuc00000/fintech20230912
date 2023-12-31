import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResult = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const [accessToken, setAccessToken] = useState("");
  const [userSeqNo, setUserSeqNo] = useState("");
  const handleClick = () => {
    let requestOption = {
      //메뉴얼보고작성
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: code,
        client_id: "77e2fe7b-71de-4c6b-bcc6-d994f89b1ae6",
        client_secret: "a1084097-12fb-42ef-8945-76769ca13723",
        redirect_uri:"http://localhost:3000/authResult",
        grant_type:"authorization_code",
      },
    };
    axios(requestOption).then(({data}) => {
        
        setAccessToken(data.access_token);
        setUserSeqNo(data.user_seq_no);
        if (data.rsp_code !== "O0001") {
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("userSeqNo", data.user_seq_no);
            alert("저장 완료");
          } else {
            alert("인증에 실패했습니다 다시 시도해 주세요");
          }

    });
  };

  return (
    <div>
      <HeaderComponent title={"토큰 발급 / 인증"} />
      <p>사용자 인증 코드 : {code}</p>
      <button onClick={handleClick}>토큰 발급하기</button>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResult;