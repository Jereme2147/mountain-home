import React from 'react'
import style from '../style/services.module.scss'
import Image from '../components/image.js'
import variables from '../components/variables.js'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const imageStyle = {
  width: "100%",
}
const imageContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
}
//can now be sorted by order
const Services = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulSection1Service(sort: { fields: order }) {
          edges {
            node {
              id
              title
              featuredImage {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              childContentfulSection1ServiceSection1ItemContentRichTextNode {
                json
              }
            }
          }
        }
      }
    `)
    return (
      <div className={style.container}>
        <h2>
          <span>-</span> Professional Roofers <span>-</span>
        </h2>
        {console.log(data)}
        {data.allContentfulSection1Service.edges.map(item => {
          return (
            <div className={style.serviceContainer}>
              <div className={style.imgContainer}>
                <Img
                  key={item.node.id}
                  fluid={item.node.featuredImage[0].fluid}
                  alt="test"
                  style={imageStyle}
                />
              </div>
              {console.log(item)}
              <div className={style.description}>
                <p className={style.title}>{item.node.title}</p>
                <p className={style.explain}>
                  {documentToReactComponents(
                    item.node
                      .childContentfulSection1ServiceSection1ItemContentRichTextNode
                      .json
                  )}
                </p>
              </div>
            </div>
          )
          //
        })}
        <div className={style.tags}>
          <h2>Choose a gallery</h2>
          {/* These should be dynamically loaded after all info is in contentful */}
          <a href="#">
            <h3>#cedar-shake</h3>
          </a>
          <a href="#">
            <h3>#metal-roof</h3>
          </a>
          <a href="#">
            <h3>#repairs</h3>
          </a>
          <a href="#">
            <h3>#shingles</h3>
          </a>
        </div>
      </div>
    )
}

export default Services