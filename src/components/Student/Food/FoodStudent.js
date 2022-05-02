import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Footer from "../../NavbarandFooter/Footer";
import Navbar from "../../NavbarandFooter/Navbar";
import TiffinList from "./TiffinList";
import Notfound from "../../../pages/Notfound";

import useHttp from "../../../hooks/use-http";
import { getAllTiffins } from "../../../lib/api";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const FoodStudent = () => {
  const {
    sendRequest,
    status,
    data: loadedTiffins,
    error,
  } = useHttp(getAllTiffins, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedTiffins || loadedTiffins.length === 0)
  ) {
    return <Notfound />;
  }

  return (
    <div>
      <Navbar />
        <TiffinList tiffins={loadedTiffins} />
      <Footer />
    </div>
  );
};

export default FoodStudent;
