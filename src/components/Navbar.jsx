import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        document.body.setAttribute('data-bs-spy', 'scroll');
        document.body.setAttribute('data-bs-target', '.navbar');
        document.body.setAttribute('data-bs-offset', '0');
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top mt-lg-4" >
                <div className="container-lg">
                    <a className="navbar-brand" >Portfolio</a>

                    <div className="d-lg-block d-none">
                        <ul className="navbar-nav gap-3 row-gap-1 text-center">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" className="nav-link">Service</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div> 

                    <button type="button" className='navbar-toggler row-gap-1 p-2 d-flex flex-column d-lg-none' data-bs-toggle="modal" data-bs-target="#myModal">
                        <div id="line"></div>
                        <div id="line"></div>
                        <div id="line"></div>
                    </button>
                </div>
            </nav>
            <div className="modal text-dark fade" id="myModal">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item " data-bs-dismiss="modal">
                                    <a href="#home" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <a href="#about" className="nav-link">About</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <a href="#service" className="nav-link">Service</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <a href="#portfolio" className="nav-link">Portfolio</a>
                                </li>
                                <li className="nav-item" data-bs-dismiss="modal">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar