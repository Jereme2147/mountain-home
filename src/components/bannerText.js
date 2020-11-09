import React from 'react'
import style from '../style/bannerText.module.scss'
//pass in "text" ie 404 page or whatever
const BannerText = ({text}) => {
    return (
        <div className={style.container}>
            <h2>(828)<span>260</span>-1642</h2>
            <h1>Mountain Home Exteriors, Inc</h1>
            <h2><span>{text}</span></h2>
        </div>
    )
}

export default BannerText