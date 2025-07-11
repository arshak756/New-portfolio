function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student Management System",
      description: "MERN Stack app to manage, add, update, and delete student records with full CRUD backend.",
      image: "https://smartschoolmanager.com/img/home/School-Management-System.jpg",
      live: "https://student-front-end-react.vercel.app/",
    },
    {
      id: 2,
      title: "Bulk Mail Sender",
      description: "Send bulk emails via Excel upload using React, Node.js, XLSX parser, and Nodemailer.",
      image: "https://www.easygosms.com/images/services-img/Bulk-Email-Service.png",
      live: "https://bulkmail-mern-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather forecast with city-based search using React and OpenWeatherMap API.",
      image: "https://ih1.redbubble.net/image.1830580170.4169/fposter,small,wall_texture,product,750x1000.jpg",
      live: "https://weather-forecast-react-api-ebon.vercel.app/",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Manage your tasks with priority, status, and completion tracking. Built in React.",
      image: "https://us.123rf.com/450wm/feodora52/feodora522009/feodora52200900009/155269411-vector-of-a-check-list-and-stopwatch-efficiency-and-project-management-concept.jpg?ver=6",
      live: "https://task-app-react-lyart.vercel.app/",
    },
    {
      id: 5,
      title: "Netflix Login Clone",
      description: "Netflix-style login screen using React, Tailwind CSS with responsive UI.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png",
      live: "https://netflix-fullstack-clone-express.vercel.app/",
    },
    {
      id: 6,
      title: "Apple Homepage UI",
      description: "Apple clone showcasing product layout and modern React styling.",
      image: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      live: "https://apple-clone-react-gold.vercel.app/",
    },
    {
      id: 7,
      title: "Flipkart E-Commerce Clone",
      description: "Full stack Flipkart-style app with product filters, cart, payment gateway, and admin panel.",
      image: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
      live: "https://flipkart-client-dy78.vercel.app/",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-20 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-12 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          🚀 My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <div className="h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition"
                >
                  🔗 View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
