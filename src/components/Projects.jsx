import React, { useEffect, useState } from "react";
import { useObjectState } from "../hooks";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [modal, setModal] = useObjectState({show: false, data: {}})
  const [sectionName, setSectionName] = useState("")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (!!resumeBasicInfo) setSectionName(resumeBasicInfo.section_name.projects)

    if (!!resumeProjects) setProjects(resumeProjects)
  }, [resumeProjects, resumeBasicInfo])

  // Modal actions
  const modalShow = (data) => setModal({show: true, data})
  const modalClose = () => setModal({ show: false, data: {} })

  const Project = (project, i) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={project.title}
      style={{ cursor: "pointer" }}
    >
      <span className="portfolio-item d-block">
        <div className="foto" onClick={() => modalShow(project)}>
          <div>
            <img
              src={project.images[0]}
              alt="projectImages"
              height="230"
              style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
            />
            <span className="project-date">{project.startDate}</span>
            <br />
            <p className="project-title-settings mt-3">
              {project.title}
            </p>
          </div>
        </div>
      </span>
    </div>
  )

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>
            {sectionName}
          </span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">
            {
              projects.map(Project)
            }
          </div>
        </div>
        <ProjectDetailsModal
          show={modal.show}
          onHide={modalClose}
          data={modal.data}
        />
      </div>
    </section>
  )
}

export default Projects;
