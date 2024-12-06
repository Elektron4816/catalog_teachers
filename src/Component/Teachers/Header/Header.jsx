import star16 from "../../../image/Star-16.svg";
//import star19 from '../../image/Star-19.svg';
import "./Header.css";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import React, { useEffect } from "react";
import { years } from "../../Catalog/Catalog";
// import { Link } from "react-router-dom";

// import logoCMB from "../../../image/logoCMB.svg";

// import arrowRight from "../../../image/rigthArrowGrey.svg";

function Header(props) {
  const { data } = props;
  useEffect(() => {
    function adjustZoom() {
      var headerTitle = document.querySelector(".zoomIt");
      var zoomValue = parseFloat(
        window.getComputedStyle(headerTitle).getPropertyValue("zoom")
      );

      if (window.innerWidth <= 479) {
        zoomValue = window.innerWidth * 0.003;
      } else {
        zoomValue = 1;
      }
      headerTitle.style.zoom = zoomValue;
    }
    window.addEventListener("resize", adjustZoom);
    adjustZoom();

    // else if (window.innerWidth >= 1201) {
    //   zoomValue = (window.innerWidth / 1000) * 0.83;
    // } для больших экранов, увеличение zoom

    return () => window.removeEventListener("resize", adjustZoom);
  }, []);

  // let exp_years = data.exp_years;
  // let yearsText;

  // if (exp_years % 10 === 1) {
  //   yearsText = "год";
  // } else if (exp_years % 10 >= 2 && exp_years % 10 <= 4) {
  //   yearsText = "года";
  // } else {
  //   yearsText = "лет";
  // }

  return (
    <header className="zoomIt">
      <Breadcrumbs name={data.teacher_name} style={{ color: "#9E9E9E" }} />
      <div className="header">
        <div
          className="header-image-container"
          style={{ backgroundImage: `url(${data.photo[0]})` }}
        >
          {/*<img src={teacherPhoto} alt="teacher" className="header-image"/>*/}
        </div>
        <div className="header-container">
          <div className="header-title">
            <p className="header-title-text">{data.teacher_name}</p>
            <div className="header-title-items">
              {showHighlights(data.highlights)}
            </div>
          </div>
          <div className="header-social">
            <div className="header-social-item">
              <p className="header-social-title">{data.exp_years}</p>
              <p>{years(data.exp_years)} опыта</p>
            </div>
            <div className="header-social-item">
              <p className="header-social-title">{data.number_students}</p>
              <p>счастливых учеников</p>
            </div>
            {/* <div className="header-social-item">
                          <div className="header-social-block">
                              <img src={star19} alt="star" />
                              <p className="header-social-title">4.9</p>
                          </div>
                          <p>рейтинг среди учеников</p>
                      </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

function showHighlights(data) {
  return data.map((element) => (
    <div className="header-title-item" key={element}>
      <img src={star16} alt="stars" />
      <p>{element}</p>
    </div>
  ));
}

export default Header;
