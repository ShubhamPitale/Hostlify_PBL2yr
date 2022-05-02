import { useState } from "react";
import TiffinItem from "./TiffinItem";

import classes from "./TiffinList.module.css";

const sortTiffins = (tiffins, sortingCrieteria) => {
  return tiffins.sort((tiffinA, tiffinB) => {
    if (sortingCrieteria === "pricelh") {
      return parseInt(tiffinA.price) > parseInt(tiffinB.price) ? 1 : -1;
    }
    if (sortingCrieteria === "pricehl") {
      return parseInt(tiffinA.price) < parseInt(tiffinB.price) ? 1 : -1;
    }
    if (sortingCrieteria === "newest") {
      return tiffinA.id < tiffinB.id ? 1 : -1;
    }
  });
};

const types = [
  "All",
  "Maharashtrian",
  "Jain",
  "Rajasthani",
  "South Indian",
  "Bengali",
  "Panjabi",
];

const TiffinList = (props) => {
  const filterTiffinsByType = (type) => {
    if (type === "All") return props.tiffins;
    return props.tiffins.filter((tiffin) => type === tiffin.places.value);
  };

  const [filteredTiffins, setFilteredTiffins] = useState(props.tiffins);

  const [selectedOption, setSelectedOption] = useState("newest");
  const sortedTiffins = sortTiffins(filteredTiffins, selectedOption);

  return (
    <div className={classes["tiffin-page"]}>
      <div className={classes["filter-section"]}>
        <h3>Select Category</h3>
        <div className={classes.filters}>
          {types.map((type, index) => {
            return (
              <div key={index}>
                <button
                  className={classes["filter-button"]}
                  onClick={() => {
                    setFilteredTiffins(filterTiffinsByType(type));
                  }}
                >
                  {type}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {sortedTiffins.length === 0 && (
        <div className={classes["not-found"]}>
          <h1>No Tiffins Found!!!</h1>
        </div>
      )}
      {sortedTiffins.length > 0 && (
        <div>
          <div>
            <div className={classes.sorting}>
              <p>SORT BY</p>
              <select
                value={selectedOption}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                }}
              >
                <option value="newest">Newest</option>
                <option value="pricelh">Price (Low to High)</option>
                <option value="pricehl">Price (High to Low)</option>
              </select>
            </div>
            <div className={classes.products}>
              {sortedTiffins.map((tiffin) => (
                <TiffinItem key={tiffin.id} tiffin={tiffin} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TiffinList;
