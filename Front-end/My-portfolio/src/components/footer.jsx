function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 dark:bg-black dark:text-gray-400 px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Column 1: Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 2: Tech Stack */}
        <div>
          <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
          <ul className="space-y-2">
            <li>MERN (MongoDB, Express, React, Node.js)</li>
            <li>Tailwind CSS</li>
            <li>JavaScript, HTML, CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/arshak756"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arshakin2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:arshak@example.com"
                className="hover:text-white transition"
              >
                Email Me
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="hover:text-white transition"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Location */}
        <div>
          <h4 className="text-white font-semibold mb-3">Location</h4>
          <p>Chennai, India</p>
          <p>Available for remote work</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-600 mt-10">
        © {new Date().getFullYear()} NetFlix — Built with  using React & Tailwind
      </div>
    </footer>
  );
}

export default Footer;
