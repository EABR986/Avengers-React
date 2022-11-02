import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © EABR Made with ❤️ in ${year}`}</footer>;
};

export default Footer;
