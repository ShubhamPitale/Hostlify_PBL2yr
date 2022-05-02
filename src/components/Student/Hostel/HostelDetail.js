import { useEffect } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import { getSingleHostel } from "../../../lib/api";

import Details from "../../Details/Details";
import HostelReviews from "../../HostelReviews/HostelReviews";
import Footer from "../../NavbarandFooter/Footer";
import Navbar from "../../NavbarandFooter/Navbar";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Button from "../../../UI/Button";

const HostelDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const hostelId = params.hostelId;

  const {
    sendRequest,
    status,
    data: loadedHostel,
    error,
  } = useHttp(getSingleHostel);

  useEffect(() => {
    sendRequest(hostelId);
  }, [sendRequest, hostelId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!loadedHostel) {
    return <p>No Hostel Found</p>;
  }

  return (
    <div>
      <Navbar />
      <Details hostel={loadedHostel} />
      <Route path={match.path} exact>
        <div className="centered">
          <Button>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${match.url}/hostelReviews`}
            >
              Load Reviews
            </Link>
          </Button>
        </div>
      </Route>
      <Route path={`${match.url}/hostelReviews`}>
        <HostelReviews hostelId={hostelId} />
      </Route>
      <Footer />
    </div>
  );
};

export default HostelDetail;
