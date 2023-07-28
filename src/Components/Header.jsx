import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (

            // <nav className="navbar navbar-expand-lg">
            //     <div className="container-fluid">
            //         <a className="navbar-brand" href="#">Navbar</a>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon" />
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //                 <li className="nav-item">
            //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="#">About Us</a>
            //                 </li>
            //                 <li className="nav-item dropdown">
            //                 <a className="nav-link active" aria-current="page" href="#">Services</a>
            //                 </li>
            //                 <li className="nav-item">
            //                 <a className="nav-link active" aria-current="page" href="#">Contact</a>
            //                 </li>
            //             </ul>
            //             <form className="d-flex" role="search">
            //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            //                 <button className="btn btn-outline-success" type="submit">Search</button>
            //             </form>
            //         </div>
            //     </div>
            // </nav>

            <nav className="nabar bg-dark py-3">
                <div className="container">
                    <div className="navbar__All d-flex justify-content-around">
                        <div className="navbar__left">
                            <a href="#">Start Bootstrap</a>
                        </div>

                        <div className="navbar__right">
                            <ul>
                                <li>
                                <a className="Active" href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Services</a>
                                <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </nav>

            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <div className="container px-lg-5">
            //         <a className="navbar-brand" href="#!">Start Bootstrap</a>
            //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            //                 <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
            //                 <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            //                 <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}
