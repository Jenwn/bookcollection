import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='banner'>
      <nav className='navigation'>
        {isLoggedIn ? (
          <div className='navbar'>
            {/* The navbar will show these links after you log in */}
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/home" className='navLink'>Search</Link>
            <Link to="/collection" className='navLink'>My Collection</Link>
            <Link to="/wishlist" className='navLink'>Wishlist</Link>
            <Link to="/readinglog" className='navLink'>Reading Log</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div className='navbar'>
            {/* The navbar will show these links before you log in */}
            <Link to="/login" className='navLink'>Login</Link>
            <Link to="/signup" className='navLink'>Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
