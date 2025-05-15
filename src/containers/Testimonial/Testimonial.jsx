import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonial.scss";
import binnance from "../../assets/binance.png";
import { Link } from "react-router-dom";
import hue from "../../assets/hue.png";
import camScanner from "../../assets/bmw.png";
import alibaba from "../../assets/alibaba.png";
import em from "../../assets/em.jpeg";
import em1 from "../../assets/em1.jpeg";
import em2 from "../../assets/em2.jpeg";


const testimonials = [
  {
    image: em,
    name: "Andrew",
    company: "Google",
    feedback:
      "Andrew is a phenomenal professional. He delivered our project before the deadline and exceeded expectations.",
  },
  {
    image: em1,
    name: "Sarah",
    company: "Meta",
    feedback:
      "Working with Sarah was smooth and productive. Her attention to detail is impressive.",
  },
  {
    image: em2,
    name: "Michael",
    company: "Amazon",
    feedback:
      "Michael’s work ethic and commitment made our collaboration incredibly efficient.",
  },
];

const brands = [
  { name: "Binance", image: binnance, url: "https://play.google.com/store/apps/details?id=com.binance.dev&pcampaignid=web_share" },
  { name: "Hue Philips", image:hue,url:"https://play.google.com/store/apps/details?id=com.philips.lighting.hue2&pcampaignid=web_share" },
  { name: "CamScanner", image: camScanner,url:"https://play.google.com/store/apps/details?id=com.bmw.museum&pcampaignid=web_share"},
  { name: "Ali Baba", image: alibaba,url:"https://play.google.com/store/apps/details?id=com.alibaba.intl.android.apps.poseidon&pcampaignid=web_share" },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="app__testimonial app__flex">
      <h2 className="head-text">
        See What <span>Others</span> Say About Me!
      </h2>

      <div className="app__testimonial-carousel app__flex">
        <img src={testimonial.image} alt={testimonial.name} />
        <div className="app__testimonial-content">
          <p className="p-text">{testimonial.feedback}</p>
          <div>
            <h4 className="bold-text">{testimonial.name}</h4>
        
          </div>
        </div>
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
