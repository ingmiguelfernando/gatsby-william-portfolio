import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialties from "../components/Specialties"
import OnlineConsultation from "../components/OnlineConsultation"
import SEO from "../components/SEO"
import InternalMedicine from "../components/InternalMedicine"

export default function Home() {

  return (
    <Layout>
      <SEO title="Inicio" description="Página de inicio" />
      <Hero />
      <InternalMedicine/>
      <Specialties />
      <OnlineConsultation />
    </Layout>
  )
}
