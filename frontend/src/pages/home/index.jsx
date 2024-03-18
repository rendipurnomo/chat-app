import React, { useState } from 'react';
import Sidebar from '../../components/siderbar';
import MessagesContainer from '../../components/messages/MessagesContainer';
import MobileMenu from '../../components/mobileMenu';

const Home = () => {
  const [slide, setSlide] = useState(true);

  return (
    <div className="h-screen relative">
      <div
        className={`flex max-w-md h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ${
          slide ? 'justify-start' : ' justify-end'
        }`}>

          <div className={`${slide ? 'block' : 'hidden'}`}>
        <Sidebar setSlide={setSlide} />
          </div>

        <div className={`${slide ? 'hidden' : 'block'}`}>
        <MessagesContainer />
        </div>
        </div>
      <MobileMenu setSlide={setSlide} slide={slide} />
    </div>
  );
};

export default Home;
