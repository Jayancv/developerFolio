import React, {useContext}  from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";


export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <p className={ isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }>
          {emoji ("👨‍💻 Strong industrial experience")}
        </p>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        
        <p className={ isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }>
          {emoji ("👨‍🔧 Basic hands-on experience")}
        </p>
        <ul className="dev-icons">
          {skillsSection.handsOnExp.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
