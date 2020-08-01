import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    file(relativePath: { eq: "tele-medicine.png" }) {
      id
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const OnlineConsultation = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="section"
      className="section online-consultation"
      fluid={fluid}
    >
      <article className="md:ml-32 lg:ml-32 xl:ml-32 mx-10  align-middle grid md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-3 sm:grid-cols-1 mt-16">
        <div>
          <h2>Consulta Médica sin salir de casa</h2>
          <div className="underline"></div>
          <h4 className="text-gray-600 normal-case text-justify">
            En la mayoría de los casos, la consulta inicial será suficiente. En
            casos más complicados, puede ser necesaria una segunda consulta presencial.
          </h4>

          <Link to="/contacto" className="btn">
            pide tu cita
          </Link>
        </div>
      </article>
    </BackgroundImage>
  )
}

export default OnlineConsultation
