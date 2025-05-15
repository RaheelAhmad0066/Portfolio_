import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { motion } from "framer-motion";
import fullstackImg from '../../assets/fullstack.jpg';
import techImg from '../../assets/Ingram Robot.png';
import problemImg from '../../assets/problemSolving.png';
import leadershipImg from '../../assets/leadership.jpg';

const About = () => {
  const viewResumeHandler = () => {
    window.open("/RaheelResume.pdf", "_blank");
  };
  const abouts = [
    {
      title: "Fullstack Developer",
      description: "MERN stack, well versed with React, Node.js, MongoDB, RESTful APIs, GraphQL etc..",
      imgUrl: fullstackImg,
    },
    {
      title: "Tech Enthusiast",
      description: "Love new technologies and like to explore the field of Machine Learning, AI and Image Processing.",
      imgUrl: techImg,
    },
    {
      title: "Problem Solver",
      description: "Equipped with good analytical and problem solving skills. Creative thinker and love to take up any challenges or puzzles.",
      imgUrl: problemImg,
    },
    {
      title: "Visionary",
      description: "A visionary with commendable leadership qualities. Aiming to reach new heights. Tend to recover quickly from setbacks and learn from failures.",
      imgUrl: leadershipImg,
    },
  ];
  
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            {/* <img
              src={
                aboutMe.profileImg
                  ? urlFor(aboutMe.profileImg)
                  : images.aboutmine
              }
              alt="Profile"
            /> */}
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p>
            Hi there! I'm <span>Raheel</span> a Flutter developer with a passion for creating top-notch <span>mobile apps</span>. Whether it's for <span>Android, iOS</span>, or leveraging the power of Flutter, I'm here to bring your app ideas to life. I focus on delivering high-quality apps that are visually appealing and user-friendly. With expertise in seamless user experiences and robust <span>backend</span> setups, I'm your go-to person for turning your <span>app vision</span> into reality. Ready to embark on this journey together? Let's create something extraordinary!
          </p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="app__profile-item"
          key={`${about.title}-${index}`}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: "20px" }}>
            {about.title}
          </h2>
          <p className="p-text" style={{ marginTop: "10px" }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
