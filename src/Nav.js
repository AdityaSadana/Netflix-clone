import React, { useEffect, useState} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.remoteEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=16" alt="Netflix"/>

            <img className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Avatar"/>
        </div>
    )
}

export default Nav
