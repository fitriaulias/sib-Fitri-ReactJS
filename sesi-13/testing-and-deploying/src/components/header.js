import React from 'react';

function Header() {
    return (
        <>
            <nav className="py-2 bg-Light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2 active" aria-current="page">
                                <h5>Testing Example</h5>
                            </a>
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