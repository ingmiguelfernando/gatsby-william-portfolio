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
              El Dr. William Izquierdo Vallecilla es especialista en Medicina
              Interna egresado de la Universidad del Valle, cuenta con 27 años
              de experiencia laboral en diversas instituciones de prestigio de
              la ciudad de Cali, en áreas de urgencia, hospitalización y
              consulta ambulatoria, tales como la Sociedad Médica del Pacífico y
              Clínica Colombia , sitios donde actualmente brinda consulta. Es
              egresado de la Universidad del Valle como Médico y Cirujano en
              1993 y como Especialista en Medicina Interna en 1999, miembro de
              la sociedad Colombiana de medicina interna(ACMI) y de la
              asociación Colombiana de infectologia (ACIN), además, ha trabajado
              como docente en medicina interna para diferentes universidades de
              la ciudad de Cali tales como Universidad del Valle, Universidad
              Santiago de Cali y Universidad libre. Desde el año 2000 brinda
              consulta ambulatoria en la Sociedad Médica del Pacífico y desde el
              2006 trabaja en el programa de infectologia de VIH/SIDA del Centro
              de Especialista y Diagnostico (Cedit) en la Clínica Colombia.
              Gracias a esta amplia trayectoria el Dr. William Izquierdo
              Vallecilla es reconocido como un destacado especialista en
              Medicina Interna de la ciudad de Cali.
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
