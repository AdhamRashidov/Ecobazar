import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error"));
  }, [id]);
  return (
    <div>
      <img src={data.image} alt="image" />
      <h2>{data.name}</h2>
    </div>
  );
};
