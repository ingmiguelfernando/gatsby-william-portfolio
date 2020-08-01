import React from "react"
import { Link } from "gatsby"
// import { Link as LinkScroll } from "react-scroll"
// import scrollTo from "gatsby-plugin-smoothscroll"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const data = [
  {
    id: 1,
    text: "inicio",
    url: "/",
  },
  {
    id: 2,
    text: "especialidades",
    url: "/#especialidades",
  },
  {
    id: 3,
    text: "sobre mi",
    url: "/sobre-mi/",
  },
  {
    id: 4,
    text: "contacto",
    url: "/contacto/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
