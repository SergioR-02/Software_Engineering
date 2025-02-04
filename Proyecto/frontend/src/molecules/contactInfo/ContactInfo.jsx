import "./ContactInfo.scss";
import Icon from "../../atoms/icon/Icon";

export const ContactInfo = () => (
  
  <div className="contactInfo">
      <Icon size={40} name={"logo_Icon"}/>
      <h2 className="contactInfo__title">Contactanos</h2>
    <div className="contactInfo__social">
      <a href="https://twitter.com" className="styles.socialLink">
        <span className="icon twitterIcon"></span>
      </a>
      <a href="https://linkedin.com" className="styles.socialLink">
        <span className="icon linkedinIcon"></span>
      </a>
      <a href="https://github.com" className="styles.socialLink">
        <span className="icon githubIcon"></span>
      </a>
      <a href="https://instagram.com" className="styles.socialLink">
        <span className="icon instagramIcon"></span>
      </a>
    </div>
  </div>
  
)