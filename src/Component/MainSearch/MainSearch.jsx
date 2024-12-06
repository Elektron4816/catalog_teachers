import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import MobileSearch from "./MobileSearch/MobileSearch";
import { useSelector } from "react-redux";

function MainSearch() {
  const [width, setWidth] = useState(window.innerWidth);

  const dataFilters = useSelector((state) => state.filter.data);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return  width >= 651
      ? dataFilters && <Search data={dataFilters} />
      : dataFilters && <MobileSearch data={dataFilters} />;
}

export default MainSearch;
