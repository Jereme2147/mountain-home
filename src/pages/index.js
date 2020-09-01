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

const Index = () => {
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText />
      <PageContent>
        {/* contentFrame with BBB and insuarnce type stuff */}
        <ContentFrame>
          <Services />
        </ContentFrame>
      </PageContent>
    </Layout>
  ) 
}

export default Index;