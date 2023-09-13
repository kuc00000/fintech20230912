import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchWrapper>
  );
};

export default SearchComponent;