import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';
import "./styles.css";
import { Container } from 'react-bootstrap';

const Homes = () => {

  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div className='Blogsss'>
      {/* Page Header */}
      <Header />
      <Container>
      <div color="red" className="p-4 products-heading">
        <p>Wanna Read? Here are some of...</p>
        <h2>Our Blogs</h2>

      </div>
      </Container>

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <div className='blogContainer'>

        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      </div>
    </div>
  );
};

export default Homes;
