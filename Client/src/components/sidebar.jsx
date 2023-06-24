import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = () => {

  const [selectedField, setSelectedField] = useState('tech-news');

  return (
    <div className="container-fluid">
      <div className='row'>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-1 position-fixed vh-100 p-0 align-to mt-5">
          <div className="navbar-nav flex-column h-100 d-flex align-items-start">
            <a href='/home'
              className={`nav-link ${selectedField === 'tech-news' ? 'active' : ''}`}
              onClick={() => setSelectedField('tech-news')}
            >
              Tech News
            </a>

            <a href='/community'
              className={`nav-link ${selectedField === 'community' ? 'active' : ''}`}
              onClick={() => setSelectedField('community')}
            >
              Community
            </a>

            <a href='/JobsOffers'
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
            </a>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default SideBar
