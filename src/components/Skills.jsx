import React, { useEffect, useState } from "react";

function Skills({ sharedSkills, resumeBasicInfo }){
  const [sectionName, setSectionName] = useState("")
  const [skills, setSkills] = useState([])

  useEffect(() => {
    if (!!resumeBasicInfo) setSectionName(resumeBasicInfo.section_name.skills)
    
    if (!!sharedSkills) setSkills(sharedSkills.icons)
  }, [sharedSkills, resumeBasicInfo])


  const Skill = (skill, i) => (
    <li className="list-inline-item mx-3" key={i}>
      <span>
        <div className="text-center skills-tile">
          <i className={skill.class} style={{ fontSize: "220%" }}>
            <p
              className="text-center"
              style={{ fontSize: "30%", marginTop: "4px" }}
            >
              {skill.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  )


  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">
              {
                sectionName
              }
            </span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
            {
              skills.map(Skill)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
