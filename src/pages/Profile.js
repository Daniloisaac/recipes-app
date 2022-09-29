import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainProfile from '../components/MainProfile';

function Profile() {
  return (
    <div>
      <Header
        title="Profile"
        search={ false }
      />
      <MainProfile />
      <Footer />
    </div>
  );
}

export default Profile;
