import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i className='fa fa-user-circle text-primary'></i> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
