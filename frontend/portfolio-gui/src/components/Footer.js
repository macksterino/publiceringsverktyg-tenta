import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>Marcus Garpehäll Wiklund</span>all right reserved
      </h4>
      </div>
    </footer>
  )
}

export default Footer
