import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header-outer">
                <div className="header-logo">
                    <h1>Foodie<span>.</span></h1>
                </div>

                <div className="header-link">
                    <NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to='/menu' className={({isActive}) => isActive ? "active" : ""}>Menu</NavLink>
                    <NavLink to='/fooddetails' className={({isActive}) => isActive ? "active" : ""}>Food Details</NavLink>
                    <NavLink to='/cart' className={({isActive}) => isActive ? "active" : ""}>Cart</NavLink>
                    <NavLink to='/checkout' className={({isActive}) => isActive ? "active" : ""}>Checkout</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                </div>

                <div className="header-search">
                    <p className='search-icon-input'><CiSearch size={20} /></p>
                    <input type="search" placeholder='Search for food..' />
                    <p><AiOutlineShoppingCart size={30}/></p>
                    <button>Sign in</button>
                </div>
            </div>
        </>
    );
};

export default Header;