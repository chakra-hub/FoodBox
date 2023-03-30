import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { filter_and_set } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import { useDispatch } from "react-redux";
import {updateCoordinates} from '../utils/coordinateSlice'

const MainContent = () => {
  document.title = 'FoodBox'
  const [search, setSearch] = useState("");
  const [resturants, setResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [latitude, setLatitude] = useState("28.6517178");
  const [longitude, setLongitude] = useState("77.2219388");
  const [city_search, setCitySearch] = useState('Delhi');
  const [city, setCity] = useState("Delhi");
  const dispatch = useDispatch();
  const isOnline = useOnline();

  useEffect(() => {
    fetchResturants();
  }, [latitude, longitude]);

  const fetchCity = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city_search}&limit=5&appid=2b29329a1244d63c803ce49dcbc3c85f`
    );
    const data = await response.json();
    if (data.length != 0) {
      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
      dispatch(updateCoordinates([latitude, longitude]))
    }
  };
  useEffect(() => {
    fetchCity();
  }, [city]);

  const fetchResturants = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
    );
    const data = await response.json();
    setResturants(data?.data?.cards[1]?.data?.data?.cards);
    setFilteredResturants(data?.data?.cards[1]?.data?.data?.cards);
  };

  if (isOnline == false) {
    return <h1>Oops! You don't seem to have internet Connection</h1>;
  }

  return resturants.length == 0 ? (
    <>
      <div className="main_content">
        {Array(10)
          .fill("")
          .map((element, index) => {
            return <Shimmer key={index} />;
          })}
      </div>
    </>
  ) : (
    <>
      <div className="search_boxes">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = filter_and_set(search, resturants);
            setFilteredResturants(data);
          }}
          className="search_container"
        >
          <input
            className="search_bar"
            type="text"
            placeholder="Search Restaurants"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value.length < 1) setFilteredResturants(resturants);
            }}
          />
          <button type="submit" className="submit_btn">
            Search
          </button>
        </form>
        <select name="cars" id="cities" onClick={(e)=>{
            setCitySearch(e.target.value);
            setCity(e.target.value)
            }}>
          <option value="Delhi" >Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
      <div className="main_content">
        {filteredResturants.length ? (
          filteredResturants.map((element) => {
            return (
              <Link
                to={`/restaurant/${element.data.id}`}
                key={element.data?.id}
              >
                <ResturantCard
                  key={element.data?.id}
                  image_id={element.data?.cloudinaryImageId}
                  res_name={element.data?.name}
                  cuisines={element.data?.cuisines.join(", ")}
                  rating={element.data?.avgRating}
                  cost={element.data?.costForTwoString}
                  time={element.data?.slaString}
                  offer={
                    element.data?.aggregatedDiscountInfo
                      ?.shortDescriptionList[0]?.meta
                  }
                />
              </Link>
            );
          })
        ) : (
          <div className="not_found">
            No Resturants found for :{" "}
            {search.length > 10 ? search.slice(0, 10) : search}
          </div>
        )}
      </div>
    </>
  );
};

export default MainContent;
