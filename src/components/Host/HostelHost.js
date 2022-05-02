import classes from "./HostelHost.module.css";
import Footer from "../NavbarandFooter/Footer";
import Navbar from "../NavbarandFooter/Navbar";
import { useState, useRef, useEffect } from "react";
import hostelForm from "../../images/hostel_form.png";
import useHttp from "../../hooks/use-http";
import { addHostel } from "../../lib/api";
import { useHistory } from "react-router-dom";
import { storage } from "../../firebase/config";

const HostelHost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [URL, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  const types = ["image/png", "image/jpeg"];
  const imgRef = useRef();

  const { sendRequest, status } = useHttp(addHostel);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/hostelStudent");
    }
  }, [status]);

  const addHostelHandler = (hostelData) => {
    sendRequest(hostelData);
  };

  const [places, setPlaces] = useState({ value: "Flat" });
  const [spaces, setSpaces] = useState({ value: "1 RK" });
  const [about, setAbout] = useState({ value: "" });
  const addressLineRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();
  const guestRef = useRef();
  const propAmen1Ref = useRef();
  const propAmen2Ref = useRef();
  const propAmen3Ref = useRef();
  const propAmen4Ref = useRef();
  const roomFt1Ref = useRef();
  const roomFt2Ref = useRef();
  const roomFt3Ref = useRef();
  const roomFt4Ref = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const aboutRef = useRef();

  const placeChangeHandler = (event) => {
    setPlaces({ value: event.target.value });
  };

  const spaceChangeHandler = (event) => {
    setSpaces({ value: event.target.value });
  };

  const aboutChangeHandler = (event) => {
    setAbout({ value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    addHostelHandler({
      places: places,
      spaces: spaces,
      addressLine: addressLineRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      postalCode: postalCodeRef.current.value,
      guest: guestRef.current.value,
      propAmen1: propAmen1Ref.current.value,
      propAmen2: propAmen2Ref.current.value,
      propAmen3: propAmen3Ref.current.value,
      propAmen4: propAmen4Ref.current.value,
      roomFt1: roomFt1Ref.current.value,
      roomFt2: roomFt2Ref.current.value,
      roomFt3Ref: roomFt3Ref.current.value,
      roomFt4Ref: roomFt4Ref.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      mobile: mobileRef.current.value,
      email: emailRef.current.value,
      about: about,
      imageUrl: URL,
    });
  };

  const fileSelectHanlder = (event) => {
    if (event.target.files[0].size > 5242880) {
      alert("File is too big! File size should be less than 5MB");
      imgRef.current.value = "";
    } else {
      let selected = event.target.files[0];
      console.log(event.target.files[0]);
      if (selected && types.includes(selected.type)) {
        setSelectedFile(selected);
      } else {
        alert("Please select an image file (png or jpeg)");
      }
    }
  };

  const fileSubmitHandler = (e) => {
    e.preventDefault();
    const ref = storage.ref(`/images/${selectedFile.name}`);
    const uploadTask = ref.put(selectedFile);
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      console.error,
      async () => {
        ref.getDownloadURL().then((url) => {
          setSelectedFile(null);
          setProgress(0);
          setURL(url);
        });
      }
    );
  };

  return (
    <div className={classes.hostHostelPage}>
      <Navbar />
      <div>
        <div className={classes.formCard}>
          <form
            className={classes.hostelForm}
            onSubmit={submitHandler}
            id="hostelForm"
          >
            <div className={classes.headings}>
              <div className={classes.heading}>
                <h2>Enter your Hostel Details</h2>
                <p>
                  Provide all the necessary data about the hostel service that
                  you are providing. Do not leave any field blank. Upload proper
                  photographs of your property. It will help you reaching to
                  your target customers. Thank You!
                </p>
              </div>

              <img src={hostelForm} />
            </div>
            <div className={`${classes.control} ${classes.inputPlace}`}>
              <label htmlFor="places">What kind of place will you host ?</label>
              <select
                name="abc"
                id="places"
                onChange={placeChangeHandler}
                className={classes.general_input}
                required
              >
                <option value="">Choose</option>
                <option value="Flat">Flat</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Hostel">Hostel</option>
              </select>
            </div>
            <div className={`${classes.control} ${classes.inputSpace}`}>
              <label htmlFor="spaces">
                What kind of space will student have ?
              </label>
              <select
                id="spaces"
                name="abc"
                onChange={spaceChangeHandler}
                className={classes.general_input}
                required
              >
                {" "}
                <option value="">Choose</option>
                <option value="1 RK">1 RK</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </select>
            </div>
            <div className={classes.control}>
              <label>Address of the location</label>
              <label htmlFor="addressLine">Address Line</label>
              <input
                type="text"
                ref={addressLineRef}
                className={`${classes.general_input} ${classes.wider_input}`}
                required
              ></input>
              <div className={classes.justtoflex}>
                <div className={classes.small_address}>
                  <label>City</label>
                  <input
                    type="text"
                    ref={cityRef}
                    className={`${classes.general_input} ${classes.wide_input}`}
                    required
                  ></input>
                </div>
                <div className={classes.small_address}>
                  <label>State</label>
                  <input
                    type="text"
                    ref={stateRef}
                    className={`${classes.general_input} ${classes.wide_input}`}
                    required
                  ></input>
                </div>
                <div className={classes.small_address}>
                  <label>Postal Code</label>
                  <input
                    type="number"
                    ref={postalCodeRef}
                    className={`${classes.general_input} ${classes.wide_input}`}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className={`${classes.control} ${classes.inputGuest}`}>
              <label>Number of guest you would like to welcome ?</label>
              <input
                type="number"
                ref={guestRef}
                className={classes.general_input}
                required
              ></input>
            </div>
            <div className={classes.control}>
              <label>Property Amenities</label>
              <div className={classes.justtoflex}>
                <input
                  type="text"
                  ref={propAmen1Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={propAmen2Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={propAmen3Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={propAmen4Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
              </div>
            </div>
            <div className={classes.control}>
              <label>Room Features</label>
              <div className={classes.justtoflex}>
                <input
                  type="text"
                  ref={roomFt1Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={roomFt2Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={roomFt3Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
                <input
                  type="text"
                  ref={roomFt4Ref}
                  className={`${classes.general_input} ${classes.mobChange}`}
                  required
                ></input>
              </div>
            </div>
            <div className={classes.control}>
              <label>Add a image of your hostel</label>
              <div>
                <input
                  type="file"
                  onChange={fileSelectHanlder}
                  ref={imgRef}
                ></input>
                <button
                  onClick={fileSubmitHandler}
                  className={classes.uploadBtn}
                >
                  Upload
                </button>
              </div>

              {selectedFile && (
                <div className={classes.progressBarContainer}>
                  <div
                    className={classes.progress__bar}
                    style={{ width: progress + "%" }}
                  ></div>
                </div>
              )}
            </div>
            <div className={`${classes.control} ${classes.inputTitle}`}>
              <label>Title</label>
              <input
                type="text"
                ref={titleRef}
                className={classes.general_input}
                required
              ></input>
            </div>
            <div className={classes.control}>
              <label>About your hostel</label>
              <textarea
                rows="7"
                columns="5"
                placeholder="message"
                form="hostelForm"
                onChange={aboutChangeHandler}
                className={classes.textarea}
                ref={aboutRef}
                required
              ></textarea>
            </div>
            <div className={`${classes.control} ${classes.inputPrice}`}>
              <label>Price/Month</label>
              <input
                type="number"
                ref={priceRef}
                className={classes.general_input}
                required
              ></input>
            </div>
            <div className={`${classes.control} ${classes.inputMobile}`}>
              <label>Mobile Number</label>
              <input
                type="text"
                ref={mobileRef}
                className={classes.general_input}
                required
              ></input>
            </div>
            <div className={`${classes.control} ${classes.inputEmail}`}>
              <label>Email</label>
              <input
                type="email"
                ref={emailRef}
                className={classes.email_input}
                autoComplete="false"
                required
              ></input>
            </div>
            <div className={classes.actions}>
              <button type="submit">Add Hostel</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HostelHost;
