import React from 'react';
import MainHeader from '../components/mainHeader.jsx';
import ChartsLayout from '../layouts/chartsLayout.jsx';


const Profile = () => {
    return (
        <article className="profile">
            <MainHeader />
            <section className="profileContainer">
                <ChartsLayout />
                <article className='keyData__Container'>

                </article>
            </section>

        </article>  
    );
}
export default Profile;