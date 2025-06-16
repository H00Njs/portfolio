import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-wave"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="section-title mb-6 gradient-text">
            Your Name
          </h1>
          <p className="section-subtitle mb-12">
            Purdue Student | Tech Enthusiast | Future Innovator
          </p>
          <button className="btn-outline">
            Get in Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="gradient-wave opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title mb-8 gradient-text">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              As a Purdue University student, I'm passionate about the intersection of technology and innovation. 
              While not pursuing a Computer Science degree, I've immersed myself in the world of tech startups 
              and emerging technologies. My goal is to bridge the gap between technical and non-technical domains, 
              bringing fresh perspectives to the tech industry.
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

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-16 gradient-text">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="mailto:your.email@example.com" className="btn-outline">
              your.email@example.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400 font-light">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
