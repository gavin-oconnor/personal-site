import React from 'react'
import ProjectWidget from './ProjectWidget'
import Header from './Header'

const Projects = ({projs}) => {
  return (<>
    <Header/>
    <div style={{height:20}}/>
    {projs.map((row,index1) => 
        <div className="projects-container-row">
            {row.map((proj,index2) => 
                <ProjectWidget proj={proj} index={index1*3+index2}/>
            )}
        </div>
    )}
    </>
  )
}

export default Projects