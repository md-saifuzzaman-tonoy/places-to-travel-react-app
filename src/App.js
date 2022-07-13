import React, { useState } from "react";
import DataCard from "./components/DataCard";
import NavMenu from "./components/NavMenu";
import ApiData from "./components/supportives/ApiData";

const App = () => {
  const [travelData, setTravelData] = useState(ApiData);
  const [favourite, setFavourite] = useState(ApiData);
  const menuItems = [
    "favourite",
    ...new Set(
      travelData.map((item) => {
        return item.category;
      })
    ),
    "all",
  ].reverse();
  const [menu, setMenu] = useState(menuItems);
  function filterData(category) {
    if (category === "favourite") {
      const fav = favourite.filter((each) => {
        return each.favourite === true;
      });
      setTravelData(fav);
    } else if (category === "all") {
      setTravelData(ApiData);
    } else {
      const newData = ApiData.filter((each) => {
        return each.category === category;
      });
      setTravelData(newData);
    }
  }
  function addToFav(id) {
    setFavourite((prev) => {
      return prev.map((each) => {
        return each.id === id ? { ...each, favourite: true } : each;
      });
      // another way of changing state for favourite places
      // const vault = [];
      // for (let i = 0; i < prev.length; i++) {
      //   if (prev[i].id === id) {
      //     vault.push({
      //       ...prev[i],
      //       favourite: true,
      //     });
      //   } else vault.push(prev[i]);
      // }
      // return vault;
    });
  }

  return (
    <div>
      <NavMenu items={menu} handleClick={filterData} />
      <DataCard data={travelData} addToFav={addToFav} />
    </div>
  );
};

export default App;
