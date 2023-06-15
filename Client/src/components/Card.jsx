import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Card = () => {
  return (
    <div className="card text-center">
        <h5 className="card-title"> TITULO ESPECIFICO</h5>
      <img src='https://i.redd.it/al4qtxxamz5b1.jpg' className="card-img-top" alt="Card" style={{maxHeight: '250px' , maxWidth: '400px' , alignSelf:'center'}} />
      <div className="card-body">
        <p className="card-text"> BREVE DESCRIPCION</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer text-body-secondary">
        2 days ago
      </div>
    </div>
  );
};


export default Card