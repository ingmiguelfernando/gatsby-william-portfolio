import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="flex">
            <img src={logo} alt="logo" className="h-12 mt-3" />
            <div className="text-2xl font-black font-mono items-center pl-2 flex">
              Dr.
            </div>
            <div
              className="text-2xl font-black font-mono text-white items-center flex"
              style={{ textShadow: "0 0 2px #718096" }}
            >
              William
            </div>
          </div>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
