import React from 'react'
import style from '../style/menuBar.module.scss'
import MenuItems from '../menu/menuItems.js'

const MenuBar = () => {
    return (
        <div className={style.container}>
            <MenuItems />
        </div>
    )
}

export default MenuBar