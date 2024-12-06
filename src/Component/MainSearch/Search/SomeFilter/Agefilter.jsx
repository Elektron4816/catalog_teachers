import { useEffect, useState, useRef } from "react";
import {
  defaultFilter,
  usedFilterdef,
  usedFilter,
  defaultFilterMobile
} from "../defaultStyle";

import RadioBtn from "../../RadioBtn/RadioBtn";
import { showAge, togleVisible } from "./addFunction";

function Agefilter(props) {
  const { mobile } = props;
  const [isRotatedAge, setIsRotatedAge] = useState(false);
  const [isFilter, setIsFilter] = useState(
    !mobile ? defaultFilter : defaultFilterMobile
  );
  const ageRef = useRef(null);

  const handleClick = (id) => {
    setIsRotatedAge(!isRotatedAge);
    togleVisible(id);
  };

  const checkActiveAge = () => {
    if (showAge()) {
      setIsFilter({
        ...isFilter,
        age: usedFilter
      });
    } else {
      setIsFilter({
        ...isFilter,
        age: usedFilterdef
      });
    }
  };

  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (event) => {
        if (ageRef.current && !ageRef.current.contains(event.target)) {
          const ageDropdown = document.getElementById("age");
          if (ageDropdown && ageDropdown.style.display !== "none") {
            ageDropdown.style.display = "none";
            setIsRotatedAge(!isRotatedAge);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isRotatedAge, mobile]);

  useEffect(() => {
    setTimeout(() => {
      if (mobile) {
        showAge();
      } else {
        checkActiveAge();
      }
    });
  }, []);

  return (
    <div ref={ageRef}>
      <div
        className="catalog-main-search-filter"
        onClick={() => handleClick("age")}
        style={isFilter.age.container}
      >
        <p style={isFilter.age.text}>Возраст</p>
        <img
          src={isFilter.age.arrowImg}
          alt="arrow"
          style={{
            transform: isRotatedAge ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      </div>
      <div className="dropdown" id="age" style={{ display: "none" }}>
        <RadioBtn />
        {!mobile && (
          <button
            className="dropdown-button"
            onClick={() => {
              handleClick("age");
              //showAge();
              checkActiveAge();
            }}
          >
            Показать
          </button>
        )}
      </div>
    </div>
  );
}

export default Agefilter;
