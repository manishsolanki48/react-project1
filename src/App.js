import React from 'react';
import './App.css';
import Banner from './Banner.jsx';
import Blog from './Blog-sction';
import Blogwrapper from './Blog-box';
import Videogellary from './Video-section.jsx';
import Bannertextholder from './banner-text';
import Oursection from './Our-section';
import Service from './service-section';
import Product from './Product-section';
import Topheader from './Menu';
import Form from './Form';
import Bar from './Bar';

function App() {
  return (
    <div className="App">
      <Bar></Bar>
      <Topheader></Topheader>
      <Banner></Banner>
      <Bannertextholder></Bannertextholder>
      <Blog></Blog>
      <Blogwrapper></Blogwrapper>
      <Videogellary></Videogellary>
      <Oursection></Oursection>
      <Service></Service>
      <Product></Product>
      <Form></Form>
    </div>
  );
}

export default App;
