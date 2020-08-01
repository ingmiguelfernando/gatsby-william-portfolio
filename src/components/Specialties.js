import React from "react"
import Title from "./Title"
import specialties from "../constants/specialties"
import { motion } from "framer-motion"

const Specialties = () => {
  return (
    <section className="section bg-grey" id="especialidades">
      <Title title="Especialidades" />
      <div className="section-center services-center">
        {specialties.map(specialtie => {
          const { id, icon, title, text } = specialtie
          return (
            <motion.article
              key={id}
              className="service"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              {icon}
              <h4>{title}</h4>
              <div className="underline ml-auto"></div>
              <p>{text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Specialties
