import React from 'react';
import Home from '../../component/Home/home';
import About from '../../component/About/about';
import Recipe from '../../component/Recipe/recipe';
import Tools from '../../component/Tools/tools';


const Homepage = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Tools/>
      <Recipe/>
    </div>
  );
};

export default Homepage;
