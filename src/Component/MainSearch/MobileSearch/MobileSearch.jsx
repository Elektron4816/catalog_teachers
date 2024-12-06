import "./MobileSearch.css";
import Search from "../Search/Search";

import filter from "../../../image/filter.svg";

import closeBtn from "../../../image/CloseBlack.svg";

function MobileSearch(props) {
  const { data } = props;
  return (
    <div>
      <div
        className="catalog-main-search-filter"
        onClick={() => {
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
          document.querySelector(".main-dropdown").style.display = "block";
        }}
      >
        <p>Фильтры</p>
        <img src={filter} alt="filter" />
      </div>
      <div className="main-dropdown">
        <div
          className="main-dropdown-close-container"
          onClick={() => {
            document.getElementsByTagName("body")[0].style.overflow = "auto";
            document.querySelector(".main-dropdown").style.display = "none";
          }}
        >
          <img src={closeBtn} alt="closeBtn" />
        </div>
        <p>Фильтры</p>
        {data && <Search data={data} mobile={true} />}
      </div>
    </div>
  );
}

export default MobileSearch;
