import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Navbar />

        <main className="pt-16">
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
