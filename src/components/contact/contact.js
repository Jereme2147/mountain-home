import React from 'react'
import style from '../../style/contact.module.scss'
import LargeImage from '../largeImage.js'
import variables from '../variables.js'
import Form from './form.js'

const imageStyle = {
  width: "90%",
  margin: "10px",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const Contact = () => {
    return (
      <div className={style.container} id="contactUs">
        <div className={style.divider}></div>
        <div className={style.onlyDesktop}>
          <div className={style.imageContainer}>
            <LargeImage
              path={{
                title: variables.contactRoof,
                alt: "Mountain Home Logo",
                style: imageStyle,
                containerStyle: imageContainer,
              }}
            />
            <h2>
              <span>-</span>CONTACT<span>-</span>
            </h2>
          </div>
        </div>

        <div className={style.mountainInfo}>
          <h2>Mountain Home Exteriors, Inc</h2>
          <h3>
            <a href="phone:8282601642">(828)260-1642</a>
          </h3>
          <h3>
            <a href="mailto:mountainhomeext@gmail.com">
              mountainhomeext@gmail.com
            </a>
          </h3>
        </div>
        <Form />
      </div>
    )
}

export default Contact