import { useEffect, useState } from "react";
import "./App.scss";
import "devicon/devicon.min.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import axios from "axios"
import store from "./config/localStore";
import Flags from "./components/Flags";

const App = () => {
  const [sharedData, setSharedData] = useState({})
  const [resumeData, setResumeData] = useState({})
  const [language] = store.useState("language")

  // Data
  const loadSharedData = async () => {
    const response = await axios(`data/portfolio_shared_data.json`)

    if (response) setSharedData(response.data)
  }
  const loadResumeFromPath = async () => {
    const response = await axios(`data/languages/${language}.json`)

    if (response) setResumeData(response.data)
  }

  useEffect(() => {
    loadSharedData()
    loadResumeFromPath()
  }, [])

  useEffect(() => {
    loadResumeFromPath()
  }, [language])

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <Flags />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Contact
        sharedData={sharedData.basic_info}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer
        sharedBasicInfo={sharedData.basic_info}
      />
    </div>
  )

}

export default App;