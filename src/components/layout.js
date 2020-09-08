//try not to put anything else here. 
// side menu show/not show is taken care of in laytout css
import React from 'react'
import style from '../style/layout.module.scss'
import Nav from '../components/nav.js'
import Footer from '../components/footer.js'
import Head from '../components/head.js'


const Layout = ({ children }) => {

    return (
            <div className={style.main}>
                <Head title={"Home"}/>
               <Nav />
                <div className={style.container}>
                    {children}
                </div>
                <Footer className={style.footer}/>
            </div>
    )
} 

export default Layout