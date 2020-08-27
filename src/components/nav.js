//only contains LOGO and Hamburger only
import React from 'react'
import style from '../style/nav.module.scss'
import variables from './variables.js'
import Image from './image.js'
import Hamburger from './hamburger.js'

//logo container is adjusted in css
const imageStyle = {
    width: '90%',
    margin: '10px'
}
const imageContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}
const Nav = () => {
    return (
      <div className={style.navContainer}>
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
        <div className={style.hamburgerDiv}> 
            <Hamburger />
        </div>
      </div>
    )
}

export default Nav 