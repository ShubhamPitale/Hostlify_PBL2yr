import Navbar from "../components/NavbarandFooter/Navbar";
import Footer from "../components/NavbarandFooter/Footer";

const Notfound = () => {
  return (
    <>
      <Navbar />
      <h1
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        NO DATA FOUND!!!
      </h1>
      <Footer />
    </>
  );
};
export default Notfound;
