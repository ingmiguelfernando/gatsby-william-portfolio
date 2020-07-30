import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      id
      childImageSharp {
        fluid(maxHeight: 550, maxWidth: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2>William</h2>
            <h2>izquierdo Vallecilla</h2>
            <h4>especialista en medicina interna con más</h4>
            <h4>de 27 años de experiencia</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img ml-10"></Image>
      </section>
    </header>
  )
}

export default Hero
