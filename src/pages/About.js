import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "John Smith",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      bio: "Nullam quis risus eget urna mollis ornare vel eu leo."
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Design Lead",
      image: "https://via.placeholder.com/150",
      bio: "Aenean eu leo quam. Pellentesque ornare sem lacinia."
    }
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p className="tagline">Crafting innovative solutions for tomorrow's challenges</p>
      </header>

      <section className="about-story">
        <div className="content-wrapper">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="story-text">
              <p>Founded in 2020, our company has been at the forefront of technological innovation. We believe in creating solutions that not only solve today's problems but anticipate tomorrow's challenges.</p>
              <p>Our journey began with a simple idea: technology should serve humanity, not the other way around. Since then, we've grown into a team of passionate individuals dedicated to making that vision a reality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="content-wrapper">
          <h2>Our Mission & Values</h2>
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We push boundaries and explore new possibilities.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe great things happen when we work together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We build with the future of our planet in mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="content-wrapper">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="content-wrapper">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you! Contact us to learn more about our services or to join our team.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </section>

      <div className="navigation-link">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default About;