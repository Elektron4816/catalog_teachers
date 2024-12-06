import { useEffect, useState, useRef } from "react";

import {
  defaultFilter,
  usedFilterdef,
  usedFilter,
  defaultFilterMobile
} from "../defaultStyle";

import { togleVisible, pickCheckbox } from "./addFunction";

import CheckBox from "../../CheckBox/CheckBox";

function Importantfilter(props) {
  const { mobile, data } = props;

  const [isRotatedImportant, setIsRotatedImportant] = useState(false);
  const [isFilter, setIsFilter] = useState(
    !mobile ? defaultFilter : defaultFilterMobile
  );
  const importantRef = useRef(null);

  const handleClick = (id) => {
    setIsRotatedImportant(!isRotatedImportant);
    togleVisible(id);
  };

  const checkActiveCheckbox = () => {
    if (pickCheckbox("important")) {
      setIsFilter({
        ...isFilter,
        important: usedFilter
      });
    } else {
      setIsFilter({
        ...isFilter,
        important: usedFilterdef
      });
    }
  };

  function clearFilter() {
    const checkboxes = document.querySelectorAll(".important");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    checkActiveCheckbox();
  }

  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (event) => {
        if (
          importantRef.current &&
          !importantRef.current.contains(event.target)
        ) {
          const importantDropdown = document.getElementById("important");
          if (importantDropdown && importantDropdown.style.display !== "none") {
            importantDropdown.style.display = "none";
            setIsRotatedImportant(!isRotatedImportant);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isRotatedImportant, mobile]);

  useEffect(() => {
    setTimeout(() => {
      if (mobile) {
        pickCheckbox("important");
      } else {
        checkActiveCheckbox();
      }
    });
  }, []);

  return (
    <div ref={importantRef}>
      <div
        className="catalog-main-search-filter"
        onClick={() => {
          handleClick("important");
        }}
        style={isFilter.important.container}
      >
        <p style={isFilter.important.text}>Важно в педагоге</p>
        <img
          src={isFilter.important.arrowImg}
          alt="arrow"
          style={{
            transform: isRotatedImportant ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      </div>
      <div className="dropdown" id="important" style={{ display: "none" }}>
        <div className="dromdown-title">
          <p>
            🧡 Все наши педагоги универсальны и работают с детьми в игровой
            форме. Мы знаем, что каждому ребёнку важно найти своего педагога.
            Этот фильтр отображает самые сильные стороны педагога.
          </p>
        </div>
        <CheckBox option={data.temperaments} name="important" />
        {!mobile && (
          <div>
            <button
              className="dropdown-button"
              onClick={() => {
                handleClick("important");
                //pickCheckbox("important");
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

export default Importantfilter;
