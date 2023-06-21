
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-bottom-dark fixed-top bg-transparent" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white">DEVPOOL</a>
        <form class="d-flex flex-grow-2 w-50 " role="search">
          <input class="form-control me-1 rounded-pill border-success" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <button class="btn btn-outline-success">Perfil</button>
      </div>
    </nav>


  );
}

export default Nav