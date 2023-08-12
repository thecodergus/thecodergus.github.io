import React from "react"

function Contact({ resumeBasicInfo, sharedData }){

    const renderSocialMedias = item => (
        <span key={item.name} className="m-4">
            <a href={item.url} className="fa-2x" target="_blank" rel="noopener noreferrer">
                <i className={`${item.class}`}></i>
            </a>
        </span>
    )

    return (
        <section id="contact">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "white" }}>
                    <span>
                        {resumeBasicInfo ? resumeBasicInfo.section_name.contact : "???"}
                    </span>
                </h1>
            </div>
            <div className="social-links fa-3x">
                {
                !!sharedData && sharedData.social.map(renderSocialMedias)
                }
            </div>
        </section>
    )
}

export default Contact