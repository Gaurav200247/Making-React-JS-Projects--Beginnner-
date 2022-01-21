import { useEffect, useState } from "react";
import paginate from "./Utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  const getdata = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setdata(paginate(data));
    setloading(false);
  };

  useEffect(() => {
    console.log(data[0]);
    getdata();
  }, []);

  return { loading, data };
};
