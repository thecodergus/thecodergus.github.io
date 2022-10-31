import React, { Component, useEffect, useState, memo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import store from "../config/localStore"

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false)
  const [name, setName] = useState("")
  const [titles, setTitles] = useState([])
  const [theme, setTheme] = store.useState("theme")

  useEffect(() => {
    if(!!sharedData){
      setName(sharedData.name)
      setTitles(sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat())
    }
  }, [sharedData])

  const changeTheme = () => {
    if(theme === "dark"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  useEffect(() => {
    document
      .body
      .setAttribute("data-theme", theme)
  }, [theme])

  const onThemeSwitchChange = checked => {
    setChecked(checked)
    changeTheme()
  }

  const HeaderTitleTypeAnimation = memo(() => (
    <Typical className="title-styles" steps={titles} loop={50} />
  ), true);


  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
