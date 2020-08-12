import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Sobre mi"
        description="Sobre el Dr. William Izquierdo Vallecilla médico de Cali"
      />
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            fluid={fluid}
            className=" col-span-5"
            style={{ width: "100%" }}
          />
          <article className="about-text">
            <Title title="Sobre mi" />
            <p className="text-justify">
              El 
              <div className="inline-block font-black text-black">
                Dr. William Izquierdo Vallecilla
              </div>{" "}
              es un destacado 
              <div className="inline-block font-black text-black">
                especialista
              </div>
               en{" "}
              <div className="inline-block font-black text-black">
                Medicina Interna{" "}
              </div>
              cuenta con 27{" "}
              <div className="inline-block font-black text-black">
                años de experiencia
              </div>
               en diversas instituciones de prestigio en áreas de urgencia,
              hospitalización y consulta ambulatoria, tales como la Sociedad
              Médica del Pacífico en Cali y Clínica Colombia , sitios donde
              actualmente brinda consulta. Es egresado de la Universidad del
              Valle como 
              <div className="inline-block font-black text-black">
                Médico y Cirujano en 1993
              </div>{" "}
              y como{" "}
              <div className="inline-block font-black text-black">
                Especialista
              </div>
               en 
              <div className="inline-block font-black text-black">
                Medicina Interna 
              </div>{" "}
              en 1999, miembro de la sociedad colombiana de medicina interna
              ACMI y de la asociación colombiana de infectologia ACIN, además,
              ha trabajado como docente en medicina interna para diferentes
              universidades de la ciudad de Cali tales como Universidad del
              Valle, Universidad Santiago de Cali y Universidad libre. Desde el
              2006 trabaja en el programa de infectologia de vih/sida del Centro
              de especialista y diagnostico Cedit en la Clínica Colombia.
              Gracias a esta amplia trayectoria el 
              <div className="inline-block font-black text-black">
                Dr. William Izquierdo Vallecilla
              </div>{" "}
              es reconocido como uno de los mejores 
              <div className="inline-block font-black text-black">
                especialistas en Medicina Interna
              </div>{" "}
              en Cali.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "william-izquierdo.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
