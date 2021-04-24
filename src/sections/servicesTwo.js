//can be deleted.  created for to build reusable compoenent
import React from 'react'
import style from '../style/servicesTwo.module.scss'
// import variables from '../components/variables.js'
// import TextOverImage from "../components/textOverImage/textOverImage.js"
// import { graphql, useStaticQuery } from "gatsby"


const Services = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulNotRoofingSection {
  //       edges {
  //         node {
  //           id
  //           serviceTitle
  //           serviceImage {
  //             fluid(maxWidth: 600, quality: 50) {
  //               ...GatsbyContentfulFluid_withWebp
  //             }
  //             title
  //             id
  //             file {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
    return (
      <div className={style.container} id="otherServices">
        <h2>
          <span>-</span> Other Professional Services <span>-</span>
        </h2>
        <div className={style.serviceContainer}>
          {/* <div className={style.imgContainer}>
            {data.allContentfulNotRoofingSection.edges.map(item => {
              return (
                <TextOverImage
                  pic={item.node.serviceImage.fluid}
                  alt={item.node.serviceImage.title}
                  text={item.node.serviceTitle}
                  url={item.node.serviceImage.file.url}
                  key={item.node.serviceImage.id}
                />
              )
            })}
          </div> */}
          <div className={style.description}>
            <p className={style.title}>Professional Services</p>
            <p className={style.explain}>
              With anything home improvement, it is the constant case that one
              component of the home will tie into another component. Therefore
              it pays to be versatile. Mountain Home Exteriors maintains a well
              rounded knowledge in many areas and offers services in siding,
              decking and handrails, interior work, carpentry, and much more. So
              if there is a lingering project around the house, feel free to
              ask!{"  "}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Services