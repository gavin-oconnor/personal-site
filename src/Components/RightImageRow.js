import React from 'react'

const RightImageRow = ({header,subheader,content,image}) => {
  return (
    <div className="left-image-row-container" style={{backgroundColor:"#fff"}}>
        <div className="right-image-row-container-r">
        <h2 className="rirc-h2">{header}</h2>
            <h3 className="rirc-h3">{subheader}</h3>
            {content.map((item) => <p className="rirc-p" dangerouslySetInnerHTML={{__html : item}}/>)}
        </div>
        <div className="left-image-row-container-l">
          <img className="lirc-img" src={image}/>
        </div>
    </div>
  )
}

export default RightImageRow