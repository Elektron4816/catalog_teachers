import "./Search.css";

import { showAge, pickCheckbox } from "./SomeFilter/addFunction";

import Agefilter from "./SomeFilter/Agefilter";
import Lessonfilter from "./SomeFilter/Lessonfilter";
import Importantfilter from "./SomeFilter/Importantfilter";

function Search(props) {
  const { mobile, data } = props;

  return (
    <div>
      <div className="catalog-main-search">
        <Lessonfilter mobile={mobile} data={data} />
        <Importantfilter mobile={mobile} data={data} />
        <Agefilter mobile={mobile} />
      </div>
      {mobile && (
        <div>
          <button
            className="button"
            onClick={() => {
              document.getElementsByTagName("body")[0].style.overflow = "auto";
              document.querySelector(".main-dropdown").style.display = "none";
              showAge();
              pickCheckbox("important");
              pickCheckbox("lesson");
            }}
          >
            Показать
          </button>
          <button
            className="dropdown-button-clear"
            onClick={() => clearAllFilter()}
          >
            Сбросить все
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;

function clearAllFilter() {
  document.querySelectorAll("input[type='radio']")[0].checked = true;

  const allCheckBox = document.querySelectorAll("input[type='checkbox']");

  allCheckBox.forEach((checkbox) => {
    checkbox.checked = false;
  });
  showAge();
  pickCheckbox("important");
  pickCheckbox("lesson");
}
