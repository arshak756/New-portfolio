function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-4 sm:px-6 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-10 border-b border-zinc-300 dark:border-zinc-700 pb-2">
           Contact Me
        </h2>

        <form
          action="https://formspree.io/f/mldnqznw"
          method="POST"
          className="space-y-6 bg-zinc-100 dark:bg-zinc-900 p-6 sm:p-8 rounded-xl border border-zinc-300 dark:border-zinc-800 shadow-md"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 text-black dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 text-black dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              className="w-full bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 text-black dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          {/* GitHub & LinkedIn */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://github.com/arshak756"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 px-4 py-2 rounded font-medium transition"
            >
               View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arshakin2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 px-4 py-2 rounded font-medium transition"
            >
               Connect on LinkedIn
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition"
          >
             Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
