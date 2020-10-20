import React from 'react'
import Image from '../components/image.js'
import Layout from '../components/layout.js'
import variables from "../components/variables.js"
import BannerImage from "../components/bannerImage.js"
import MenuBar from "../components/menuBar.js"
import BannerText from "../components/bannerText.js"
import PageContent from "../components/pageContent.js"
import ContentFrame from "../components/contentFrame.js"
import Services from "../sections/services.js"
import ServicesTwo from "../sections/servicesTwo.js"
import Contact from "../components/contact/contact.js"
import { navigate } from "gatsby"

const GalleryGuts = ({ location }) => {
    return <h1>Hi from the second page,{console.log(location)} </h1>
}

export default GalleryGuts