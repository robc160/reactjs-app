import React from 'react';
import loaderSrc from '../../assets/loader.png';

const Loader = function(props){
  return(
    <div>
      <img
        alt="loader image"
        src={loaderSrc}
      />
    </div>
  );
};

export default Loader;
