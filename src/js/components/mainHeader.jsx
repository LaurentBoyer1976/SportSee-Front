import React, { useState, useEffect } from "react";
import UserName from "./userName";

const MainHeader = () => {

    //TODO : Récupérer le nom de l'utilisateur et déplacer le call API dans un hook.
  const [userName, setUserName] = useState("");

  // Simuler une récupération de données utilisateur
  useEffect(() => {
    // Remplacez cette partie par un appel API si nécessaire
    const fetchUserName = async () => {
      const user = { name: "Jean" }; // Exemple de données utilisateur
      setUserName(user.name);
    };

    fetchUserName();
  }, []);

  return (
    <header>
      <div>
        <UserName name={userName} />
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  );
};

export default MainHeader;