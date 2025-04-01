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
      <MainHeader userId={userId} />
      <section className="userProfile">
        <ChartsLayout userId={userId} />
        <KeyDataCard userId={Number(userId)} />
      </section>      
     
    </article>
  );
};
Profile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Profile;
