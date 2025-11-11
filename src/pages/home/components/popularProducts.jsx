import React, { useEffect } from "react";
import axios from "axios";
import star from "../../../assets/icons/star.svg";
import bag from "../../../assets/icons/bag.svg";

export const PopularProducts = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setData(res.data.recipes))
      .catch((err) => console.log(err, "Error"));
  }, []);

  return (
    <div className="grid grid-cols-5 mt-[60px]">
      {data.slice(13, 23).map((item) => (
        <div>
          <div>
            <img src={item.image} alt="image" />
          </div>
          <div>
            <div>
              <h2>{item.title}</h2>
              <h1>{`$${item.price}`}</h1>
              <img src={star} alt="star" />
            </div>
            <div>
              <img src={bag} alt="bag" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
