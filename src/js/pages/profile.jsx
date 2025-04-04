// Info :Description: Profile page component for displaying user data and charts
import { useParams } from "react-router-dom";
import MainHeader from "./../components/mainHeader.jsx";
import ChartsLayout from "./../layouts/chartsLayout.jsx";
import KeyDataCard from "./../components/keyDataCard.jsx";
import "../../styles/scss/pages/profile.scss";

/**
 * @description Profile
 * @param {string} userId - L'id de l'utilisateur
 * @param {string} userName - le prénom de l'utilisateur 
 * @returns {JSX.Element}
 */
const Profile = () => {
  const { userId } = useParams(); // Récupère l'ID utilisateur depuis l'URL

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

export default Profile;
