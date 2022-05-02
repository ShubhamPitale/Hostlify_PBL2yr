import Navbar from "../NavbarandFooter/Navbar";
import classes from "./Home.module.css";
import Footer from "../NavbarandFooter/Footer";

import friends from "../../images/friends.jpeg";
import hostel from "../../images/home_hostel.jpeg";
import food from "../../images/home_food.jpeg";
import slider1 from "../../images/slider1.jpeg";
import slider2 from "../../images/slider2.jpeg";
import logo from "../../images/logo_new.png";
import heromobile from "../../images/hero_mobile.jpeg";

const Home = () => {
  return (
    <div className={classes.homepage}>
      <Navbar></Navbar>
      <div className={classes.home}>
        <div className={classes.hero}>
          <div className={classes.slider}>
            <div className={classes.heroMobile}>
              <img src={heromobile}></img>
            </div>
            <div className={`${classes.sliderImg} ${classes.sliderImg1}`}>
              <img src={slider1}></img>
            </div>
            <div className={`${classes.sliderImg} ${classes.sliderImg2}`}>
              <img src={slider2}></img>
            </div>
            <div className={`${classes.sliderImg} ${classes.sliderImg3}`}>
              <img src={food}></img>
            </div>
            <div className={`${classes.sliderImg} ${classes.sliderImg4}`}>
              <img src={hostel}></img>
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.textImg}>
              <img src={logo}></img>
            </div>
            <div className={classes.textInfo}>
              <p>Hostelite ?</p>
              <h1>We've got your back!</h1>
            </div>
          </div>
        </div>
        <div className={classes.about}>
          <div className={classes.aboutImg}>
            <div className={classes.imgContainer}>
              <img src={friends}></img>
            </div>
          </div>
          <div className={classes.aboutInfo}>
            <h2>About Us</h2>
            <div className={classes.info}>
              <p>
                We are just five students hoping to make a difference in the
                lives of our fellow students. Our main objective is to help
                students find hostel and food services with ease in a new
                location.We are trying to reduce the gap between the hostel and
                food service providers and the students.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.serviceContainer}>
          <div className={classes.service}>
            <div className={classes.serviceHeading}>Our Services</div>
            <div className={classes.serviceItems}>
              <div className={classes.serviceItem}>
                <div className={classes.serviceItem_img}>
                  <img src={hostel}></img>
                </div>
                <div className={classes.serviceItem_text}>
                  <h1>Hostel Services</h1>
                  <p>
                    Compare them using ratings,reviews and prices. Save
                    favourites. Contact them.
                  </p>
                </div>
              </div>

              <div className={`${classes.serviceItem} ${classes.up}`}>
                <div className={classes.serviceItem_text}>
                  <h1>Food Services</h1>
                  <p>
                    Find a food servie that suits your taste. Contact the
                    provider.No compromise
                  </p>
                </div>

                <div className={classes.serviceItem_img}>
                  <img src={food}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default Home;
