import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Specialties from "../components/Specialties"
import OnlineConsultation from "../components/OnlineConsultation"

export default function Home() {

  return (
    <Layout>
      <Hero />
      <Specialties/>
      <OnlineConsultation/>
    </Layout>
  )
}
