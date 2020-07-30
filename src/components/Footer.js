import React from "react"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>
          Copyright&copy;{new Date().getFullYear()}
          <span>WebDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
