import React from 'react';

import Navbar from '../features/navbar/Navbar';
import { Footer } from '../features';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div className='app'>
      <div className='header'><img className="banner" src="https://assets.brightspot.abebooks.a2z.com/dims4/default/5a821f6/2147483647/strip/true/crop/900x318+0+0/resize/1600x566!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F19%2Fa4%2F47c12dde0b10841d0d4a692306f9%2Fshelf-header-img.png"/><img className="banner" src="https://assets.brightspot.abebooks.a2z.com/dims4/default/5a821f6/2147483647/strip/true/crop/900x318+0+0/resize/1600x566!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F19%2Fa4%2F47c12dde0b10841d0d4a692306f9%2Fshelf-header-img.png"/>
      <img className="banner" src="https://assets.brightspot.abebooks.a2z.com/dims4/default/5a821f6/2147483647/strip/true/crop/900x318+0+0/resize/1600x566!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F19%2Fa4%2F47c12dde0b10841d0d4a692306f9%2Fshelf-header-img.png"/>
      <img className='banner' src='https://assets.brightspot.abebooks.a2z.com/dims4/default/5a821f6/2147483647/strip/true/crop/900x318+0+0/resize/1600x566!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F19%2Fa4%2F47c12dde0b10841d0d4a692306f9%2Fshelf-header-img.png'/>
      </div>
      <div>
      <Navbar />
      <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
