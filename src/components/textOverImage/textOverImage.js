import React from 'react'
import style from './textOverImage.module.scss'
import Img from "gatsby-image"

// pass in picture path, text to go over, url, and alt
//leave these variables like this unless you must change them.  Image size is controled
// by css
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const TextOverImage = ({ pic, text, alt, url}) => {
    return (
      // image size is set in css .container
      <div className={style.container}>
          <span>
            <p>{text}</p>
          </span>
        <a href={url} target="__BLANK" className={style.img}>
          <Img key={pic} fluid={pic} alt={alt} style={imageContainer} />
        </a>
      </div>
    )
}

export default TextOverImage
