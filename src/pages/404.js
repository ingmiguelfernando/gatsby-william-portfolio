import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Página no encontrada</h1>
          <Link to="/" className="btn">
            regresar al inicio
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
