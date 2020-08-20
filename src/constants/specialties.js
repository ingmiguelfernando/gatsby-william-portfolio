import React from "react"
import {
  FaLaptopMedical,
  FaDiagnoses,
  FaUserMd,
} from "react-icons/fa"
import { GiBrokenHeartZone, GiHealing } from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <FaUserMd className="service-icon inline" />,
    title: "Chequeo médico preventivo y diagnostico",
    text: `Evaluación integral y ágil del estado de salud del paciente con ayuda de exámenes médicos que identifiquen los riesgos y problemas de salud de forma preventiva. Medicina basada en la evidencia.`,
  },
  {
    id: 2,
    icon: <GiBrokenHeartZone className="service-icon inline" />,
    title: "Riesgo cardiovascular",
    text: `Consulta para la prevención, diagnóstico, tratamiento y seguimiento de personas hipertensas, diabéticas, dislipidemicas o con riesgo cardiovascular para cardiomiopatía isquémica y enfermedad cerebrovascular isquémica o hemorrágica. Medicina basada en la evidencia.`,
  },
  {
    id: 3,
    icon: <FaDiagnoses className="service-icon inline" />,
    title: "Chequeo médico del adulto",
    text: `Evaluación integral del estado de salud del paciente adulto con diferentes enfermedades o síntomas en varios órganos o sistemas del organismo cuyo diagnóstico es difícil y afectan su calidad de vida.  Medicina basada en la evidencia.`,
  },

  {
    id: 4,
    icon: <GiHealing className="service-icon inline" />,
    title: "Tratamiento de paciente que conviven con VIH/SIDA",
    text: `Consulta para la prevención, diagnóstico, tratamiento y seguimiento de personas con V.I.H/ SIDA, Medicina basado en la evidencia.`,
  },
  {
    id: 5,
    icon: <FaLaptopMedical className="service-icon inline" />,
    title: "Telemedicina",
    text: `Consulta no presencial mediante servicio de videollamada, online o asistencia telefónica a pacientes que no se puedan desplazar al consultorio, se brinda información, consejería y asesoría en los componentes de promoción de la salud, prevención de la enfermedad, diagnóstico y tratamiento.`,
  },
]
