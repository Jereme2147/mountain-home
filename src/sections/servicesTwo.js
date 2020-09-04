//can be deleted.  created for to build reusable compoenent
import React from 'react'
import style from '../style/servicesTwo.module.scss'
import variables from '../components/variables.js'
import TextOverImage from "../components/textOverImage/textOverImage.js"


const Services = () => {
    return (
      <div className={style.container}>
        <h2>
          <span>-</span> PROFESSIONAL SERVICES (option 2)<span>-</span>
        </h2>
        <div className={style.serviceContainer}>
          <div className={style.imgContainer}>
            <TextOverImage
              pic={variables.greenRoof1.file}
              text={variables.greenRoof1.text}
              alt={variables.greenRoof1.textAlt}
            />
            <TextOverImage
              pic={variables.greenRoof2.file}
              text={variables.greenRoof2.text}
              alt={variables.greenRoof2.textAlt}
            />
            <TextOverImage
              pic={variables.greenRoof3.file}
              text={variables.greenRoof3.text}
              alt={variables.greenRoof3.textAlt}
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