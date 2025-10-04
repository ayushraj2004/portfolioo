import React from "react";
import loveImage from "../../assets/love.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImage">
        Made By{" "}
        <span>
          <img src={loveImage} alt="" />
        </span>
      </div>
      <div>Ayush raj</div>
    </div>
  );
};

export default Footer;
