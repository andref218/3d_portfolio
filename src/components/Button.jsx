import React from "react";
import { getAsset } from "../utils/paths";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        // avoids the normal behaviour of the <a> tag
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      //cta - call to action
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={getAsset("/images/arrow-down.svg")} alt="arrow"></img>
        </div>
      </div>
    </a>
  );
};

export default Button;
