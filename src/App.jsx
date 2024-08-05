import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CursorDot from "./components/CursorDot";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
export default function App() {
  return (
    <>
      <div className="grid items-center min-h-screen scroll-smooth">
        <CursorDot className="hidden md:block " />
        <Navbar />
        <Home />
        <About />
        <Domains />
        <Skills />
        <Contacts />
      </div>
    </>
  );
}
