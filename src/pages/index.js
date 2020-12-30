import React from "react"
// import style from "../style/index.module.scss"
import Layout from "../components/layout.js"
import variables from '../components/variables.js'
import BannerImage from '../components/bannerImage.js'
import MenuBar from '../components/menuBar.js'
import BannerText from '../components/bannerText.js'
import PageContent from '../components/pageContent.js'
import ContentFrame from '../components/contentFrame.js'
import Services from '../sections/services.js'
import ServicesTwo from '../sections/servicesTwo.js'
import Contact from '../components/contact/contact.js'


const Index = () => {
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText />
      <PageContent>
        <ContentFrame>
          {/* all page stuff goes inside contentFrame */}
          <Services />
        </ContentFrame>
        <ContentFrame>
          <ServicesTwo />
        </ContentFrame>
        <Contact />
      </PageContent>
    </Layout>
  ) 
}

export default Index;