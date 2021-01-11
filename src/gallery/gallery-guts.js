// gallery in contentful gets tagged and called here.  This recieves a "tag" 
// from gallery.js which recieves a "tag" from services.js.  To change tags, 
// go to services.
// all styles and content are edited here. 
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import variables from "../components/variables.js"
import style from "./gallery-guts.module.scss"

const GalleryGuts = ({ tag }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        nodes {
          title
          id
          tags
          picture {
            title
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              details {
                image {
                  height
                  width
                }
              }
              url
            }
            id
            description
          }
        }
      }
    }
  `)
  
  return (
    <div className={style.container}>
      {/* {console.log(height, width)} */}
      {/* <h2>{tag}</h2> */}
      {console.log(data.allContentfulGallery.nodes)}
      {data.allContentfulGallery.nodes.map(item => {
        const str = String(item.tags) // object to string
        if (str.includes(tag)) {
          return (
            <div>
              <h2>{item.title}</h2>
              <div className={style.picContainer}>
                {item.picture.map(thing => {
                  // these lines basically take care of images that are portrait
                  const height = thing.file.details.image.height
                  const width = thing.file.details.image.width
                  const ratio = width / height
                  return (
                    <div
                      className={ratio >= 1 ? style.imageBox : style.imageBox2}
                    >
                      <h3 className={style.picTitle}>{thing.description ? thing.description : ''}</h3> 
                      <a href={thing.file.url} target="__BLANK">
                        <Img
                          key={thing.id}
                          fluid={thing.fluid}
                          alt="roof pictures"
                          className={style.img}
                        />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default GalleryGuts
