import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent';
const MainPage = () => {
  const handleClick = () => {
    // 새 창을 열기
    const newWindow = window.open("", "_blank");

    const clientId = "77e2fe7b-71de-4c6b-bcc6-d994f89b1ae6";
    // 주소 설정
    const authorizeUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;

    // 새 창의 위치를 지정하지 않으면 기본적으로 중앙에 열립니다.
    // 만약 위치를 지정하려면 다음과 같이 사용할 수 있습니다.
    // const windowOptions = 'width=800,height=600,left=100,top=100';

    // 새 창을 열고 주소로 이동
    newWindow.location.href = authorizeUrl;
  };
  return (
    <div>
      <HeaderComponent title={"사용자 인증 센터 이동"}> 
      
      </HeaderComponent>
      <button onClick={handleClick}>사용자 인증</button>
    </div>
  );
}

export default MainPage;