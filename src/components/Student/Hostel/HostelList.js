import { useState } from "react";
import HostelItem from "./HostelItem";

import classes from "./HostelList.module.css";

const sortHostels = (hostels, sortingCrieteria) => {
  return hostels.sort((hostelA, hostelB) => {
    if (sortingCrieteria === "pricelh") {
      return parseInt(hostelA.price) > parseInt(hostelB.price) ? 1 : -1;
    }
    if (sortingCrieteria === "pricehl") {
      return parseInt(hostelA.price) < parseInt(hostelB.price) ? 1 : -1;
    }
    if (sortingCrieteria === "newest") {
      return hostelA.id < hostelB.id ? 1 : -1;
    }
  });
};

const types = ["All", "Flat", "Bungalow", "Hostel"];

const HostelList = (props) => {
  const filterHostels = (type) => {
    if (type === "All") return props.hostels;
    return props.hostels.filter((hostel) => type === hostel.places.value);
  };

  const [filteredHostels, setFilteredHostels] = useState(props.hostels);

  const [selectedOption, setSelectedOption] = useState("newest");

  const sortedHostels = sortHostels(filteredHostels, selectedOption);

  return (
    <div className={classes["hostel-page"]}>
      <div className={classes["filter-section"]}>
        <h3>Select Category</h3>
        <div className={classes.filters}>
          {types.map((type, index) => {
            return (
              <div key={index}>
                <button
                  className={classes["filter-button"]}
                  onClick={() => {
                    setFilteredHostels(filterHostels(type));
                  }}
                >
                  {type}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {sortedHostels.length === 0 && (
        <div>
          <h1>No Hostels Found!!!</h1>
        </div>
      )}
      {sortedHostels.length > 0 && (
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
            {sortedHostels.map((hostel) => (
              <HostelItem key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelList;
