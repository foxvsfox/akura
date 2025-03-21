import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Akura</h1>
        <p className="tagline">Transforming ideas into digital realities</p>
      </header>
      
      <section>
        <div className="content-wrapper">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="story-text">
              <p>Founded in 2020, Akura began with a simple vision: to create innovative digital solutions that make a difference. What started as a small team of passionate developers has grown into a thriving company dedicated to excellence in software development.</p>
              <p>Through the years, we've partnered with businesses of all sizes, helping them navigate the complex digital landscape with custom solutions tailored to their unique needs.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="content-wrapper">
          <h2>Our Values</h2>
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and building strong partnerships with our clients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="content-wrapper">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <h3>John Doe</h3>
              <p className="position">CEO & Founder</p>
              <p className="bio">With over 15 years of experience in software development, John leads our team with vision and expertise.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <h3>Jane Smith</h3>
              <p className="position">CTO</p>
              <p className="bio">Jane's technical knowledge and leadership skills drive our development process and technological innovation.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <h3>Alex Johnson</h3>
              <p className="position">Lead Designer</p>
              <p className="bio">Alex brings creativity and user-centered thinking to every project, ensuring beautiful and functional designs.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder"></div>
              </div>
              <h3>Sarah Williams</h3>
              <p className="position">Project Manager</p>
              <p className="bio">Sarah's organizational skills and attention to detail keep our projects on track and our clients happy.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-contact">
        <h2>Get In Touch</h2>
        <p>Interested in working with us? We'd love to hear from you!</p>
        <button className="contact-button">Contact Us</button>
      </section>
      
      <div className="navigation-link">
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
}

export default About;