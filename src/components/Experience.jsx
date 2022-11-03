import React, { Component, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

function Experience(experience, i){

  const mainTechnology = (technology, i) => (
    <Badge pill className="experience-badge mr-2 mb-2" key={i}>
      {technology}
    </Badge>
  )

  const technology = (technology, i) => (
    <Badge pill className="main-badge mr-2 mb-2" key={i}>
      {technology}
    </Badge>
  )

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={experience.years}
      iconStyle={{
        background: "#AE944F",
        color: "#fff",
        textAlign: "center",
      }}
      icon={<i className={`${experience.icon} experience-icon`}></i>}
      key={i}
    >
      <div style={{ textAlign: "left", marginBottom: "4px" }}>
        {
          experience.mainTech.map(mainTechnology)
        }
      </div>

      <h3
        className="vertical-timeline-element-title"
        style={{ textAlign: "left" }}
      >
        {experience.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: "left" }}
      >
        {experience.company}
      </h4>
      <div style={{ textAlign: "left", marginTop: "15px" }}>
        {
          experience.technologies.map(technology)
        }
      </div>
    </VerticalTimelineElement>
  );
}


const Experiences = ({ resumeExperience, resumeBasicInfo }) => {
  const [sectionName, setSectionName] = useState("")
  const [experience, setExperience] = useState([])

  useEffect(() => {
    if (!!resumeBasicInfo) setSectionName(resumeBasicInfo.section_name.experience)

    if (!!resumeExperience) setExperience(resumeExperience)
  }, [resumeBasicInfo, resumeExperience])


  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {
            experience.map(Experience)
          }
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );

}

export default Experiences;
