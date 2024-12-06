import "./Main.css";
import star16 from "../../../image/Star-16.svg";
import logo from "../../../image/fullLogo.png";
//import triangel from "../../image/Polygon-1.svg";
import { useEffect } from "react";

function Main(props) {
  const { data } = props;

  useEffect(() => {
    function adjustZoom() {
      let headerTitle = document.querySelector(".main");

      // for (let i = 0; i < headerTitle.length; i++) {
      let zoomValue = parseFloat(
        window.getComputedStyle(headerTitle).getPropertyValue("zoom")
      );

      if (window.innerWidth <= 479) {
        zoomValue = window.innerWidth * 0.003;
      } else {
        zoomValue = 1;
      }
      headerTitle.style.zoom = zoomValue;
      // }
    }
    window.addEventListener("resize", adjustZoom);
    adjustZoom();

    return () => window.removeEventListener("resize", adjustZoom);
  }, []);

  // const education = showEducation(data.education);
  // const skills = showSkills(data.exp_job);
  return (
    <main className="main">
      <div className="main-container about">
        <div className="main-about">
          <p key="about" className="main-about-title">
            О себе
          </p>
          <p className="main-about-text">{data.about_yourself}</p>
        </div>
        <div className="main-image">
          {/* <div className="main-image-circle">
                            <img src={triangel} alt="triangel"/>
                            <p>Посмотреть видеовизитку</p>
                        </div> */}
          {/* <div className="main-image-container"> */}
          <div
            className="main-image-photo"
            style={{
              backgroundImage: `url(${
                data.photo[1] ? data.photo[1] : data.photo[0]
              })`
            }}
          ></div>
          {/* </div> */}
          <div className="main-image-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="main-container education">
        <div className="main-about">
          <p key="edu" className="main-about-title">
            Образование
          </p>
        </div>
        <div className="main-more-items">{showEducation(data.education)}</div>
      </div>

      <div className="main-container expirience">
        <div className="main-about">
          <p key="exp" className="main-about-title">
            Опыт
          </p>
        </div>
        <div className="main-more-items">
          {showSkills(data.exp_job)}
          {/* <div className="main-more-item">
                <img src={star16} alt="star" />
                <p>ДОЛ «Алые зори», вожатый воспитатель – 5 лет</p>
              </div>
              <div className="main-more-item">
                <img src={star16} alt="star" />
                <p>Онлайн-школа подготовки к ЕГЭ PARTA – 2 года</p>
              </div>
              <div className="main-more-item">
                <img src={star16} alt="star" />
                <p>Репетиторство – 7 лет</p>
              </div> */}
        </div>
      </div>

      <div className="main-container skill">
        <div className="main-about">
          <p key="skill" className="main-about-title">
            Навыки
          </p>
        </div>
        <div className="main-more-items">
          <p>{data.skills}</p>
        </div>
      </div>
    </main>
  );
}

function showEducation(data) {
  return data.map((element, index) => (
    <div className="main-more-item" key={index}>
      <img src={star16} alt="star" />
      <p>{element}</p>
    </div>
  ));
}

function showSkills(data) {
  return data.map((element, index) => (
    <div className="main-more-item" key={index}>
      <img src={star16} alt="star" />
      <p>{element}</p>
    </div>
  ));
}

export default Main;
