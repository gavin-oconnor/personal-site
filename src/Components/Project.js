import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';

const Project = ({projs}) => {
    const {index} = useParams();
    const i2 = index%3
    const i1 = (index-i2)/3
    const [imageIndex,setImageIndex] = useState(projs[i1][i2].images.length > 0 ? 0 : -1)
    console.log(imageIndex)
    const next = () => {
      imageIndex === projs[i1][i2].images.length-1 ? setImageIndex(0) : setImageIndex(imageIndex+1)
    }
    const last = () => {
      imageIndex === 0 ? setImageIndex(projs[i1][i2].images.length-1) : setImageIndex(imageIndex-1)
    }
  return (
    <>
    <Header/>
    <div className="proj-container">
      <div className="proj-left">
        <h2 className="proj-h">
          {projs[i1][i2].name}
        </h2>
        <p className="proj-p">
          <span className="bold">Technologies used: </span>{projs[i1][i2].stack}
        </p>
        <p className="proj-p">
        <span className="bold">Lines of code: </span>{projs[i1][i2].lines}
        </p>
        <p className="proj-p" dangerouslySetInnerHTML={{__html:projs[i1][i2].extended}}>
          {/* {projs[i1][i2].extended} */}
        </p>
      </div>
      <div className="proj-right">
        {<img className="proj-img" src={projs[i1][i2].images[imageIndex]}/>}
        <div className="proj-btn-container">
          <div className="proj-btn" onClick={last}>
            <p className="proj-btn-p">Previous</p>
          </div>
          <div className="proj-btn" onClick={next}>
            <p className="proj-btn-p">Next</p>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Project