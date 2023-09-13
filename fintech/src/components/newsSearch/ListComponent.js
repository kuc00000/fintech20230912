import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  img {
    width: 100px; /* 이미지 크기를 조절하거나 필요에 따라 스타일을 수정하세요 */
    margin-right: 20px;
  }
`;

const ListComponent = ({ articles }) => {
  return (
    <ListWrapper>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <div>
              <h3>{article.title}</h3>
              {/* 기사 내용, 작성자, 등 추가 정보도 여기에 포함할 수 있습니다 */}
            </div>
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default ListComponent;