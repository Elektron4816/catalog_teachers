import "./PageNotFound.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import girl from "../../image/little-girl-white-t.png";
import tgLogo from "../../image/tg_logo.svg";
import youTubeLogo from "../../image/youtube_logo.svg";
import boxArrow from "../../image/box-arrow-up-right.svg";

function PageNotFound() {
  useEffect(() => {
    function adjustZoom() {
      let headerTitle = document.querySelector(".body");

      let zoomValue = parseFloat(
        window.getComputedStyle(headerTitle).getPropertyValue("zoom")
      );
      if (window.innerWidth >= 1200) {
        zoomValue = window.innerWidth / 1200;
      } else if (window.innerWidth >= 960 && window.innerWidth < 1200) {
        zoomValue = window.innerWidth / 960;
      } else if (window.innerWidth >= 640 && window.innerWidth < 960) {
        zoomValue = window.innerWidth / 640;
      } else if (window.innerWidth >= 480 && window.innerWidth < 640) {
        zoomValue = window.innerWidth / 480;
      } else if (window.innerWidth <= 479) {
        zoomValue = window.innerWidth / 320;
      } else {
        zoomValue = 1;
      }
      headerTitle.style.zoom = zoomValue;
    }
    window.addEventListener("resize", adjustZoom);
    adjustZoom();

    return () => window.removeEventListener("resize", adjustZoom);
  }, []);

  return (
    <div className="main-404">
      <div className="body">
        <div className="content-container">
          <p>
            Упс... Страничка спряталась и не найдена. Давайте перейдем
            на&nbsp;главную и попробуем снова
          </p>
          <Link to="/" className="home-link">
            <button className="back-button">На главную</button>
          </Link>
          <div className="content-contact-items">{displayLabel(dataList)}</div>
        </div>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${girl})` }}
        ></div>
      </div>
    </div>
  );
}

export default PageNotFound;

const dataList = [
  {
    title: "Телеграм-канал CareMyBaby",
    link: "https://t.me/CareMyBabyonline",
    img: tgLogo
  },
  {
    title: "Телеграм-канал Дмитрия Волкова, основателя CareMyBaby",
    link: "https://t.me/dima_volkov_caremybaby",
    img: tgLogo
  },
  {
    title: "YouTube-канал CareMyBaby",
    link: "https://youtube.com/@-210caremybaby6?si=diu9HPaxId1UZX8U",
    img: youTubeLogo
  }
];

const displayLabel = (data) => {
  return data.map((item, index) => (
    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
      <div className="content-contact-item">
        <div className="content-contact-item-icon">
          <img src={item.img} alt="telegram" />
          <img src={boxArrow} alt="arrow" />
        </div>
        <p>{item.title}</p>
      </div>
    </a>
  ));
};
