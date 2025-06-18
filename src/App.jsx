import React, { useState, useMemo } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import { articles } from './data/articles';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) {
      return articles;
    }
    
    const searchLower = searchTerm.toLowerCase();
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower) ||
      article.author.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Article Search</h1>
          <p className="app-subtitle">
            Search through our collection of articles with real-time highlighting
          </p>
        </div>
      </header>

      <main className="app-main">
        <SearchBox 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <SearchResults 
          results={filteredArticles} 
          searchTerm={searchTerm} 
        />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Article Search.</p>
      </footer>
    </div>
  );
}

export default App; 