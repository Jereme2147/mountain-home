import React from 'react'
import style from './textOverImage.module.scss'
import Img from "gatsby-image"
import { Link } from 'gatsby'

// pass in picture path, text to go over, url, and alt
//leave these variables like this unless you must change them.  Image size is controled
// by css

// important: "tag" comes in from services, goes as state to
// the "link" of gallery and gallery is generated with this
// variable
// state={{tag: thing.tags}} is how it WAS coming in from services. 
// just fyi for later.
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const TextOverImage = ({ pic, text, alt, url, tag}) => {
    return (
      // image size is set in css .container
      <div className={style.container}>
        <span>
          <p>{text}</p>
        </span>
        <Link to={`/gallery/`} state={tag}className={style.img}>
          <Img key={pic} fluid={pic} alt={alt} style={imageContainer} />
        </Link>
      </div>
    )
}
export default TextOverImage
