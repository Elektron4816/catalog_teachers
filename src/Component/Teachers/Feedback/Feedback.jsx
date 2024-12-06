import "react-slideshow-image/dist/styles.css";
import "./Feedback.css";

import arrow from "../../../image/Vector.svg";
import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
];

const buttonStyle = {
  width: "32px",
  height: "32px",
  backgroundColor: "#EE7A45",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "50%",
  top: "-65px"
};

const properties = {
  prevArrow: (
    <button
      className="footer-client-feedback-prevbutton"
      style={{ ...buttonStyle }}
    >
      <img src={arrow} alt="arrow" />
    </button>
  ),
  nextArrow: (
    <button
      className="footer-client-feedback-nextbutton"
      style={{ ...buttonStyle }}
    >
      <img src={arrow} alt="arrow" style={{ transform: "rotate(180deg)" }} />
    </button>
  )
};

function Feedback(props) {
  const { dataFeedback } = props;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    checkLine();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="footer-client-feedback">
      <div className="footer-client-feedback-title">
        <p>Отзывы о педагоге</p>
      </div>
      {width >= 960 ? (
        <Slide
          infinite={false}
          autoplay={false}
          {...properties}
          responsive={responsiveSettings}
        >
          {displayFeedback(dataFeedback)}
          {feedbackButton()}
        </Slide>
      ) : (
        <Slide autoplay={false} infinite={false} {...properties}>
          {displayFeedback(dataFeedback)}
          {feedbackButton()}
        </Slide>
      )}
    </div>
  );
}

export default Feedback;

function displayFeedback(data) {
  return data.slice(0, 5).map((item) => (
    <div key={item.parent_name} className="footer-client-feedback-item">
      <p className="footer-client-feedback-item-name">{item.parent_name}</p>
      <p className="footer-client-feedback-item-lesson">{item.lesson_name}</p>
      <p className="footer-client-feedback-item-text">{item.text}</p>
    </div>
  ));
}

function feedbackButton() {
  return (
    <div className="footer-client-feedbacks-button-container">
      <button
        className="footer-client-feedbacks-button"
        onClick={() => {
          document.querySelector(".footer-content-feedback").style.display =
            "block";
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }}
      >
        Смотреть все отзывы
      </button>
    </div>
  );
}

const checkLine = () => {
  const lines = document.querySelectorAll(
    ".footer-client-feedback-item-lesson"
  );
  lines.forEach((line) => {
    if (line.textContent === "") {
      line.classList.add("lineHeigth");
    }
  });
};