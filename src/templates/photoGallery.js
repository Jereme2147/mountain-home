import React from "react"
import Layout from "../components/layout.js"
import variables from "../components/variables.js"
import BannerImage from "../components/bannerImage.js"
import MenuBar from "../components/menuBar.js"
import BannerText from "../components/bannerText.js"
import ContentFrame from "../components/contentFrame.js"
import Contact from "../components/contact/contact.js"
import PageContent from "../components/pageContent.js"
import style from "./photoGallery.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
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
`
//from here to "return" is just sorting the data so that it sorts from A-Z by 
//the first letter of the picture file name. ie a-before-blabla.jpg
const PhotoGallery = props => {
  let pic = []
  props.data.contentfulGallery.picture.map(item => { 
    pic.push(item.title.toUpperCase())
  })
  let pic2 = []
  for (let x = 0; x < pic.length; x++) {
    pic2.push(pic[x].split(" "))
  }
  pic2.sort()
  for (let y = 0; y < pic2.length; y++) {
    pic2[y] = pic2[y].join(" ")
  }
  let sorted = [] //final array to push item back in to
  for(let i = 0; i < pic2.length; i++){ 
    for (let j = 0; j < props.data.contentfulGallery.picture.length; j++) {
      //comparing the sorted to caps data to the original so I can push the 
      //whole object into the new "sorted" array
      if(pic2[i] == props.data.contentfulGallery.picture[j].title.toUpperCase()){
        sorted.push(props.data.contentfulGallery.picture[j]);
      }
    }
  }
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText text={props.data.contentfulGallery.title} />
      <PageContent>
        <ContentFrame>
          <div className={style.container}>
            {/* <h2>{props.data.contentfulGallery.title}</h2> */}
            {
              sorted.map(item => {
                // these lines basically take care of images that are portrait
                const height = item.file.details.image.height
                const width = item.file.details.image.width
                const ratio = width / height
                return (
                  <div
                    className={ratio >= 1 ? style.imageBox : style.imageBox2}
                    key={item.id + 10}
                  >
                    <h3 className={style.picTitle}>
                      {item.description ? item.description : ""}
                    </h3>
                    <a href={item.file.url} target="__BLANK">
                      <Img
                        key={item.id}
                        fluid={item.fluid}
                        alt="roof pictures"
                        className={style.img}
                      />
                    </a>
                  </div>
                )
              })
            }
          </div>
        </ContentFrame>
        <Contact />
      </PageContent>
    </Layout>
  )
}

export default PhotoGallery
