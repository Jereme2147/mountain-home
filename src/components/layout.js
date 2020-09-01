//try not to put anything else here. 
// side menu show/not show is taken care of in laytout css
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import style from '../style/layout.module.scss'
import Nav from '../components/nav.js'


const Layout = ({ children }) => {

    return (
            <div className={style.main}>
               <Nav />
                <div className={style.container}>
                    {children}
                </div>
            </div>
    )
} 

export default Layout