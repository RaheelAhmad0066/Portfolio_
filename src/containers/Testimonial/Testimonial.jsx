import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonial.scss";
import binnance from "../../assets/binance.png";
import hue from "../../assets/hue.png";
import camScanner from "../../assets/bmw.png";
import alibaba from "../../assets/alibaba.png";
import em from "../../assets/em.jpeg";
import em1 from "../../assets/em1.jpeg";
import em2 from "../../assets/em2.jpeg";

const testimonials = [
  {
    image: em,
    name: "James Carter",
    company: "Google",
    feedback:
      "Raheel delivered our Flutter app ahead of schedule. Clean code, great communication, and the UI was exactly what we envisioned. Highly recommend!",
  },
  {
    image: em1,
    name: "Sarah Mitchell",
    company: "Meta",
    feedback:
      "Outstanding work on our mobile app. Raheel's attention to detail and Firebase integration was flawless. Will definitely work with him again.",
  },
  {
    image: em2,
    name: "Michael Thompson",
    company: "Amazon",
    feedback:
      "Raheel built our cross-platform app from scratch. His expertise in Flutter and API integration saved us weeks of development time.",
  },
  {
    image: em,
    name: "David Lee",
    company: "Startup Dubai",
    feedback:
      "Professional, responsive, and highly skilled. Raheel turned our idea into a polished app that our users love. 10/10 experience.",
  },
  {
    image: em1,
    name: "Emily Watson",
    company: "TechVentures",
    feedback:
      "We hired Raheel for a complex Flutter project with real-time features. He nailed every requirement and delivered beyond expectations.",
  },
  {
    image: em2,
    name: "Omar Khalid",
    company: "Kuwait Startup",
    feedback:
      "Raheel is a true Flutter expert. Our sports app runs smoothly on both iOS and Android thanks to his hard work and dedication.",
  },
];

const brands = [
  { name: "Binance", image: binnance, url: "https://play.google.com/store/apps/details?id=com.binance.dev" },
  { name: "Hue Philips", image: hue, url: "https://play.google.com/store/apps/details?id=com.philips.lighting.hue2" },
  { name: "CamScanner", image: camScanner, url: "https://play.google.com/store/apps/details?id=com.bmw.museum" },
  { name: "Ali Baba", image: alibaba, url: "https://play.google.com/store/apps/details?id=com.alibaba.intl.android.apps.poseidon" },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState("left");
  const autoRef = useRef(null);

  const startAuto = () => {
    autoRef.current = setInterval(() => {
      goTo("next");
    }, 4000);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [currentIndex]);

  const goTo = (dir) => {
    if (animating) return;
    setAnimating(true);
    setSlideDir(dir === "next" ? "left" : "right");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        dir === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 400);
  };

  const handlePrev = () => { stopAuto(); goTo("prev"); };
  const handleNext = () => { stopAuto(); goTo("next"); };
  const handleDot = (i) => {
    if (i === currentIndex || animating) return;
    stopAuto();
    setSlideDir(i > currentIndex ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(i);
      setAnimating(false);
    }, 400);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="app__testimonial app__flex">
      <h2 className="head-text">
        See What <span>Others</span> Say About Me!
      </h2>

      <div className="app__testimonial-carousel app__flex">
        <div
          className={`testimonial-slide ${animating ? `slide-out-${slideDir}` : "slide-in"}`}
          style={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <img src={testimonial.image} alt={testimonial.name} />
          <div className="app__testimonial-content">
            <p className="p-text">{testimonial.feedback}</p>
            <div>
              <h4 className="bold-text">{testimonial.name}</h4>
              <p className="p-text" style={{ color: "#313bac", marginTop: 4 }}>
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => handleDot(i)}
            style={{
              width: i === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === currentIndex ? "#313bac" : "#cbcbcb",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      <div className="app__testimonials-btns app__flex">
        <div onClick={handlePrev}>
          <HiChevronLeft />
        </div>
        <div onClick={handleNext}>
          <HiChevronRight />
        </div>
      </div>

      <div className="app__testimonials-brands app__flex">
        {brands.map((brand, index) => (
          <div className="app__flex" key={index}>
            <a href={brand.url} target="_blank" rel="noopener noreferrer">
              <img src={brand.image} alt={brand.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
