import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import flutter from "../../assets/flutter.png";
import dart from "../../assets/dart.png";
import firebase from "../../assets/firebase.png";
import supabase from "../../assets/supabase.png";
import mongodb from "../../assets/mu5.png";
import javascript from "../../assets/javascript.png";
import nodejs from "../../assets/node.png";
import git from "../../assets/git.png";


import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: { type: "spring", stiffness: 10 },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const skillsData = [
      { name: "Flutter", icon: flutter, bgColor: "#edf2f8" },
      { name: "Dart", icon:dart, bgColor: "#edf2f8" },
      { name: "Firebase", icon: firebase, bgColor: "#edf2f8" },
      { name: "Supa Base", icon: supabase, bgColor: "#edf2f8" },
      { name: "MongoDB", icon: mongodb, bgColor: "#edf2f8" },
      { name: "Javascript", icon: javascript, bgColor: "#edf2f8" },
      { name: "Node.js", icon:nodejs, bgColor: "#edf2f8" },
      { name: "Git", icon:git, bgColor: "#edf2f8" },
    ];

    const experienceData = [
      {
        year: "June 2024 – Present",
        works: [
          {
            name: "Senior Flutter Developer",
            company: "Mentor Sol Technologies",
            desc: "Developing a desktop ERP system using Flutter and Dart, integrated with Firebase.",
          },
        ],
      },
      {
        year: "2022",
        works: [
          {
            name: "Flutter Developer",
            company: "Combined Fabrication",
            desc: "Contributed to the development of a desktop ERP system using Flutter, Dart, and Firebase.",
          },
        ],
      },
      {
        year: "2021",
        works: [
          {
            name: "Flutter Developer",
            company: "Acme Technologies",
            desc: "Worked on a medical application using Flutter and Dart, with Firebase integration.",
          },
        ],
      },
      {
        year: "2020",
        works: [
          {
            name: "Junior Flutter Developer",
            company: "IT Life",
            desc: "Assisted in senior-level Flutter development tasks and learned core Flutter concepts.",
          },
        ],
      },
    ];
    

    setSkills(skillsData);
    setExperience(experienceData);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1], x: [-100, 5, 0] }}
                      transition={{ duration: 1 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#313bac"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
