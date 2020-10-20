//not used, just here for storage and re-use later
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//pass title, ALT as text, style as object in as object. See ServiceList
//full passed in components: "path" "alt text" {style.image} {style.container}
//** consider adjusting container size in CSS and pass in 100% for this container */
// typical usage syntax. copy paste, edit variables
// <Image
//   path={{
//     title: pic,(path)
//     alt: alt,
//     style: imageStyle,(usually 100% width)
//     containerStyle: imageContainer(usually the same),
//   }}
// />
const TextImage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 600, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
            originalName
          }
        }
      }
    }
  `)
  // //****** this works for choosing passed in image!!! only 5 fucking hours! */
  return (
    <div style={path.containerStyle}>
      {data.allImageSharp.nodes.map(item => {
        if (item.fluid.originalName === path.title) {
          return (
            <Img
              key={path.title}
              fluid={item.fluid}
              alt={path.alt}
              style={path.style}
            />
          )
        }
      })}
    </div>
  )
}

export default TextImage
