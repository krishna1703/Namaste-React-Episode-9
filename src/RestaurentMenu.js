import React from "react";
import { CDNlinkforfood } from "../utils/constants";
import Simmeruicards from "./Simmeruicards";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const RestaurentMenu = () => {
    
     const {resId} = useParams();

     const resinfo = useResMenu(resId);

    
    if (resinfo == null) {
        return <Simmeruicards />;
    }

    const { name, cuisines, costForTwoMessage , avgRatingString ,  totalRatingsString  } = resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

     const {imageId , price} =   resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info;

     console.log(itemCards)

    return (
        <div className="restaurentMenu">
            <div className="restaurentname">
                <div className="food-name">
                    <h2> {name}</h2>
                    <br></br>
                    <h3>{cuisines.join(" ,")}</h3>
                </div>

                <div className="food-time">

                    <h3>{costForTwoMessage} </h3>
                </div>

                <div className="food-rating">
                    <h3>{avgRatingString}</h3>
                    <br></br>
                    <h3>{totalRatingsString}</h3>
                </div>
            </div>

            <br></br>

            <h2> Recommended Food</h2>

            <br></br>

            <div className="restaurentRecommended">
                <div className="food-name">
                    <h3>{itemCards[1].card.info.name}</h3>
                </div>

                <div className="food-rate">
                    <h3>{price/100} rs</h3>
                </div>

                <div className="food-img">

                    <img  className="food-image" src= { CDNlinkforfood + imageId } ></img>

                </div>



            </div>
        </div>
    );
};

export default RestaurentMenu;
