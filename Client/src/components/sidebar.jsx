import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = () => {
  const [selectedField, setSelectedField] = useState('tech-news');

  return (
    <div className="container-fluid bg-transparent">
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-1 position-fixed vh-100 p-0 align-to mt-5 bg-transparent">
          <div className="navbar-nav flex-column h-200 d-flex ml-6 ">
            <a href='/home' className={`nav-link ${selectedField === 'tech-news' ? 'active' : ''}`} onClick={() => setSelectedField('tech-news')}>
              <i className="bi bi-newspaper fs-4  text-success" ></i>
            </a>
    
            <a href='/community' className={`nav-link ${selectedField === 'community' ? 'active' : ''}`} onClick={() => setSelectedField('community')}>
              <i className="bi bi-people fs-4 text-success"></i>
            </a>

            <a href='/JobsOffers' className={`nav-link ${selectedField === 'job-applications' ? 'active' : ''}`} onClick={() => setSelectedField('job-applications')}>
              <i className="bi bi-briefcase fs-4 text-success "></i>
            </a>

            {/* <a href='/JobsOffers'
              className={`nav-link ${selectedField === 'job-applications' ? 'active' : ''}`}
              onClick={() => setSelectedField('job-applications')}
            >
              Job Applications
            </a>

            <a href='/test1'
              className={`nav-link ${selectedField === 'settings' ? 'active' : ''}`}
              onClick={() => setSelectedField('settings')}
            >
              Settings
            </a> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;

