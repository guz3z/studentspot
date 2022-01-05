import React from 'react';
import Cookies from 'universal-cookie';
import './clcsidebar.css';

const cookies = new Cookies();

export function CLCSidebar() {

    const logout = () => {
        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('fullName');
        cookies.remove('email');
        cookies.remove('hashedPassword');

        window.location.href = 'http://localhost:3000'
    }

    return (
        <div className='clcsb-cont'>
            <div className="clcsb-icon-cont">
                <div className="clcsb-icon">
                    <a href='http://localhost:3000/mainfeed'><i className="fas fa-th-large"></i></a>
                </div>
                <div className="clcsb-icon">
                    <i className="fas fa-sign-out-alt" onClick={logout}></i>
                </div>
            </div>
            
        
        </div>
    )
}


