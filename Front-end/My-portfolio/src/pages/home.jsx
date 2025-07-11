function Home() {
  return (
    <section
      id="home"
      className="bg-white dark:bg-black text-black dark:text-white min-h-screen pt-24 px-4 sm:px-8 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-red-600 shadow-lg hover:shadow-red-500/60 overflow-hidden transition duration-300 bg-zinc-900">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQG3KEVq0iUKkA/profile-displayphoto-shrink_800_800/B56ZYvpJS5HoAc-/0/1744556038520?e=1757548800&v=beta&t=YZO3-EEIJ1FBrcPNAZqe3VGel_FPz683EIuZsAoNSeE"
              alt="Arshak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-4 tracking-tight leading-tight">
          Arshak<span className="text-black dark:text-white">Dev</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed mb-8">
          I’m a passionate full stack web developer focused on building bold, modern web applications using the MERN stack.<br />
          From frontend design to backend logic, I craft responsive, functional, and fast experiences. Scroll down and explore the work I’ve built!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full sm:w-auto">
          <a
            href="#about"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow-md text-sm sm:text-base font-semibold text-center transition w-full sm:w-auto"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded border border-gray-500 text-sm sm:text-base font-semibold text-center transition w-full sm:w-auto"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
