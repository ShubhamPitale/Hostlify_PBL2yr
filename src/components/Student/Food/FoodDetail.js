import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../NavbarandFooter/Footer";
import Navbar from "../../NavbarandFooter/Navbar";
import Details from "../../Details/Details";

import useHttp from "../../../hooks/use-http";
import { getSingleTiffin } from "../../../lib/api";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import TiffinReviews from "../../TiffinReviews/TiffinReviews";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import FoodDetailComponent from "./FoodDetailComponent/FoodDetailComponent";
import Button from "../../../UI/Button";

const FoodDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const foodId = params.foodId;

  const {
    sendRequest,
    status,
    data: loadedTiffin,
    error,
  } = useHttp(getSingleTiffin);

  useEffect(() => {
    sendRequest(foodId);
  }, [sendRequest, foodId]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!loadedTiffin) {
    return <p>No Tiffin Found</p>;
  }

  return (
    <div>
      <Navbar />
      <FoodDetailComponent tiffin={loadedTiffin} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Button>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${match.url}/tiffinReviews`}
            >
              Load Reviews
            </Link>
          </Button>
        </div>
      </Route>
      <Route path={`${match.url}/tiffinReviews`}>
        <TiffinReviews foodId={foodId} />
      </Route>
      <Footer />
    </div>
  );
};

export default FoodDetail;
