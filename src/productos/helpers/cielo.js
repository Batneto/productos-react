import React from 'react'

export const cielo = (rating) => {
    let valoracion = Math.round(rating);
    let valoracionInversa= 5-valoracion;
    let estrellasLuminosas=[];
    let estrellasApagadas=[]

    for (let i = 0; i < valoracion; i++) {
        estrellasLuminosas.push(i);
        
    }
    for (let i = 0; i < valoracionInversa; i++) {
        estrellasApagadas.push(i);
        
    }
    console.log(valoracionInversa);
  return{
    estrellasLuminosas,
    estrellasApagadas

  }  

}
