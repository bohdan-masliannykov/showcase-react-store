import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-slate-50 text-indigo border-b-2 border-indigo-500">
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <div className="logo text-2xl font-bold">
                    <img style={{ width: '100px' }} src="./src/shared/assets/images/logo.svg" alt="Shop Logo" />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to={'/'} className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to={'/products'} className="hover:text-gray-300">Products</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className="hover:text-gray-300">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className='header__settings flex'>
                    <div className="cart">Cart</div>
                    <div className="settings">Settings</div>
                </div>
            </div>
        </header>
    );
}

export default Header;