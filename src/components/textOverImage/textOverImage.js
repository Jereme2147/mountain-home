import React from 'react'
import variables from '../../components/variables.js'
import Image from './textImage.js'
import style from './textOverImage.module.scss'

// pass in picture path, text to go over, and alt

//leave these variables like this unless you must change them.  Image size is controled
// by css
const imageStyle = {
  width: "100%",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const TextOverImage = ({ pic, text, alt}) => {
    return (
      // image size is set in css .container
      <div className={style.container}>
        <span>
          <p>{text}</p>
        </span>
        <div className={style.img}>
          <Image
            path={{
              title: pic,
              alt: alt,
              style: imageStyle,
              containerStyle: imageContainer,
            }}
          />
        </div>
      </div>
    )
}

export default TextOverImage
