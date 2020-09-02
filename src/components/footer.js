import React from 'react'
import variables from './variables.js'
import style from '../style/footer.module.scss'
import MenuItems from '../menu/menuItems'
import Image from "./image.js"

const imageStyle = {
  width: "90%",
  margin: "10px",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const Footer = () => {
    return (
      <div className={style.container}>
        <div className={style.menuItems}>
          <MenuItems />
        </div>
        <div className={style.logoContainerContainer}>
          <div className={style.logoContainer}>
            <Image
              path={{
                title: variables.logo,
                alt: "Mountain Home Logo",
                style: imageStyle,
                containerStyle: imageContainer,
              }}
            />
          </div>
        </div>
        <div className={style.avery}>
          <p>
            Mountain Home Exteriors, Inc © {new Date().getFullYear()}
          </p>
          <a href="https://www.averywebsites.com/">
            Design and Build by Avery Websites
          </a>
        </div>
      </div>
    )
}

export default Footer