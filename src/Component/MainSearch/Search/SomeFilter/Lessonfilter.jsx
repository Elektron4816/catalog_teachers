import { useEffect, useState, useRef } from "react";
import {
  defaultFilter,
  usedFilterdef,
  usedFilter,
  defaultFilterMobile
} from "../defaultStyle";

import CheckBox from "../../CheckBox/CheckBox";
import { togleVisible, pickCheckbox } from "./addFunction";

function Lessonfilter(props) {
  const { mobile, data } = props;
  const [isRotatedLesson, setIsRotatedLesson] = useState(false);
  const [isFilter, setIsFilter] = useState(
    !mobile ? defaultFilter : defaultFilterMobile
  );
  const lessonRef = useRef(null);

  const handleClick = (id) => {
    setIsRotatedLesson(!isRotatedLesson);
    togleVisible(id);
  };

  const checkActiveCheckbox = () => {
    if (pickCheckbox("lesson")) {
      setIsFilter({
        ...isFilter,
        lesson: usedFilter
      });
    } else {
      setIsFilter({
        ...isFilter,
        lesson: usedFilterdef
      });
    }
  };

  function clearFilter() {
    const checkboxes = document.querySelectorAll(".lesson");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    checkActiveCheckbox();
  }

  useEffect(() => {
    setTimeout(() => {
      if (mobile) {
        pickCheckbox("lesson");
      } else {
        checkActiveCheckbox();
      }
    });
  }, []);

  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (event) => {
        if (lessonRef.current && !lessonRef.current.contains(event.target)) {
          const lessonDropdown = document.getElementById("lesson");
          if (lessonDropdown && lessonDropdown.style.display !== "none") {
            lessonDropdown.style.display = "none";
            setIsRotatedLesson(!isRotatedLesson);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isRotatedLesson, mobile]);

  return (
    <div ref={lessonRef}>
      <div
        className="catalog-main-search-filter"
        onClick={() => handleClick("lesson")}
        style={isFilter.lesson.container}
      >
        <p style={isFilter.lesson.text}>Предмет</p>
        <img
          src={isFilter.lesson.arrowImg}
          alt="arrow"
          style={{
            transform: isRotatedLesson ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      </div>
      <div className="dropdown" id="lesson" style={{ display: "none" }}>
        <CheckBox option={data.directions} name="lesson" />
        {!mobile && (
          <div>
            <button
              className="dropdown-button"
              onClick={() => {
                handleClick("lesson");
                // pickCheckbox("lesson");
                checkActiveCheckbox();
              }}
            >
              Показать
            </button>
            <button
              className="dropdown-button-clear"
              onClick={() => clearFilter()}
            >
              Сбросить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lessonfilter;
