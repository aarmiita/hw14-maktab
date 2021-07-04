import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingShape from "./Loading";
import { useHistory } from "react-router-dom";

const WithLoading = (WrappedComponent, api) => {
  const WithLoadingComponent = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoadnig] = useState(true);
    let history = useHistory();
    useEffect(() => {
      const getData = async () => {
        const dataFromServer = await fetchData();
        setData(dataFromServer);
        setLoadnig(false);
      };
      getData();
    }, []);
    const fetchData = async () => {
      try {
        const response = await fetch(api + history.location.pathname);
        const data = await response.json();
        toast.success("Data Fetched");
        return data;
      } catch (error) {
        toast.error("error happend");
      }
    };
    if (loading) {
      return <LoadingShape />;
    } else {
      return <WrappedComponent data={data} {...props} />;
    }
  };
  return WithLoadingComponent;
};

export default WithLoading;
