import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <Link to="/">Home</Link>
            This is the about page of the application.
        </div>
    );
}
export default About;