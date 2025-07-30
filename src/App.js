import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Contact from './Contact';

function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-wave"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="section-title mb-6 gradient-text">
            Junghoon Song
          </h1>
          <p className="section-subtitle mb-12">
            Purdue Student | Tech Enthusiast | Future Innovator
          </p>
          <a href="#/contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="gradient-wave opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title mb-8 gradient-text">
            About Me
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I'm an undergraduate student at Purdue University with a strong foundation in computer science and a deep interest in applying technology to solve real-world, human-centered problems. I'm proficient in Python, Java, and C, and I have experience using design tools such as Figma to enhance user experience and product design. My background includes leading a start-up club, organizing a school-wide mock investment competition, and developing an MVP for a Korean language education app—an experience that sparked my passion for combining engineering with social impact.
              <br></br>
              <br></br>
              Beyond technical skills, I value creativity, empathy, and adaptability. I've explored everything from AI-driven language learning to assistive technologies inspired by personal encounters with disability-friendly devices. Whether through research, product design, or collaborative leadership, I'm driven to build solutions that are not only functional but meaningful.
              <br></br>
              <br></br>
              I'm currently seeking opportunities—such as internships, research, or collaborative projects—that will allow me to further develop my technical expertise while making a tangible difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-16 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Learning Platform",
                description: "Developed a prototype for an AI-driven educational platform that personalizes learning experiences.",
                link: "#"
              },
              {
                title: "Startup Incubator Initiative",
                description: "Co-founded a student-led initiative to support early-stage tech startups at Purdue.",
                link: "#"
              },
              {
                title: "Tech Innovation Blog",
                description: "Created a blog exploring emerging technologies and their impact on various industries.",
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-outfit font-light mb-4 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 font-light">{project.description}</p>
                <a href={project.link} className="btn-outline inline-block">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="gradient-wave opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title mb-16 gradient-text">Skills & Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Artificial Intelligence",
              "Design Thinking",
              "Startup Incubation",
              "Product Strategy",
              "User Experience",
              "Data Analysis",
              "Project Management",
              "Innovation"
            ].map((skill, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <span className="text-white font-light">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400 font-light">
          <p>© 2025 Junghoon Song. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
