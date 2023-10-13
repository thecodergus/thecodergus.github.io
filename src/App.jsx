import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import "devicon/devicon.min.css"
import Header from "./components/home_page/Header";
import Footer from "./components/home_page/Footer";
import About from "./components/home_page/About";
import Experience from "./components/home_page/Experience";
import Projects from "./components/home_page/Projects";
import Skills from "./components/home_page/Skills";
import Contact from "./components/home_page/Contact";
import axios from "axios"
import store from "./config/localStore";
import Flags from "./components/home_page/Flags";
import Doom1 from "./components/games/doom1";

const App = () => {
  const [sharedData, setSharedData] = useState({})
  const [resumeData, setResumeData] = useState({})
  const [language] = store.useState("language")

  // Data
  const loadSharedData = async () => {
    const response = await axios(`data/portfolio_shared_data.json`)

    if (!!response) setSharedData(response.data)
  }
  const loadResumeFromPath = async () => {
    const response = await axios(`data/languages/${language}.json`)

    if (!!response) setResumeData(response.data)
  }

  useEffect(() => {
    loadSharedData()
    loadResumeFromPath()
  }, [])

  useEffect(() => {
    loadResumeFromPath()
  }, [language])

  return (
    // <div>
    
    // </div>
    <div>
      <Router>
          <Routes>
            <Route path="/games/doom1" element={Doom1} />
            <Route path="/" element={<>
            
            
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
            
            </>} />
            
          </Routes>
      </Router>
    </div>
  )

}

export default App;