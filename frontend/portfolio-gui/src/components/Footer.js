import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements"

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>Marcus Garpehäll Wiklund</span>all right reserved
      </h4>
      </div>
    </FooterWrapper>
  )
}

export default Footer
