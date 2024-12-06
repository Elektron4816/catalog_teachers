import "./Breadcrumbs.css";

import { Link } from "react-router-dom";

import logoCMB from "../../../../image/logoCMB.svg";
import arrowRight from "../../../../image/rigthArrowGrey.svg";

function Breadcrumbs(props) {
  const { name, style, catalog } = props;
  return (
    <div className="header-breadcrumbs">
      <div className="header-logo-container">
        <a
          href="https://caremybaby.ru/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={logoCMB} alt="logo" />
        </a>
      </div>
      {!catalog && (
        <div className="header-breadcrumbs-container">
          <ul className="header-breadcrumbs-items">
            <li className="header-breadcrumbs-item">
              <Link to="/" style={style}>
                Наши педагоги
                <div className="header-breadcrumbs-item-arrow">
                  {name && <img src={arrowRight} alt="arrow" />}
                </div>
              </Link>
            </li>
            {name && <li className="header-breadcrumbs-item">{name}</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Breadcrumbs;
