import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import stacks from "../constants/stacks"
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
      <SEO title="Sobre mi" description="Sobre el Dr. William Izquierdo Vallecilla médico de Cali"/>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className=" col-span-5" style={{width:"100%"}}/>
          <article className="about-text">
            <Title title="Sobre mi" />
            <p className="text-justify">
              El Dr. William Izquierdo Vallecilla  es un
              destacado especialista en  Medicina Interna cuenta con 27 años de
              experiencia en diversas instituciones de prestigio en áreas de
              urgencia, hospitalización y consulta ambulatoria, tales como la Sociedad
              Médica del Pacífico en Cali y Clínica Colombia , sitios donde
              actualmente brinda consulta. Es egresado de la Universidad del
              Valle como Médico y Cirujano en 1993 y como Especialista
               en Medicina Interna  en 1999, miembro de la sociedad colombiana
              de medicina interna ACMI y de la asociación colombiana de
              infectologia, además, ha trabajado como docente en medicina
              interna para diferentes universidades de la ciudad de Cali tales
              como Universidad del Valle, Universidad Santiago de Cali y
              Universidad libre. Desde el 2006 trabaja en el programa de
              infectologia de vih/sida del Centro de especialista y diagnostico
              Cedit en la Clínica Colombia. Gracias a esta amplia trayectoria
              el Dr. William Izquierdo Vallecilla es reconocido como uno de los
              mejores especialistas en Medicina Interna en Cali.
            </p>
            <div className="about-stack">
              {stacks.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
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
