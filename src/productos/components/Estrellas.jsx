
import React from 'react'

import {cielo} from '../helpers/cielo'
export const Estrellas = ( {rating }) => {

  const { estrellasApagadas,estrellasLuminosas} = cielo(rating)
  

  return (

    <>
      {estrellasLuminosas.map(() => (

          <span>✦</span>   //

      ))}

      {estrellasApagadas.map(() => (

          <span>✧</span>    //
    
      ))}

    </>
  );
};