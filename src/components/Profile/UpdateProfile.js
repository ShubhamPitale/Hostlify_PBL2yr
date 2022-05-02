import classes from "./Profile.module.css";

import ProfileForm from "./ProfileForm";
import Footer from "../../components/NavbarandFooter/Footer";
import ProfileUpdateForm from "./UpdateForm";
import UpdateUserHeader from "./UpdateUserHeader";

const UpdateProfile = () => {
  return (
    <div>
      <UpdateUserHeader />
      <ProfileUpdateForm />
      <Footer />
    </div>
  );
};
export default UpdateProfile;
