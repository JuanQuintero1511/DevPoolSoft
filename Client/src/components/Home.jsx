import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar';
import CardsContainer from './CardsContainer';

const Home = () => {
  const [selectedField, setSelectedField] = useState('tech-news');

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        
        <div className="col-6 offset-2">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12">
                <CardsContainer selectedField={selectedField} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;







