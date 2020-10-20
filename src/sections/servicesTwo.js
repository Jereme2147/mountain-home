//can be deleted.  created for to build reusable compoenent
import React from 'react'
import style from '../style/servicesTwo.module.scss'
import variables from '../components/variables.js'
import TextOverImage from "../components/textOverImage/textOverImage.js"
import { graphql, useStaticQuery } from "gatsby"


const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNotRoofingSection {
        edges {
          node {
            id
            serviceTitle
            serviceImage {
              fluid(maxWidth: 600, quality: 50) {
                ...GatsbyContentfulFluid_withWebp
              }
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
    return (
      <div className={style.container}>
        <h2>
          <span>-</span> Other Professional Services <span>-</span>
        </h2>
        <div className={style.serviceContainer}>
          <div className={style.imgContainer}>
            {data.allContentfulNotRoofingSection.edges.map(item => {
              return (
                <TextOverImage 
                 pic= {item.node.serviceImage.fluid}
                 alt= {item.node.serviceImage.title}
                 text= {item.node.serviceTitle}
                 url= {item.node.serviceImage.file.url}
                />
              )
            })}
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