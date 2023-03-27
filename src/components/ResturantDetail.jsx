import { useParams } from "react-router-dom";
import useResturants from "../hooks/useResturants";
import { BASE_IMG_URL } from  '../constants'
import ShimmerResturantDetail from "./ShimmerResturantDetail";
import {useDispatch} from 'react-redux'
import { addItem, removeItems } from "../utils/cartSlice";

const ResturantDetail = () => {

  const resId = useParams();
  const [resturantDetails, menu] = useResturants(resId);
  document.title = 'FoodBox - '+resturantDetails.name;
  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    dispatch(addItem({name:item.card.info.name,price:item.card.info.price}))
  }


  return Object.keys(resturantDetails).length === 0 ? (
    <div className="shimmer_container">
    <ShimmerResturantDetail/>
    </div>
  ) : (
    <div className="resturant_details_container">
      <div className="resturant_header">
        <img
          className="resturant_food_image"
          src={BASE_IMG_URL + resturantDetails?.cloudinaryImageId}
        />
        <div className="resturant_info">
          <h2>{resturantDetails?.name}</h2>
          <h5 className="name_details">
            {resturantDetails?.cuisines.join(", ")}
          </h5>
          <h5 className="name_details">
            {resturantDetails?.locality}, {resturantDetails?.area}{" "}
          </h5>
          <div className="ratings_timing_other">
            <ul className="ratings_timing_other_item">
              <li>{resturantDetails?.avgRatingString}</li>
              <li>{resturantDetails?.totalRatingsString}</li>
            </ul>
            <ul className="ratings_timing_other_item">
              <li>{resturantDetails?.costForTwoMsg}</li>
              {resturantDetails.opened == true ? (
                <li>Open</li>
              ) : (
                <li>Closed</li>
              )}
            </ul>
          </div>
        </div>
        <ul className="offer_detail">
          <li className="offer_label">OFFER</li>
          <li className="offer_item">
            {
              resturantDetails?.aggregatedDiscountInfoV2?.descriptionList[0]
                ?.meta
            }
          </li>
          <li className="offer_item">
            {
              resturantDetails?.aggregatedDiscountInfoV2?.descriptionList[1]
                ?.meta
            }
          </li>
        </ul>
      </div>
      <div className="menu_container">
        <div className="menu_items">
          {menu.length != 0 ? (
            menu[0].card.card.itemCards.map((element) => {
              return (
                <div className="menu_card" key={element.id}>
                  <div className="left_menu_card">
                    {console.log(element.card.info)}
                    {element?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
                      <img
                        className="veg_non_veg_icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="veg_non_veg_icon"
                        src="https://img.icons8.com/color/512/vegetarian-food-symbol.png"
                        alt=""
                      />
                    )}
                    <h3 className="menu_item_name">{element?.card?.info?.name}</h3>
                    <h5>
                      ₹{" "}
                      {element?.card?.info?.price
                        ? element?.card?.info?.price / 100
                        : element?.card?.info?.price / 100}
                    </h5>
                  </div>
                  <div className="right_menu_card">
                    <div className="menu_card_image">
                      <img
                        className="menu_card_image"
                        src={element?.card?.info.imageId? BASE_IMG_URL + element?.card?.info.imageId:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}
                        alt=""
                      />
                    </div>
                    <button className="add_item_btn" onClick={()=>{handleAddItem(element)}}>Add</button>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetail;
