import React from "react"
import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
const data = [
  {
    id: 1,
    text: "inicio",
    url: "/",
  },
  {
    id: 2,
    text: "especialidades",
    section: "especialidades",
  },
  {
    id: 3,
    text: "sobre mi",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contacto",
    url: "/contacto/",
  },
]

const GetLinkObject = (link) => {
  if(link.url){
    return <Link to={link.url}>{link.text}</Link>
  }else{
    return (
      <LinkScroll
        className="cursor-pointer"
        to={link.section}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {link.text}
      </LinkScroll>
    )
  }
}

const tempLinks = data.map(link => {
  return <li key={link.id}>{GetLinkObject(link)}</li>
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
