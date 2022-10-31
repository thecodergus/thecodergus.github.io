import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import typescriptIcon from "@iconify/icons-logos/typescript-icon"
import phpIcon from "@iconify/icons-logos/php"
import postgreeIcon from "@iconify/icons-logos/postgresql"
import dockerIcon from "@iconify/icons-logos/docker-icon"
import { useObjectState } from "../hooks";

const About = ({ resumeBasicInfo, sharedBasicInfo }) => {
  const [profilePic, setProfilePic] = useState("")
  const [{ sectionName, hello, about }, setResumeBasicInfo] = useObjectState({sectionName: "", hello: "", about: ""})

  useEffect(() => {
    if (!!sharedBasicInfo) setProfilePic("images/" + sharedBasicInfo.image)
    
    if (!!resumeBasicInfo){
      setResumeBasicInfo({
        sectionName: resumeBasicInfo.section_name.about,
        hello: resumeBasicInfo.description_header,
        about: resumeBasicInfo.description
      })
    }
  }, [resumeBasicInfo, sharedBasicInfo, setResumeBasicInfo])


  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilePic}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={typescriptIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={phpIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={postgreeIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={dockerIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
