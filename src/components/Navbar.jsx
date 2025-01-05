import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router";
import './../App.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <span className="navbar-brand" >Movies App</span>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Movies</Link>
                            <Link className="nav-link " to="/watch-list">Watch List</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}