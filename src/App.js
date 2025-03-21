import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import About from './pages/About';
import logo from './logo.svg';
import './App.css';

/**
 * The main application component that sets up routing and renders the app layout.
 * 
 * Features:
 * - Provides navigation links to different routes (Home and About).
 * - Displays a header with a logo, a welcome message, and a link to the React documentation.
 * - Configures routes for the application using React Router.
 * 
 * @component
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </nav>
        <header className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
            style={{ width: '150px', height: '150px' }}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>welcome to my world</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
