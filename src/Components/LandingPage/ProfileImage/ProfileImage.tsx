import profile from "/profile.svg";
import "./ProfileImage.scss";
import { BaseParameter } from "../../../Contracts/Parameter";

const ProfileImage = ({ className }: BaseParameter) => {
  return (
    <div className={className + " " + "background"}>
      <img
        className="profile-image"
        src={profile}
        alt="Profile Image of Fabian Dasler"
      />
    </div>
  );
};

export default ProfileImage;
