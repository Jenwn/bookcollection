import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CollectedBooks, WishBooks, SingleBook, ReadingLog, Front, Stats, Bars, Genre, Ratings } from '../features/index';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<CollectedBooks/>}/>
          <Route path="/wishlist" element={<WishBooks/>}/>
          <Route path="/collection/:bookid" element={<SingleBook/>}/>
          <Route path="/readinglog" element={<ReadingLog/>}/>
          <Route path="/stats/*" element={<Stats/>}/>
          <Route path="/stats" element={<Bars/>}/>
          <Route path="/genres/*" element={<Genre/>}/>
          <Route path="/ratings/*" element={<Ratings/>}/>
        </Routes>
      ) : (
        <Routes>
          {/* <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}
          <Route
            path="/"
            element={<Front/>}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
