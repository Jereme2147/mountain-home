//To add services to the
//roofing section, add to contentful section 1 service. 
import React from 'react'
import style from '../style/services.module.scss'
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { Link } from "gatsby"

const imageStyle = {
  width: "100%",
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
                description
                file {
                  url
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
        {data.allContentfulSection1Service.edges.map(item => {
          return (
            <div className={style.serviceContainer}>
              <div className={style.imgContainer}>
                <a href={item.node.featuredImage[0].file.url} target="__BLANK">
                  <Img
                    key={item.node.id}
                    fluid={item.node.featuredImage[0].fluid}
                    alt={item.node.featuredImage[0].description}
                    style={imageStyle}
                  />
                </a>
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
          <Link to="/gallery/" state={{ tag: 'dicks'}}>
            #test
          </Link>
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