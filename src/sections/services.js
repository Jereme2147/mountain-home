//To add services to the
//roofing section, add to contentful section 1 service. 
//to add tags, add a gallery in contentful.
import React from 'react'
import style from '../style/services.module.scss'
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
                id
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
        allContentfulGallery {
          nodes {
            tags
            id
          }
        }
      }
    `)
    return (
      <div className={style.container}>
        <h2 id="services">
          <span>-</span> Professional Roofing Services <span>-</span>
        </h2>
        {data.allContentfulSection1Service.edges.map(item => {
          return (
            <div className={style.serviceContainer} key={item.node.id}>
              <div className={style.imgContainer}>
                <a href={item.node.featuredImage[0].file.url} target="__BLANK">
                  <Img
                    key={item.node.featuredImage[0].id}
                    fluid={item.node.featuredImage[0].fluid}
                    alt={item.node.featuredImage[0].description}
                    style={imageStyle}
                  />
                </a>
              </div>
              <div className={style.description}>
                <p className={style.title}>{item.node.title}</p>
                <div className={style.explain}> 
                {/* changed this from P to Div */}
                  {documentToReactComponents(
                    item.node
                      .childContentfulSection1ServiceSection1ItemContentRichTextNode
                      .json
                  )}
                </div>
              </div>
            </div>
          )
          //
        })}
        <div className={style.tags}>
          {/* These are dynamicly loaded.  To add galleries, add to contentful */}
          <h2 id="galleries">Galleries</h2>
          {data.allContentfulGallery.nodes.map(thing => {
            return (
              <Link
               to="/gallery/"
               state={{tag: thing.tags}}
               key={thing.id}
              >
                <h3>{thing.tags}</h3>
              </Link>

            )
          })}
        </div>
      </div>
    )
}

export default Services