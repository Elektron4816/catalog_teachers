import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import { useDispatch } from "react-redux";
import { setTeacher } from "../../store/reducers/teachersReducer";
import { setFilter } from "../../store/reducers/filterReducer";

import Teachers from "../Teachers/Teachers";
import Catalog from "../Catalog/Catalog";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [id, setId] = useLocalStorage("number", 0);
  const dispatch = useDispatch();
  localStorage.setItem("filter", null);

  useEffect(() => {
    fetch("/getTeacher?request=catalog")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTeacher(data));
        //  console.log("TEST",dataTeacherRedux);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("/getFiltres")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setFilter(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const searchParam = window.location.search.split("=")[1];
      if (searchParam) {
        setId(searchParam);
      }
    }
  }, [setId]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/page" element={<Teachers />} />
        <Route path="/page_err" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
