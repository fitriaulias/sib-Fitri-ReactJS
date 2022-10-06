import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="py-2 bg-Light border-bottom ">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className='nav-link link-dark px-2 active'>
                                <h5>Testing Example</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-dark px-2 active">
                                <h5>Home</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link link-dark px-2 active">
                                <h5>About</h5>
                            </Link>
                        </li>
                    </ul>
                    <div>
                    <br />
                    <p>Nama: Fitri Aulia S.</p>
                    <p>Kode Peserta: RCTN-KS-005-024</p>
                    </div>
                </div>
            </nav>
        </>
    )
  }


export default Header;