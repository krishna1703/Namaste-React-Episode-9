import React, { useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Simmeruicards from "./Simmeruicards";
import { Link } from "react-router-dom";
import { ListofRestaurent } from "../utils/constants";

const Body = () => {

  const [listofRes, SetlistofRes] = useState([])
  const [FilteredlistofRes, SetFilteredlistofRes] = useState([])
  const [Searchlistofres, SetSearchlistofres] = useState("")




  useEffect(() => {
    fetchData();

  }, [])

  const fetchData = async () => {
    const data = await fetch(ListofRestaurent)

    const Data = await data.json();
    const DataFromapi = Data?.data?.cards[2]?.data?.data?.cards;

    SetlistofRes(DataFromapi);
    SetFilteredlistofRes(DataFromapi);



  }
  return listofRes.length == 0 ? (<Simmeruicards />): (

    <div className="body">


      <div className="search-bar">

        <div className="Search">

          <input type="text" className="search-input" value={Searchlistofres} onChange={(e) => {
            SetSearchlistofres(e.target.value);


          }}></input>


          <button className="search-btn" onClick={() => {

            const filteredRes = listofRes.filter((Res) =>
              Res.data.name.toLowerCase().trim().includes(Searchlistofres.toLowerCase().trim()))
              ;
            SetFilteredlistofRes(filteredRes)


          }}>Search food</button>

        </div>
        <div className="filter">
          <button className="filter-btn"
            onClick={() => {
              const lists = listofRes.filter((res) => res.data.avgRating > 4);

              SetFilteredlistofRes(lists)
            }}>4 star Rating</button>

        </div>
      </div>
      <div className="res-container">
        {
          FilteredlistofRes.map(res => (

            <Link key={res.data.id}
              to={"/restaurents/" + res.data.id} >
              <RestaurentCard resData={res} />
            </Link>
          ))

        }
      </div>
    </div>
  );
};

export default Body;
