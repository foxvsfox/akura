import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
            <Link to='/news' className="nav-link">最新资讯</Link>
            <Link to='/gallery' className="nav-link">精美图库</Link>
            <Link to='/shop' className="nav-link">个人商铺</Link>
            <Link to='/ai-lab' className="nav-link">AI Lab</Link>
          </nav>
        </div>
      </header>
      <div className="content-area">
        <Routes>
          <Route path='/' element={<Home/>} index />
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
          {/* 以下路由尚未实现，需要创建对应的组件 */}
          <Route path='/news' element={<div>最新资讯页面正在开发中...</div>}/>
          <Route path='/shop' element={<div>个人商铺页面正在开发中...</div>}/>
          <Route path='/ai-lab' element={<div>AI Lab页面正在开发中...</div>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
