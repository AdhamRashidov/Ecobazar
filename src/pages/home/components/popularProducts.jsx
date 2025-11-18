import React, { useEffect } from "react";
import axios from "axios";
import star from "../../../assets/icons/star.svg";
import { Bag } from "../../../assets/icons/bag";
import { Link } from "react-router-dom";
import { useSearch } from "../../../components/search-provider";

export const PopularProducts = () => {
  const [data, setData] = React.useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setData(res.data.recipes))
      .catch((err) => console.log(err, "Error"));
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-5 mt-8">
      {filteredData.slice(13, 23).map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`}>
          <div className="group flex flex-col justify-between p-[5px] border border-gray-300 h-full font-normal text-[14px] text-gray-700 hover:border-green-700 hover:shadow-md shadow-green-700/50 hover:text-green-700 hover:cursor-pointer">
            <div>
              <img className="" src={item.image} alt="image" />
            </div>
            <div className="flex justify-between items-center my-auto py-3">
              <div>
                <h2 className="text-balance">{item.name}</h2>
                <h1 className="text-gray-900 font-medium text-[16px]">{`$${item.rating}`}</h1>
                <img src={star} alt="star" />
              </div>
              <div className="group p-2 bg-gray-300 rounded-full group-hover:bg-green-500 group-hover:text-white">
                <Bag />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
