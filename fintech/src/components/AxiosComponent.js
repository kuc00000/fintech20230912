import React from "react";

const AxiosComponent = () => {
  const handleClick = () => {
    alert("클릭");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=74b826a4eb294d3ca6713bc62d5d3989&from=2023-08-13&sortBy=publishedAt").then((response)=>{
      console.log(response);
    })
  };

  return (
    <div>
      <button onClick={handleClick}>요청 생성</button>
    </div>
  );
};

export default AxiosComponent;