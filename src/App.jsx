import React, { Component, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import axios from "axios"
import store from "./config/localStore";

// Aplicar
// https://tanstack.com/query/v4/docs/overview

const App = () => {
  const [sharedData, setSharedData] = useState({})
  const [resumeData, setResumeData] = useState({})
  const [language, setLanguage] = store.useState("chose_language")
  const [languages] = store.useState("languages")

  // // Data
  const loadSharedData = async () => {
    const response = await axios(`portfolio_shared_data.json`)

    if (!!response) setSharedData(response.data)
  }
  const loadResumeFromPath = async () => {
    const response = await axios(`languages/${language}.json`)

    if (!!response) setResumeData(response.data)
  }

  useEffect(() => {
    loadSharedData()
    loadResumeFromPath()
  }, [])

  // // Language
  const applyPickedLanguage = (language) => {
    setLanguage(language) 
  }

  useEffect(() => {
    loadResumeFromPath()
  }, [language])


  const Flags = ({ languages, applyPickedLanguage }) => {
    const Flag = (lang, i) => (
      <div
        onClick={() =>
          applyPickedLanguage(lang.language)
        }
        style={{ display: "inline" }}
        key={i}
      >
        <span
          className={lang.classItem}
          data-icon={lang.flag}
          data-inline="false"
          style={{
            filter: lang.language !== language ? "brightness(40%)" : null
          }}
        ></span>
      </div>
    )

    return !!languages && languages.map(Flag)
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <Flags
          languages={languages}
          applyPickedLanguage={applyPickedLanguage}
        />
      </div>
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