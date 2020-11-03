import React from 'react'
import MenuItems from './menuItems.js'
import style from '../style/mobileMenu.module.scss'
import Image from '../components/image.js'
import variables from '../components/variables.js'

const imageStyle = {
  width: "70%",
  margin: "10px",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const MobileMenu = () => {
    return (
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            path={{ 
              title: variables.logo,
              alt: "Mountain Home Logo",
              style: imageStyle,
              containerStyle: imageContainer,
            }}
          />
        </div>
        <MenuItems />
      </div>
    )
}
export default MobileMenu