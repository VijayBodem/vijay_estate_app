import React from "react";
import { listData } from "../../lib/dummyData";
import "./listpage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
const Listpage = () => {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
};

export default Listpage;
