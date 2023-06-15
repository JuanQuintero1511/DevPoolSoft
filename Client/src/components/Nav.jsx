
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">DEVPOOL</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mx-auto my-2" role="search" style={{ maxWidth: '600px' }}>
            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" style={{ width: '900px' }} />
          </form>
          <span className="navbar-text">
            <button className="btn btn-outline-light">Profile</button>
          </span>    
        </div>
      </div>
    </nav>
  );
}

export default Nav