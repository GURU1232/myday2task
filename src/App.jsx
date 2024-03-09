/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card1 from './Card1';
import Card2 from './C/Card2';
import Card3 from './C/Card3';
import './C/Card.css';


const App = () => {
  return (
    <div className="App">
      <section class="pricing py-5">
          <div class="container">
            <div class="row">
              <Card1/>
              <Card2/>
              <Card3/>
             </div>
             </div>
      </section>
 
  
    </div>
  );
};

export default App;