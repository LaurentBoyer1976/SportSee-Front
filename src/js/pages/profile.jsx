
import MainHeader from "./../components/mainHeader.jsx";
import ChartsLayout from "./../layouts/chartsLayout.jsx";
import KeyDataCard from "./../components/keyDataCard.jsx";
import PropTypes from "prop-types";

const Profile = ({ userId }) => {

  if (!userId) {
    return <div>User ID is missing</div>;
  }

  return (
    <div className="profile">
      <MainHeader userId={userId} />
      <ChartsLayout userId={userId} />
      <KeyDataCard userId={userId} />
    </div>
  );
};
Profile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Profile;
