import React from 'react';

const Header = ({ nome, curso, instituição, instagram }) => (
  <div>
    <h1>{nome}</h1>
    <p>{curso}</p>
    <p>{instituição}</p>
    <p>{instagram}</p>
  </div>
);

export default Header;
