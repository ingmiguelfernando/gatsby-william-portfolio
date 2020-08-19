import React from "react"
import Layout from "../components/Layout"
import { useForm } from "react-hook-form"
import SEO from "../components/SEO"

const Contact = () => {
  const { register, errors } = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
  })


  return (
    <Layout>
      <SEO title="Contacto" description="Página de contacto" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contacto</h3>
          <form
            name="contact"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input
                type="text"
                placeholder="nombre"
                name="name"
                className="form-control"
                ref={register({
                  required: "ingresa tu nombre",
                })}
              />

              {errors.name && (
                <div className="text-red-500 -mt-5"> {errors.name.message}</div>
              )}

              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                ref={register({
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "email incorrecto",
                  },
                })}
              />

              {errors.email && (
                <div className="text-red-500 -mt-5">
                  {" "}
                  {errors.email.message}
                </div>
              )}

              <input
                type="text"
                placeholder="teléfono o WhatsApp"
                name="phone"
                className="form-control"
                ref={register({
                  required: "ingresa tu número telefónico o celular",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                    message: "ingresa un número válido",
                  },
                })}
              />

              {errors.phone && (
                <div className="text-red-500 -mt-5">{errors.phone.message}</div>
              )}

              <textarea
                name="message"
                rows="5"
                placeholder="mensaje"
                className="form-control"
                ref={register({
                  required: "ingresa un mensaje",
                })}
              />
              <div className="text-red-500 -mt-5">
                {errors.message && errors.message.message}
              </div>
            </div>
            <button type="submit" className="submit-btn btn">
              enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
