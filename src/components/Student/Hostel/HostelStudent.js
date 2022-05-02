import { useEffect } from "react";

import useHttp from "../../../hooks/use-http";
import { getAllHostels } from "../../../lib/api";

import Navbar from "../../NavbarandFooter/Navbar";
import Footer from "../../NavbarandFooter/Footer";
import Notfound from "../../../pages/Notfound";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import HostelList from "./HostelList";

const HostelStudent = () => {
  const {
    sendRequest,
    status,
    data: loadedHostels,
    error,
  } = useHttp(getAllHostels, true);

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
    (!loadedHostels || loadedHostels.length === 0)
  ) {
    return <Notfound />;
  }

  return (
    <div>
      <Navbar />
      <div>
        <HostelList hostels={loadedHostels} />
      </div>
      <Footer />
    </div>
  );
};

export default HostelStudent;
