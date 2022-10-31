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




class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    axios(path)
      .then(response => this.setState({ resumeData: response.data }))
      .catch(err => alert(err))
  }

  loadSharedData() {
    axios(`portfolio_shared_data.json`)
      .then(response => this.setState({ sharedData: response.data }))
      .catch(err => alert(err))
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-brazil"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Contact
          sharedData={this.state.sharedData.basic_info}
          resumeBasicInfo={this.state.resumeData.basic_info}       
        />
        <Footer 
          sharedBasicInfo={this.state.sharedData.basic_info} 
        />
      </div>
    );
  }
}



const Flags = ({ flags, applyPickedLanguage }) => {
  const Flag = ({ language, classFlag }, i) => (
    <div
      onClick={() =>
        applyPickedLanguage(language)
      }
      style={{ display: "inline" }}
      key={i}
    >
      <span
        className="iconify language-icon mr-5"
        data-icon={classFlag}
        data-inline="false"
      ></span>
    </div>
  )
  return (
    <div className="col-md-12 mx-auto text-center language">
      {
        flags.map(Flag)
      }
    </div>
  )
}


const App2 = () => {
  const [sharedData, setSharedData] = useState({})
  const [resumeData, setResumeData] = useState({})
  const [theme, setTheme] = store.useState("theme")
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
  const applyPickedLanguage = (language) => setLanguage(language) 
  // const swapCurrentlyActiveLanguage = () => {
  //   if(language === ""){

  //   }
  // }


  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <Flags
          flags={languages}
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

export default App2;