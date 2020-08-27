import React from "react"
// import style from "../style/index.module.scss"
import Layout from "../components/layout.js"
import variables from '../components/variables.js'
import BannerImage from '../components/bannerImage.js'
import MenuBar from '../components/menuBar.js'
import BannerText from '../components/bannerText.js'
import PageContent from '../components/pageContent.js'

const Index = () => {
  return (
    <Layout>
      <MenuBar />
      <BannerImage banner={variables.landingImage} />
      <BannerText />
      <PageContent>
        <h1>here we have some stuff</h1>
      </PageContent>
    </Layout>
  ) 
}

export default Index;