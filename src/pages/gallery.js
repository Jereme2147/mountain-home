import React from "react"
import Image from "../components/image.js"
import Layout from "../components/layout.js"
import variables from "../components/variables.js"
import BannerImage from "../components/bannerImage.js"
import MenuBar from "../components/menuBar.js"
import BannerText from "../components/bannerText.js"
import ContentFrame from "../components/contentFrame.js"
import Contact from "../components/contact/contact.js"
import PageContent from '../components/pageContent.js'
import GalleryGuts from '../gallery/gallery-guts.js'

const Gallery = ( tag ) => {
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText />
      <PageContent>
        <ContentFrame>
          <GalleryGuts tag={ tag } />
          
        </ContentFrame>
        <Contact />
      </PageContent>
    </Layout>
  )
}

export default Gallery
