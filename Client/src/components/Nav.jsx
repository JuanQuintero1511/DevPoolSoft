import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-bottom-dark fixed-top bg-transparent" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-dark">DEVPOOL</a>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Tecnologias
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    otro filtro
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

        <form class="d-flex flex-grow-2 w-50" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form>
        {/* <Link> */}
        <button type="button" class="btn btn-warning">
          <i class="bi bi-patch-check mr-1" ></i>
          Premium
        </button>
        

        {/* </Link> */}
        
        <i class="bi bi-person-circle Heading"></i>
        
      </div>
    </nav>


  );
}

export default Nav;