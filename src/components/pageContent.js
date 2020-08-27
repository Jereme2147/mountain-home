import React from 'react'
import style from '../style/pageContent.module.scss'

const PageContent = ( { children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
export default PageContent