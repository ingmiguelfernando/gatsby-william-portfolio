import React from "react"
import {
  FaHeartbeat,
  FaLaptopMedical,
  FaStethoscope,
  FaVial,
} from "react-icons/fa"
import { GiBrokenHeartZone, GiHealing } from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <GiBrokenHeartZone className="service-icon inline" />,
    title: "Riesgo cardiovascular",
    text: `Recomendaciones para la prevención, diagnóstico, tratamiento y seguimiento de personas con riesgo cardiovascular para cardiomiopatia isquemica y enfermedad cerebrovascular, basado en la evidencia.`,
  },
  {
    id: 2,
    icon: <FaHeartbeat className="service-icon inline" />,
    title: "Hipertensión arterial",
    text: `Recomendaciones para la prevención, diagnóstico, tratamiento y seguimiento de personas con Hipertensión Arterial, basado en la evidencia.`,
  },
  {
    id: 3,
    icon: <FaVial className="service-icon inline" />,
    title: "Diabetes mellitus",
    text: `Recomendaciones para la prevención, diagnóstico, tratamiento y seguimiento de personas con prediabetes y diabetes , basado en la evidencia.`,
  },
  {
    id: 4,
    icon: <FaStethoscope className="service-icon inline" />,
    title: "Chequeo medico preventivo",
    text: `Evaluacion del estado de salud de las personas de una manera completa y ágil mediante exámenes de control para Identificar problemas de salud antes de que ocurran y detectar a tiempo riesgos y enfermedades existentes, que puedan afectar la calidad de vida de las personas.`,
  },
  {
    id: 5,
    icon: <GiHealing className="service-icon inline" />,
    title: "Manejo especial de pacientes con V.I.H",
    text: `Recomendaciones para la prevención, diagnóstico, tratamiento y seguimiento de personas con V.I.H/ Sida, basado en la evidencia.`,
  },
  {
    id: 6,
    icon: <FaLaptopMedical className="service-icon inline" />,
    title: "Telemedicina",
    text: `Se proporcionar al paciente que no se puedan desplarza al consultorio información, consejería y asesoría en los componentes de promoción de la salud, prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y paliación.`,
  },
]
