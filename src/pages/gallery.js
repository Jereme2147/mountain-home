// takes a passed in tag that it in turn passes to gallery guts.
// the idea is reproducing a paged based on image tags
import React from "react"
import Layout from "../components/layout.js"
import variables from "../components/variables.js"
import BannerImage from "../components/bannerImage.js"
import MenuBar from "../components/menuBar.js"
import BannerText from "../components/bannerText.js"
import ContentFrame from "../components/contentFrame.js"
import Contact from "../components/contact/contact.js"
import PageContent from '../components/pageContent.js'
import GalleryGuts from '../gallery/gallery-guts.js'

const Gallery = ( {location} ) => {
  const { state = {} } = location
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText text="Gallery"/>
      <PageContent>
        <ContentFrame>
          <GalleryGuts tag={ state.tag } />
        </ContentFrame>
        <Contact />
      </PageContent>
    </Layout>
  )
}

export default Gallery
