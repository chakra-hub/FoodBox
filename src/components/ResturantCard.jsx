import React from 'react'
import {BASE_IMG_URL} from '../constants'

const ResturantCard = ({image_id, res_name, cuisines, rating, cost, time, offer}) => {
  return (
    <div className='resturant_card'>
        <img className='food_img' src={BASE_IMG_URL+image_id} alt="" />
        <div className="resturant_name">{res_name}</div>
        <div className="cuisines">{cuisines.slice(0,30)}</div>
        <div className="rating_time_price">
            <div className="rating">{rating}</div>
            <div className="time">{cost}</div>
            <div className="price">{time}</div>
        </div>
        <div className="offer">{offer}</div>
      </div>
  )
}

export default ResturantCard
