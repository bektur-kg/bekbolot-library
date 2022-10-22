import React from 'react';
import cls from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cls["lds-dual-ring"]}></div>
  );
};

export default Loader;
