import { useState, useEffect } from "react";

const mainurl = `https://www.omdbapi.com/?&apikey=89f3a225`;

// mainUrl + query = url
// query = $s="SEARCH-TERM"

export const useFetch = (query) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [isError, setisError] = useState({ msg: "", show: false });

  const getData = async (url) => {
    setloading(true);
    try {
      const resp = await fetch(url);
      const fetchedData = await resp.json();
      // console.log(fetchedData);

      if (fetchedData.Response === "True") {
        //Response is a string its not a boolean data type
        setdata(fetchedData.Search || fetchedData);
        setisError({ msg: "", show: false });
      } else {
        setisError({ msg: fetchedData.Error, show: true });
      }
      setloading(false);
    } catch (isError) {
      console.log(isError);
      setloading(false);
    }
  };

  useEffect(() => {
    getData(`${mainurl}${query}`);
  }, [query]);

  return { loading, data, isError };
};
