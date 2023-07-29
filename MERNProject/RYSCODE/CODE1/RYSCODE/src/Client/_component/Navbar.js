import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/style2.css';
import logo from '../Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/free_Delivery-removebg-preview (1).png';

const Navbar = () => {
    const location = useLocation();

    let style = {};
    if ((location.pathname === '/') || (location.pathname === '/Authentication')) {

        style = {}
    } else {
        style = {
            background: "#2a2bad"
        }
    }

    const handleNavbar = () => {
        const getClass = document.getElementById('js-tlrk-nav-drawer');
        const close = document.getElementById('js-tlrk-nav-overlay');

        getClass.classList.add('TK-Drawer--Active');
        close.classList.add('TK-Nav-Overlay--Active');

        setTimeout(() => {
            getClass.classList.remove('TK-Drawer--Active');
            close.classList.remove('TK-Nav-Overlay--Active');
        }, 2000);

    }

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
    }

    return (
        <>
            <nav id="js-tlrk-nav" className={`TK-Nav TK-Nav--Shadow TK-Nav--Loaded `} style={style} data-tlrk-nav-version="3.4.20"
                data-tlrk-nav-template="nav-main-noa-rel-component">
                <section className="TK-Bar">
                    <div className="TK-container TK-Bar-container">
                        <figure className="TK-TLRK-Brand TK-TLRK-Brand--Full"><Link to="/"> 
                        
                        <img src={logo} alt="" style={ ((location.pathname ==='/')) ?{width:'250px',objectFit:'contain'} : {width:'170px',objectFit:'contain'} } />
                        {/* <h3 className='my-2'><span className='fw-bold text-danger mx-2 fs-2'>&lt;</span><span className='fs-3 '>RYS Code Blog</span><span className='fw-bold text-danger mx-2 fs-2'>/&gt;</span></h3> */}
                         </Link> </figure>


                        <div className="TK-Drawer " id="js-tlrk-nav-drawer">

                        {location.pathname === '/admin' ? 
                        <ul className="TK-Context-Menu TK-Menu">
                                <li className="TK-Menu-Item"><Link to="admin?HTML" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">HTML</Link></li>
                                <li className="TK-Menu-Item"><Link to="admin?CSS" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">CSS</Link></li>
                                <li className="TK-Menu-Item"><Link to="admin?JAVASCRIPT" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">JAVA-SCRIPT</Link></li>
                                <li className="TK-Menu-Item"><Link to="admin?BOOTSTRAP" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">BOOTSTRAP</Link></li>
                                <li className="TK-Menu-Item"><Link to="admin?PHP" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">PHP</Link></li>
                                <li className="TK-Menu-Item"><Link to="admin?PYTHON" className="TK-Menu-Item-Link fs-5"
                                    data-match-exact-path="" data-track-instance="1">PYTHON</Link></li>
                                

                            </ul>
                        : 
                        
                            <ul className="TK-Aside-Menu TK-Aside-Menu--Max">


                                <li className="TK-Aside-Menu-Item TK--Not-Auth" id="js-tlrk-nav-not-auth-container"><Link
                                    to="/about" title="About Us" className="TK-Aside-Menu-Button"
                                    data-match-exact-path=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                                    </svg> <span className="TK-Aside-Menu-Button-Text">About Us</span></Link></li>
                                <li className="TK-Aside-Menu-Item TK--Not-Auth" id="js-tlrk-nav-not-auth-container"><Link
                                    to="Authentication?contact" title="Contact Us" className="TK-Aside-Menu-Button"
                                    data-match-exact-path=""><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                        <path
                                            d="M12.75 14.5h-11A1.752 1.752 0 010 12.753v-7.37a.092.092 0 01.005-.026.1.1 0 000-.023.782.782 0 01.01-.093.63.63 0 01.02-.071l.007-.021V5.14a.828.828 0 01.036-.088.673.673 0 01.045-.078.078.078 0 00.009-.02.069.069 0 01.01-.02.1.1 0 01.028-.019.1.1 0 00.019-.015.68.68 0 01.077-.076.124.124 0 00.015-.024.106.106 0 01.019-.016L6.2.354a1.736 1.736 0 012.1 0l5.9 4.431a.1.1 0 01.018.02.118.118 0 00.017.019.591.591 0 01.076.075.109.109 0 00.02.018.1.1 0 01.019.017.077.077 0 01.01.02.088.088 0 00.01.02c.017.026.031.053.045.078a.9.9 0 01.039.1l.007.021a.5.5 0 01.03.164.1.1 0 000 .023.092.092 0 01.005.027v7.37A1.752 1.752 0 0112.75 14.5zM1.5 6.883v5.87a.253.253 0 00.25.247h11a.253.253 0 00.249-.25V6.883L8.3 10.412a1.737 1.737 0 01-2.1 0zM7.25 1.5a.248.248 0 00-.15.053L2 5.383l5.1 3.83a.253.253 0 00.15.052.245.245 0 00.15-.053l5.1-3.829-5.1-3.83a.248.248 0 00-.15-.053z"
                                            transform="translate(.75 .75)"></path>
                                    </svg> <span className="TK-Aside-Menu-Button-Text">Contact Us</span></Link></li>

                                <li className="TK-Aside-Menu-Item TK--Not-Auth" id="js-tlrk-nav-not-auth-container"><Link
                                    to="Authentication?registration" title="Registration" className="TK-Aside-Menu-Button"
                                    data-match-exact-path=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                    </svg> <span className="TK-Aside-Menu-Button-Text">Registration</span></Link></li>

                                {!localStorage.getItem('auth-token') ?
                                    <li className="TK-Aside-Menu-Item TK--Not-Auth" id="js-tlrk-nav-not-auth-container"><Link
                                        to="Authentication?Login" title="Login" className="TK-Aside-Menu-Button"
                                        data-match-exact-path=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16"
                                            height="16">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="M13.75 14.5a.751.751 0 01-.75-.75v-.5a5.75 5.75 0 10-11.5 0v.5a.75.75 0 01-1.5 0v-.5a7.175 7.175 0 011.319-4.159A7.262 7.262 0 014.69 6.476 3.717 3.717 0 013.5 3.75a3.75 3.75 0 117.5 0 3.716 3.716 0 01-1.19 2.726 7.263 7.263 0 013.371 2.615A7.175 7.175 0 0114.5 13.25v.5a.751.751 0 01-.75.75zm-6.5-13A2.25 2.25 0 109.5 3.75 2.253 2.253 0 007.25 1.5z"
                                                transform="translate(.75 .75)"></path>
                                        </svg> <span className="TK-Aside-Menu-Button-Text">Login</span></Link></li>
                                    :
                                    <li className="TK-Aside-Menu-Item"><Link className="TK-Aside-Menu-Button"
                                        title="LogOut" onClick={handleLogout} data-match-starts-with-path="" data-track-instance="1"><svg xmlns="http://www.w3.org/2000/svg" width="20" c height="20"  fill="currentColor" className="bi bi-box-arrow-right fw-bold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                        </svg> <span className="TK-Aside-Menu-Button-Text">LogOut</span></Link></li>
                                }

                            </ul>
                        }
                         
                        </div>
                        <div className="TK-Drawer-Extension"></div>
                        <div className="TK-Aside TK--Mobile">
                            <ul className="TK-Aside-Menu">
                                <li className="TK-Aside-Menu-Item"><button type="button" onClick={handleNavbar} aria-label="Main Navigation"
                                    className="TK-Aside-Menu-Button TK-Aside-Menu-Button--Toggle-Drawer"
                                    id="js-tlrk-nav-drawer-button"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                        viewBox="0 0 512 512" fill="#000">
                                        <path d="M0 91h512v60H0zM0 237.3h512v60H0zM0 383.5h512v60H0z"></path>
                                    </svg></button></li>
                            </ul>
                        </div>
                    </div>
                </section><button type="button" className="TK-Nav-Overlay" id="js-tlrk-nav-overlay" >close mobile menu</button>
            </nav>
        </>
    )
}

export default Navbar
