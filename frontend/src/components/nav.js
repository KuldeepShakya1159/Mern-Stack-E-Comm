import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../images/logo.jpg';

const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img src={img}
            alt = "logo"
            className="logo"/>
            {auth ?
                <ul className="nav-ul" >
                    <li><Link to="/">Products </Link> </li>
                    <li><Link to="/add">add</Link> </li>
                    {/* <li><Link to="/update">update</Link> </li> */}
                    <li><Link to="/profile">profile</Link> </li>
                    <li><Link to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>

                </ul>
                :
                <ul className="nav-ul nav-right ">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;