import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import image  from 'Images/image.jpeg';

ReactDOM.render(
  <h1>Hello, world! <img src={image}/></h1>,
  document.getElementById('root')
);