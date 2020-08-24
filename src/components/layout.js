import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import style from '../style/layout.module.scss'


const Layout = ({ children }) => {

    return (
        // <>
            <div className={style.main}>
                <div>
                    {children}
                </div>
            </div>
        // {/* </> */}
    )
}

export default Layout