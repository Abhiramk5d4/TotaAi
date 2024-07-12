import React from "react";
import { FaChartPie} from 'react-icons/fa';
import "./index.css";

function Content() {
  return (
      <div className="main-content">
        <div className="no-data">
          <div className="no-data-icon-container">
            <img src="https://res.cloudinary.com/haibegwvw/image/upload/v1720683333/Screenshot_2024-07-11_at_1.04.53_PM_fhwiut.png" className="no-data-icon" />
            
          </div>
          <div className="no-data-text">No Data Available</div>
          <div className="no-data-subtext">
            There is no data available at this time.
          </div>
        </div>
      </div>
  );
}

export default Content;