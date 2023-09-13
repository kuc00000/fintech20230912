import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResult = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const handleClick = () => {
    let requestOption = {
      //메뉴얼보고작성
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: code,
        client_id: "77e2fe7b-71de-4c6b-bcc6-d994f89b1ae6",
        client_secret: "a1084097-12fb-42ef-8945-76769ca13723d",
        redirect_uri:"http://localhost:3000/authResult",
        grant_type:"authorization_code"
      },
    };
    axios(requestOption).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <HeaderComponent title={"토큰 발급 / 인증"} />
      <p>사용자 인증 코드 : {code}</p>
      <button onClick={handleClick}>토큰 발급하기</button>
    </div>
  );
};

export default AuthResult;