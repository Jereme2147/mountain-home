import React from 'react'
import variables from './variables.js'
import style from '../style/bannerImage.module.scss'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const BannerImage = ({ banner }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1900, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `) 
  return (
    <div className={style.imageContainer}>
      {data.allImageSharp.nodes.map(item => {
        if (item.fluid.originalName === banner) {
          return (
            <div className={style.image} key={banner}>
              <Img fluid={item.fluid} key={item.fluid.originalName} />
            </div>
          )
        } else {
          return <div key={item.fluid.originalName}></div>
        }
      })}
    </div>
  )
}

export default BannerImage