import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Catalog.css";
import "../../index.css";

import MainSearch from "../MainSearch/MainSearch";
import VideoGreeting from "./VideoGreeting/VideoGreeting";
import Breadcrumbs from "../Teachers/Header/Breadcrumbs/Breadcrumbs";
import LiveSearch from "../MainSearch/LiveSearch/LiveSearch";

import { useSelector } from "react-redux";
import useLocalStorage from "use-local-storage";

import playBtn from "../../image/playBtn.svg";

function Catalog() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const dataTeacher = useSelector((state) => state.teacher.data);
  const [storageFilter] = useLocalStorage("filter");

  useEffect(() => {
    function adjustZoom() {
      var headerTitle = document.querySelector(".innerVideo");
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

    if (storageFilter != null) {
      const getAllInput = document.getElementsByTagName("input");
      for (let i = 0; i < getAllInput.length; i++) {
        for (let j = 0; j < storageFilter.length; j++) {
          if (storageFilter[j] === getAllInput[i].id) {
            getAllInput[i].checked = true;
          }
        }
      }
    }

    return () => window.removeEventListener("resize", adjustZoom);
  }, []);

  return (
    <div>
      <div className="innerVideo">
        <div className="catalog-main">
          <div className="catalog-main-header">
            <Breadcrumbs style={{ color: "transparent" }} catalog={true} />
            <p>Педагоги</p>
            <LiveSearch />
            <MainSearch />
          </div>
          <div className="catalog-main-items">
            {dataTeacher && (
              <DisplayTeacher
                dataTeacher={dataTeacher}
                setShowVideo={setShowVideo}
                setVideoId={setVideoId}
              />
            )}
            <div className="catalog-main-notfound">
              <h1>Педагогов по вашему запросу не найдено :(</h1>
              <p>Попробуйте изменить запрос</p>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <VideoGreeting
          videoLink={dataTeacher[videoId].video_data}
          state={setShowVideo}
        />
      )}
    </div>
  );
}

function DisplayTeacher(props) {
  const { dataTeacher, setShowVideo, setVideoId } = props;
  let navigate = useNavigate();

  return dataTeacher.map((element, index) => (
    <div
      className="catalog-main-item"
      data-age={element.age}
      key={index}
      data-lesson={element.lesson_items.map((value, index) => {
        if (index === 0) {
          return value.name;
        } else {
          return " " + value.name;
        }
      })}
      data-important={[element.specifications.join(", ")]}
    >
      <div
        className="catalog-main-item-photo"
        style={{ backgroundImage: `url(${element.photo[0]})` }}
        onClick={(event) => {
          saveFilter(() => {
            if (
              event.target.id !== "playBtn" &&
              event.target.id !== "playBtnImg"
            ) {
              navigate(`/page?n=${element.link}`);
            }
          });
        }}
      >
        {element.video_data && (
          <div
            className="catalog-main-item-photo-play"
            id="playBtn"
            onClick={() => {
              document.getElementsByTagName("body")[0].style.overflow =
                "hidden";
              setShowVideo(true);
              setVideoId(index);
            }}
          >
            <img src={playBtn} alt="playBtn" id="playBtnImg" />
          </div>
        )}
      </div>
      <p className="teacher_name">{element.teacher_name}</p>
      <div className="catalog-main-item-about">
        <div className="catalog-main-item-about-text">
          <p className="pink">
            Опыт: {element.exp_years} {years(element.exp_years)}
          </p>
        </div>
        <div className="catalog-main-item-about-text">
          <p className="green">Учеников: {element.number_students}</p>
        </div>
        {/* <div className="catalog-main-item-about-text">
          <p className="blue">Образование: null</p>
        </div> */}
      </div>
      <div className="catalog-main-item-lesson">
        <p>Ведет предметы</p>
        <p>
          {element.lesson_items.map((value, index) => {
            if (element.lesson_items.length - 1 === index) {
              return value.title;
            } else {
              return value.title + ", ";
            }
          })}
        </p>
      </div>

      <button
        className="teacherName"
        onClick={() => {
          saveFilter(() => {
            navigate(`/page?n=${element.link}`);
          });
        }}
      >
        Подробнее о педагоге
      </button>
    </div>
  ));
}

export default Catalog;

export const years = (exp_years) => {
  let yearsText;

  if (exp_years >= 11 && exp_years <= 14) {
    yearsText = "лет";
  } else {
    if (exp_years % 10 === 1) {
      yearsText = "год";
    } else if (exp_years % 10 >= 2 && exp_years % 10 <= 4) {
      yearsText = "года";
    } else {
      yearsText = "лет";
    }
  }

  return yearsText;
};

function saveFilter(callback) {
  const input = document.getElementsByTagName("input");
  const paramStoreFilter = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      paramStoreFilter.push(input[i].id);
    }
  }
  localStorage.setItem("filter", JSON.stringify(paramStoreFilter));
  if (callback) {
    callback();
  }
}
