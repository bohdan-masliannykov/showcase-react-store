import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '@/shared/assets/images/logo.svg';
import { CartIcon } from '../../atoms/CartIcon/CartIcon';
import { useSelector } from 'react-redux';
import { Product } from '@/shared/types/product.type';
import { RootState } from '@/store';
import { CartState } from '@/shared/types/app-state.type';

const Header: React.FC = () => {
    const state: CartState = useSelector(
        (state: RootState) => state.cart
    );
    const count = state.items.reduce((acc: number, item: Product) => acc + item.quantity!, 0);

    return (
        <nav className="bg-white dark:bg-gray-900 w-full  border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <Link to={'/products'}>
                    <img style={{ width: '100px' }} src={Logo} alt="Shop Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-center items-center">
                        <Link to={'/cart'}>
                            <CartIcon count={count} />
                        </Link>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to={'products'} className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'contact'} className={({ isActive }) => isActive ? 'text-blue-700' : ''}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;