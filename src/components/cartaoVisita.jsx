// src/components/CartaoDeVisita.js
import React from 'react';
import Header from './Header';
import Contato from './Contato';

const CartaoVisita = (props) => (
  <div>
    <Header nome={props.nome} curso={props.curso} instituição={props.instituição} instagram={props.instagram}/>
    <Contato email={props.email} telefone={props.telefone} />
  </div>
);

export default CartaoVisita;
