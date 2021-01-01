import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    location,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p class='lead'>{status}</p>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {social && social.twitter && (
          <a href={social.twitter}>
            <i class='fa fa-twitter fa-2x'></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook}>
            <i class='fa fa-facebook fa-2x'></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube}>
            <i class='fa fa-youtube fa-2x'></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram}>
            <i class='fa fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
