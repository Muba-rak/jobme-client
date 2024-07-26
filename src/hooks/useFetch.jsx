import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = async (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const getData = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(false);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, data, isError };
};
