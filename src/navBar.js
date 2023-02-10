import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light m-2">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-info">POKEMON</h1>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
