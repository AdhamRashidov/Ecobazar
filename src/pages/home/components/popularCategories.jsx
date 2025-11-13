import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const PopularCategories = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setData(res.data.recipes))
      .catch((err) => console.log(err, "Error"));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-6">
      {data.slice(0, 12).map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`}>
          <div
            className="flex flex-col max-w-[200px] h-full rounded-lg text-center border border-gray-300
				text-[18px] font-medium text-gray-900
			  hover:border-green-700 hover:shadow-md shadow-green-700/50 hover:text-green-700 hover:cursor-pointer"
          >

              <img className="rounded-t-lg" src={item.image} alt="image" />
        
            <div>
              <h2 className="py-4">{item.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
