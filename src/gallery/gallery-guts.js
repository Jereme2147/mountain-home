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
          id
          tags
          picture {
            title
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
            }
            id
          }
        }
      }
    }
  `)
  const style = {
    width: "100px",
    height: "100px",
  }
  return (
    <div>
      <h2>{tag}</h2>
      {data.allContentfulGallery.nodes.map(item => {
        const str = String(item.tags) // object to string
        if (str.includes(tag)) {
          console.log("here 1")
          return (
            <div>
              {item.picture.map(thing => {
                return (
                  <div style={style}>
                    <h1>{item.tags}</h1>
                    <a href="#" target="__BLANK">
                      <Img
                        key={thing.id}
                        fluid={thing.fluid}
                        alt="test"
                        style={style}
                      />
                    </a>
                  </div>
                )
                
              })} 
            </div>
          )
         
        
          // return (
          //   <div style={style}>
          //     <h1>{item.tags}</h1>
          //     {/* <a href={item.picture.file.url} target="__BLANK"> */}
          //     <a href="#" target="__BLANK">
          //       <Img
          //         key={item.picture.id}
          //         fluid={item.picture.fluid}
          //         alt="test"
          //         style={style}
          //       />
          //     </a>
          //   </div>
          // )
        }
      })}
    </div>
  )
}

export default GalleryGuts
