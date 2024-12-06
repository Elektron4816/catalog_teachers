import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import PopUp from "./PopUp/PopUP";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
//import useLocalStorage from "use-local-storage";

function Teachers() {
  const [data, setData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);

  let navigate = useNavigate();
  let searchParams = useLocation().search;
  searchParams = searchParams.split("=")[1];

  // const getTeacherUrl = `https://crm.caremybaby.ru/Remotes/teachers/catalog_tcpRtpzCMB?request=page&n=${searchParams}`;
  useEffect(() => {
    fetch(`/getTeacher?request=page&n=${searchParams}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          //console.log(data.data);
          setData(data.data);
          setFeedbackData(data.feedbacks);
          document.title = `${data.data.teacher_name} - педагог CareMyBaby`;
          document
            .querySelector('meta[property="og:title"]')
            .setAttribute(
              "content",
              `${data.data.teacher_name} - педагог CareMyBaby`
            );
          document
            .querySelector('meta[property="og:description"]')
            .setAttribute("content", "");
          document
            .querySelector('meta[property="og:site_name"]')
            .setAttribute(
              "content",
              `${data.data.teacher_name} - педагог CareMyBaby`
            );
        } else {
          navigate("/page_err");
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [searchParams, navigate]);

  return (
    data && (
      <div>
        <PopUp teacher_id={data.id_yc} />
        <div className="header-main-container">
          <Header data={data} />
          <Main data={data} />
        </div>
        <Footer data={data} dataFeedback={feedbackData} />
      </div>
    )
  );
}

export default Teachers;
