import React from 'react';
import { useSelector } from 'react-redux';
import { AllBooks } from '../index'

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <>
    <div>
      <h1 className='welcome'>Welcome, {username}</h1>
    </div>
    <AllBooks/>
    </>
  );
};

export default Home;
