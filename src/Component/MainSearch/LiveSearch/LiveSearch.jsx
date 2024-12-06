import "../../../index.css";
import "./LiveSearch.css";

import { checkTeacherList } from "../Search/SomeFilter/addFunction";


function LiveSearch() {

    const hanldeSearch = (event) => {
        // console.log(event.target.value);
        let value = event.target.value;
        const testTest = document.querySelectorAll(".catalog-main-item");
        document.querySelectorAll(".teacher_name").forEach(function (item, index) {
          if (!item.innerHTML.toLowerCase().includes(value.toLowerCase())) {
            testTest[index].classList.add("liveSearchHide");
          } else {
            testTest[index].classList.remove("liveSearchHide");
          }
        });
        const getAllTeacherElemen = document.querySelectorAll(".catalog-main-item");
        checkTeacherList(getAllTeacherElemen);

    }

    return (
        <label for="liveInput" class="inp">
            <input type="text" id="liveInput" placeholder="&nbsp;" onKeyUp={hanldeSearch} />
            <span class="label">Имя педагога</span>
        </label>
    )
}

export default LiveSearch;