import React, { useState } from "react";
import Dashboard from "./dashboard";
import Order from "./order";
import Product from "./product"; 
import Payment from "./payment"; 
import User from "./user";
import Home from "./home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleMenuClick = (menu) => {
    setActiveComponent(menu);
  };

  return (
    <div className="d-flex">
      <Dashboard onMenuClick={handleMenuClick} />
      <div className="container-fluid">
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'order' && <Order />}
        {activeComponent === 'product' && <Product />} 
        {activeComponent === 'payment' && <Payment />} 
        {activeComponent === 'user' && <User />}
      </div>
    </div>
  );
};

export default App;
