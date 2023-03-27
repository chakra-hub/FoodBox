import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useResturants = (resId) => {
  const {latitude, longitude} = useSelector((store)=> store.latlong)
  console.log(latitude,latitude)
  const [resturantDetails, setResturantDetails] = useState({});
  const [menu, setMenu] = useState([]);
  const RESTURANT_DETAIL_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=`


  const fetchResturantDetails = async () => {
    const response = await fetch(RESTURANT_DETAIL_API + resId.id);
    const data = await response.json();
    setMenu(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.slice(3,data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.length-2));
    setResturantDetails(data.data.cards[0].card.card.info);
  };

  useEffect(() => {
    fetchResturantDetails();
  }, []);

  return [resturantDetails, menu];
};

export default useResturants;
