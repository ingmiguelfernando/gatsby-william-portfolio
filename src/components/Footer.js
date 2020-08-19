import React from "react"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Calle 5B # 42 - 16 Consultorio. 203</h4>
        <h4>Sociedad Medica del Pacífico B/ Tequendama</h4>

        <h4>
          <FaPhoneAlt fill="#718096" className="inline text-lg mr-1" />
          (+2)554 6673{" "}
          <FaWhatsapp fill="#718096" className="inline text-xl mx-1" />
          (+57) 317 525 1469{" "}
        </h4>
        <h4 className="normal-case text-base">
          consultorioespecialista04@hotmail.com
        </h4>
        <h4>Cali - Valle </h4>
      </div>
    </footer>
  )
}

export default Footer
