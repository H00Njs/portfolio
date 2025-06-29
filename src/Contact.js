import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="gradient-wave"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="section-title mb-6 gradient-text">
            Get in Touch
          </h1>
          <p className="section-subtitle mb-12">
            Let's connect and discuss opportunities
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-16 gradient-text">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-outfit font-light mb-4 text-white">Email</h3>
              <a href="mailto:song995@purdue.edu" className="btn-outline">
                song995@purdue.edu
              </a>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-outfit font-light mb-4 text-white">LinkedIn</h3>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Connect on LinkedIn
              </a>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-outfit font-light mb-4 text-white">GitHub</h3>
              <a href="https://github.com/H00Njs" target="_blank" rel="noopener noreferrer" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400 font-light">
          <p>© 2024 Junghoon Song. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact; 