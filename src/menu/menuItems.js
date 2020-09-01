// imports pages from variables. 
// style is done in css for file calling this
//Needs "link"
import React from 'react'
import variables from '../components/variables'

const menuItems = () => {
    // const pages = ["Portfolio", "Services", "Contact"]
    return (
      <ul>{variables.pages.map(page => {
       return (
         <li>
           <h2>{page}</h2>
         </li>
       )
       
      })}</ul>
    )
}

export default menuItems