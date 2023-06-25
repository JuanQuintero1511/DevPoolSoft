import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import CardsContainer from "./CardsContainer";
import { getByUserName } from "../redux/actions";

import { useDispatch } from "react-redux";


const Home = () => {
  const [selectedField, setSelectedField] = useState(null);


  return (
    <div className="container-fluid"  >
      <div className="row">
        <div className="col-6 offset-2">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <CardsContainer
                  selectedField={selectedField}
                  setSelectedField={setSelectedField}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;