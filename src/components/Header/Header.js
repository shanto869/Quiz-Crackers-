import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg background text-white fixed-top">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bold text-yellow font-ubuntu" to="/home"><span className="logo-color "> Primo </span>
                    Quiz Context</Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <Bars3Icon className="icons text-white" />
                </button>
                <div className="collapse navbar-collapse menu-font fs-6" id="navbar-menu">
                    <div className="navbar-nav ms-auto text-white                                            ">
                        <NavLink className="nav-link nav-hover" aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link nav-hover" aria-current="page" to="/topics">Topics</NavLink>
                        <NavLink className="nav-link nav-hover" to="/statistics">Statistics</NavLink>
                        <NavLink className="nav-link nav-hover" to="/blog">Blog</NavLink>

                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;