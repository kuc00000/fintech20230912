import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderComponent from '../components/newsSearch/HeaderComponent';
import ListComponent from '../components/newsSearch/ListComponent';
import SearchComponent from '../components/newsSearch/SearchComponent';
const NewsSearch = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=74b826a4eb294d3ca6713bc62d5d3989`
        );
        setArticles(response.data.articles.slice(0, 100));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    if (searchQuery) {
      fetchNews();
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent onSearch={handleSearch} />
      <ListComponent articles={articles} />
    </div>
  );
}

export default NewsSearch;