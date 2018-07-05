import React from 'react';
import loaderSrc from '../../assets/loader.gif';
import './index.css';

const Loader = function(props){
  return(
    <div>
      <img
        className="loader"
        alt="loader image"
        src={loaderSrc}
      />
    </div>
  );
};

export default Loader;
