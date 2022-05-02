import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const FoodDetailComponent = (props) => {
  return (
    <div>
      <HeroSection tiffin={props.tiffin} />
      <AboutSection tiffin={props.tiffin} />
    </div>
  );
};

export default FoodDetailComponent;
