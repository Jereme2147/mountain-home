import React from "react"
import style from '../style/contentFrame.module.scss'
// independant of anything. pageContent sets the position. Call whatever section 
// from within the page this is called from.  This is for universal styling. 

const ContentFrame = ({ children }) => {
    return (
        <div className={style.frameContainer}>
            { children }
        </div>
    )
}

export default ContentFrame;