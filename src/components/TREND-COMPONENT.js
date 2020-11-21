import React from "react";
import { trendList } from "../mydata";
const Trend = () => {
  return (
    <div>
      {trendList.map((trend) => {
        return (
          <div className="mb-0" key={trend.topic}>
            <p style={{ fontSize: "small" }} className="mb-0">
              {trend.location}
            </p>
            <p className="mb-0">{trend.topic}</p>
            <p style={{ fontSize: "small" }} className="last-p">
              {trend.tweets}
            </p>
            <div className="rule"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Trend;
