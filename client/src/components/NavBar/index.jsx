import React from 'react';
import { NavLink } from 'react-router-dom';

export default function index() {
    return (
        <header>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center  bg-info text-white my-2">
          <div className="p-2 w-90">
            <h2>Siavash Ashkiani</h2>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-10" id="collapsingNavbar3">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <NavLink className="nav-item" to="/">
                {/* <a className="nav-link" href="#">About Me </a> */}
                <button type="button" className="btn btn-link text-light">About Me</button>
              </NavLink>
              <NavLink className="nav-item" to="/Portfolio">
                {/* <a className="nav-link" >Portfolio </a> */}
                <button type="button" className="btn btn-link text-light">Portfolio</button>
              </NavLink>
              <NavLink className="nav-item" to="/Contact">
                {/* <a className="nav-link" >Contact </a> */}
                <button type="button" className="btn btn-link text-light">Contact</button>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    )
}
