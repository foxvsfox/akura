import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="gov-header">
          <div className="header-container">
            <div className="logo-title">
              <img src={logo} className="gov-logo" alt="Logo" />
              <h1 className="gov-title">🦊Fox的个人网站</h1>
            </div>
            <nav className="gov-nav">
              <Link to='/' className="nav-link">网站首页</Link>
              <Link to='/about' className="nav-link">关于我们</Link>
              <Link to='/gallery' className="nav-link">精美图库</Link>
              <Link to='/' className="nav-link">个人商铺</Link>
              <Link to='/' className="nav-link">AI Lab</Link>
            </nav>
          </div>
        </header>
        <div className="content-area">
          <Routes>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
