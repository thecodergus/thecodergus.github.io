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
import { useLocalState } from "./config/localStore";

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

export default App;

const Flags = ({ flags, applyPickedLanguage }) => {
  const Flag = ({ language, classFlag }, i) => (
    <div
      onClick={() =>
        applyPickedLanguage(language)
      }
      style={{ display: "inline" }}
    >
      <span
        className="iconify language-icon mr-5"
        data-icon={classFlag}
        data-inline="false"
        id={i}
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
  const [sharedData, setSharedData] = useState()
  const [resumeData, setResumeData] = useState()
  const [theme, setTheme] = useLocalState("theme")
  const [language, setLanguage] = useLocalState("chose_language")
  const [languages] = useLocalState("languages")

  // Data
  const loadSharedData = async () => setSharedData(await axios(`portfolio_shared_data.json`).data)
  const loadResumeFromPath = async () => setResumeData(await axios(`languages/${language}`).data)

  useEffect(() => {
    loadSharedData()
    loadResumeFromPath()
  }, [])

  // Language
  const applyPickedLanguage = (language) => setLanguage(language)
  // const swapCurrentlyActiveLanguage = () => {
  //   if(language === ""){

  //   }
  // }
  
  useEffect(() => {
    if (!!language){
      loadResumeFromPath()
      // swapCurrentlyActiveLanguage()
    }
  }, [applyPickedLanguage])


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
      <Header sharedData={this.state.sharedData.basic_info} />
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