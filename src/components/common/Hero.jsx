import React from 'react';
import { Link } from 'react-router-dom';
import TitleOverview from './TitleOverview';

export default function Hero({ image, title, link, description }) {
  return (
    <div 
      className="relative h-5/6 bg-cover bg-fixed bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full flex items-end text-white absolute bottom-0 bg-gradient-to-t from-gray-950 to-transparent">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to"></div> */}

        <div className="w-full max-w-5xl mx-auto p-4 sm:px-12">
          <Link to={link}>
            <h3 className="text-2xl drop-shadow-md font-bold mb-5">{title}</h3>
          </Link>
          <TitleOverview text={description} limit={280} className="max-w-3xl" />
        </div>
      </div>
    </div>
  );
}
