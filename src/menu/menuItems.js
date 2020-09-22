// imports pages from variables. 
// style is done in css for file calling this
//Needs "link"
import React from 'react'
// import variables from '../components/variables'
import { Link } from "gatsby"

const menuItems = () => {
    return (
      <ul>
        <li>
          <h2>
            <Link to="/Portfolio">Portfolio</Link>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#services">Services</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#contactUs">Contact</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#contactUs">Something</a>
            {/* maybe some credentials? */}
          </h2>
        </li>
      </ul>
    )
}

export default menuItems

// older code that uses an arrary from variables.  Works great, not really needed
// in this case. 

// const menuItems = () => {
//   return (
//     <ul>
//       {variables.pages.map(page => {
//         return (
//           <li>
//             <h2>{page}</h2>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }