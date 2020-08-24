import React from "react"
// import style from "../style/index.module.scss"
import Layout from "../components/layout.js"
import variables from '../components/variables.js'
import BannerImage from '../components/bannerImage.js'

export default function Home() {
  return (
    <Layout>
      <BannerImage banner={variables.landingImage}/>
    </Layout>
  )
}
