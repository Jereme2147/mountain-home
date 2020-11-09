import React from "react"
// import style from "../style/index.module.scss"
import Layout from "../components/layout.js"
import variables from '../components/variables.js'
import BannerImage from '../components/bannerImage.js'
import MenuBar from '../components/menuBar.js'
import BannerText from '../components/bannerText.js'
import PageContent from '../components/pageContent.js'
import ContentFrame from '../components/contentFrame.js'
import Contact from '../components/contact/contact.js'

const style = {
  fontSize: "2rem",
  color: variables.white,
  margin: "60px 0",
  width: "100%",
  textAlign: "center"
}
const Index = () => {
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText text="Sorry we can't find this page" />
      <PageContent>
        <ContentFrame>
          <h2 style={style}>We coudln't find what you were looking for.</h2>
        </ContentFrame>
        <Contact />
      </PageContent>
    </Layout>
  ) 
}

export default Index;