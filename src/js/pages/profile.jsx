import MainHeader from "./../components/mainHeader.jsx";
import ChartsLayout from "./../layouts/chartsLayout.jsx";
import KeyDataCard from "./../components/keyDataCard.jsx";
import PropTypes from "prop-types";
import "../../styles/scss/pages/profile.scss"; 

/**
 * @description Profile
 * @param {string} userId - ID de l'utilisateur.
 * @returns {JSX.Element}
 */

const Profile = ({ userId }) => {
  if (!userId) {
    return <div>User ID is missing</div>;
  }

  return (
    <article className="profile">
      <section className="userProfile">
        <MainHeader userId={userId} />
        <ChartsLayout userId={userId} />
      </section>      
      <KeyDataCard userId={Number(userId)} />
    </article>
  );
};
Profile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Profile;
