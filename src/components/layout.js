import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import style from '../style/layout.module.scss'


const Layout = ({ children }) => {

    return (
        // <>
            <div className={style.main}>
                THIS IS THE LAYOUT 
            </div>
        // {/* </> */}
    )
}

export default Layout