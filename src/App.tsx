import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


function App() {
  return (
    <div className="App">
      <Header id={"header"} />
      <Main id={"main"} />
      <About id={"about"} />
      <Projects id={"projects"} />
      <Skills id={"skills"} />
      <Contacts id={"contacts"} />
      <Footer />
    </div>
  )
}

export default App;
