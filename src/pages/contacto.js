import React from "react"
import Layout from "../components/Layout"
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms"
import { useForm } from "react-hook-form"
import SEO from "../components/SEO"

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  })

  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/#servicios",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data.")
    },
  })
  const onSubmit = data => netlify.handleSubmit(null, data)

  return (
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
        <Honeypot />

        <Layout>
          <SEO title="Contacto" description="Página de contacto" />
          <section className="contact-page">
            {netlify.success && (
              <p sx={{ variant: "alerts.success", p: 3 }}>
                Tu mensaje ha sido enviado, Gracias por contactarnos!
              </p>
            )}
            {netlify.error && (
              <p sx={{ variant: "alerts.muted", p: 3 }}>
                En este momento no es posible contactarnos, llámanos al (+57)
                317 525 1469
              </p>
            )}
            {!netlify.success && ( <article className="contact-form">
              <h3>Contacto</h3>
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
                  <div className="text-red-500 -mt-5">
                    {" "}
                    {errors.name.message}
                  </div>
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
                  <div className="text-red-500 -mt-5">
                    {errors.phone.message}
                  </div>
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
            </article>)}
          </section>
        </Layout>
      </NetlifyFormComponent>
    </NetlifyFormProvider>
  )
}

export default Contact
