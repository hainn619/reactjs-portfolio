import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Qualifications from "./components/Qualifications";
import ScrollUp from "./components/ScrollUp";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Testimonials />
        <Contact />       
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
