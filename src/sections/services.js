import React from 'react'
import style from '../style/services.module.scss'
import Image from '../components/image.js'
import variables from '../components/variables.js'

const imageStyle = {
  width: "100%",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
const Services = () => {
    return (
      <div className={style.container}>
        <h2><span>-</span> PROFESSIONAL SERVICES <span>-</span></h2>
        <div className={style.serviceContainer}>
          <div className={style.imgContainer}>
            <Image
              path={{
                title: variables.greenRoof1.file,
                alt: variables.greenRoof1.textAlt,
                style: imageStyle,
                //   containerStyle: imageContainer,
              }}
            />
          </div>
          <div className={style.description}>
            <p className={style.title}>Title One</p>
            <p className={style.explain}>
              Descrittion of service goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lacus vel facilisis volutpat est
              velit. Sapien eget mi proin sed libero enim. Ac feugiat sed lectus
              vestibulum mattis ullamcorper. Lorem ipsum dolor sit amet
              consectetur adipiscing elit. Urna condimentum mattis pellentesque
              id nibh tortor id. Nunc mattis enim ut tellus elementum sagittis
              vitae et. Dolor purus non enim praesent elementum.{" "}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Services