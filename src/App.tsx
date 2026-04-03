import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import Contacts from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import Particle from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";
import {SvgGradients} from "./components/svgFiles/SvgGradients.tsx";

function App() {
  return (
    <div className="App">
      <Particle/>
      <SvgGradients/>
      <Header />
      <Main id={"main"} />
      <About id={"about"} />
      <Projects id={"projects"} />
      <Skills id={"skills"} />
      <Contacts id={"contacts"} />
      <Footer />
      <GoTopBtn/>
    </div>
  )
}

export default App;
