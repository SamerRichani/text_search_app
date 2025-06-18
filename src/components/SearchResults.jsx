import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results, searchTerm }) => {
 
  const highlightText = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="highlight">{part}</mark>
      ) : (
        part
      )
    );
  };

  if (results.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🔍</div>
        <h3>No results found</h3>
        <p>Try adjusting your search terms or browse all articles</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <h2>Search Results</h2>
        <span className="results-count">{results.length} article{results.length !== 1 ? 's' : ''} found</span>
      </div>
      
      <div className="results-grid">
        {results.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <h3 className="article-title">
                {highlightText(article.title, searchTerm)}
              </h3>
              <div className="article-meta">
                <span className="article-author">By {article.author}</span>
                <span className="article-date">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            
            <div className="article-content">
              {highlightText(article.content, searchTerm)}
            </div>
            
            <div className="article-footer">
              <button className="read-more-btn">Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchResults; 