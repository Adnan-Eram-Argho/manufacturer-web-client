import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {
                                user && <p>{user?.displayName}</p>
                            }
                        </li>
                        {
                            user && <li><Link to={`/dashboard`}>Dashboard</Link></li>
                        }
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>

                        <li>
                            {
                                user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <Link to="/signup">Sign up</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Cool Tools</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        {
                            user && <p>{user?.displayName}</p>
                        }
                    </li>
                    {
                        user && <li><Link to={`/dashboard`}>Dashboard</Link></li>
                    }
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li>
                        {
                            user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> : <Link to="/signup">Sign up</Link>
                        }
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;