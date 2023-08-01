import React from 'react'

const LeftImageRow = ({header,subheader,content,image}) => {
  const data = "&nbsp;&nbsp;Activities & Societies"
  return (
    <div className="left-image-row-container" style={{backgroundColor:"#fff"}}>
        <div className="left-image-row-container-l">
          <img className="lirc-img" src={image}/>
        </div>
        <div className="left-image-row-container-r">
            <h2 className="lirc-h2">{header}</h2>
            <h3 className="lirc-h3">{subheader}</h3>
            {content.map((item) => <p className="lirc-p" dangerouslySetInnerHTML={{__html:item}}/>)}
        </div>
    </div>
  )
}

export default LeftImageRow