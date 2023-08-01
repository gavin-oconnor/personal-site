import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectWidget = ({proj,index}) => {
  const navigate = useNavigate();
  return (
    <div className="project-widget-container">
        <p className="pw-title"><span className="bold">{proj.name}</span></p>
        <p className="pw-content"><span className="bold">Technologies used:</span> {proj.stack}</p>
        <p className="pw-content"><span className="bold">Lines of code:</span> {proj.lines}</p>
        <div className="pw-links-container">
            <div className="pw-see-more" onClick={() => navigate(`/project/${index}`)}>
                <p>See More</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectWidget