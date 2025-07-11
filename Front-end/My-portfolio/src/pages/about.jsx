function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-24 px-4 sm:px-6 md:px-20 pb-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* About Me */}
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-6 sm:p-8 rounded-xl shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">👋 About Me</h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed space-y-2">
            <span className="block">
              Hello! I’m <strong>Mohammed Arshak</strong>, a full stack developer passionate about transforming ideas into interactive web apps.
            </span>
            <span className="block">
              I trained at <strong>Error Makes Clever Academy</strong>, specializing in the MERN stack (MongoDB, Express, React, Node).
            </span>
            <span className="block">
              I enjoy clean UI, performance optimization, and solving problems both in frontend and backend.
            </span>
            <span className="block">
              I’m seeking full-time opportunities to contribute and grow in a collaborative team.
            </span>
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
            ⚒️ Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['💻 JavaScript', 'Proficient in modern ES6+ for full-stack apps.'],
              ['⚛️ React.js', 'Built SPAs using hooks, routing, and reusable components.'],
              ['🧠 Node.js & Express', 'RESTful APIs, middleware, and backend logic.'],
              ['🗃️ MongoDB', 'Schema design with Mongoose and secure connections.'],
              ['🎨 Tailwind CSS', 'Utility-first styling for fast responsive UI.'],
              ['📝 HTML & CSS', 'Clean, semantic structure and layout.'],
              ['🔧 Git & GitHub', 'Version control, GitHub Pages, collaboration.'],
              ['📦 REST APIs', 'Data handling with Axios/Fetch and proper error handling.'],
              ['🚀 Deployment', 'Hosting with Vercel, Netlify, and Render.'],
              ['🛡️ Form Validation', 'Secure client/server-side validation using Regex & Joi.'],
              ['📁 Excel Handling', 'Bulk email uploads via XLSX parsing (SheetJS).'],
              ['🧪 Testing', 'Manual testing, console debugging, error tracing.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-zinc-100 dark:bg-zinc-900 p-5 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:shadow-md transition"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">🎓 Education</h2>
          <div className="space-y-6">
            <div className="bg-zinc-100 dark:bg-zinc-900 p-5 rounded-xl border border-zinc-300 dark:border-zinc-800">
              <p className="text-lg font-medium">Full Stack Web Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Error Makes Clever Academy, Chennai – 2025</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Covered HTML, CSS, JS, React, Node, Express, MongoDB, APIs, and deployment with real-world projects like E-Commerce, Bulk Mail, Netflix Clone, and more.
              </p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-5 rounded-xl border border-zinc-300 dark:border-zinc-800">
              <p className="text-lg font-medium">B.E. Mechanical Engineering</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Velalar Engineering College – 2024</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Graduated with 8.21 CGPA. Strong foundation in problem-solving and project execution.</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-6 border-b border-zinc-300 dark:border-zinc-700 pb-2">
            📂 Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flipkart Clone */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-300 dark:border-zinc-800 shadow-md hover:shadow-red-500/30 transition">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">🛒 Flipkart E-Commerce Clone</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                MERN-based e-commerce platform with product filters, shopping cart, secure login, admin panel, Stripe payments, and fully responsive Flipkart-style UI.
              </p>
              <a
                href="https://flipkart-client-dy78.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded font-medium transition"
              >
                🔗 View Live Project
              </a>
            </div>

            {/* Student Management System */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-300 dark:border-zinc-800 shadow-md hover:shadow-red-500/30 transition">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">🎓 Student Management System</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                Full CRUD system for student data built with React, Node, Express, and MongoDB. Admin interface supports student creation, updates, and deletions with real-time database integration.
              </p>
              <a
                href="https://student-front-end-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded font-medium transition"
              >
                🔗 View Live Project
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
