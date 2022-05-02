import ProfileForm from "./ProfileForm";
import Footer from "../../components/NavbarandFooter/Footer";
import Navbar from "../../components/NavbarandFooter/Navbar";
import UserProfile from "./User";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <UserProfile />
      {/* <ProfileForm /> */}
      <Footer />
    </div>
  );
};
export default Profile;
