// gallery in contentful gets tagged and called here.  This recieves a "tag" 
// from gallery.js which recieves a "tag" from services.js.  To change tags, 
// go to services.
// all styles and content are edited here. 
// ALL IMAGES ARE SORTED VIA TITLE. IE A1, A2 SHOULD BE A BEFORE AND AFTER
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import variables from "../components/variables.js"
import style from "./gallery-guts.module.scss"

const GalleryGuts = ({ tag }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery(sort: { fields: picture___title, order: ASC }) {
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
      {data.allContentfulGallery.nodes.map(item => {
        const str = String(item.tags) // object to string
        if (str.includes(tag)) {
          //most of this horseshit is to sort the pictures from a - a by first letter and not word
          let pic = [];
          for (let i = 0; i < item.picture.length; i++) {
            pic.push(item.picture[i].title.toUpperCase())
          }
          let pic2 = [];
          for (let x = 0; x < pic.length; x ++){
            pic2.push(pic[x].split(' '));
          }
          pic2.sort()
          for (let y = 0; y < pic2.length; y++) {
            pic2[y] = pic2[y].join(" ")
          }
          let sorted = []; //final array to push item back in to
          for (let j = 0; j < pic2.length; j ++) {
            for (let k = 0; k < item.picture.length; k ++) {
              if ( item.picture[k].title.toUpperCase() == pic2[j]){
                sorted[j] = item.picture[k];
              }
              
            }
          }
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <div className={style.picContainer}>
                { // mapping through the sorted images
                  sorted.map(thing => {
                  // these lines basically take care of images that are portrait
                  const height = thing.file.details.image.height
                  const width = thing.file.details.image.width
                  const ratio = width / height
                  return (
                    <div
                      className={ratio >= 1 ? style.imageBox : style.imageBox2}
                      key={thing.id+10}
                    >
                      <h3 className={style.picTitle}>
                        {thing.description ? thing.description : ""}
                      </h3>
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
