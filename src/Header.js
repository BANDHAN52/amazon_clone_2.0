import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'; 

function Header() {
  const [{basket}] = useStateValue();

  return (
    <nav className='header'>

        {/* logo on the left */}
        <Link to="/">
          <img 
            className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
          />
        </Link>


        {/* search box */}
      <div className='header__search'>
        <input type="text" className='header__searchInput' />
        <SearchIcon className="header__searchIcon" />
      </div>


        {/* 3 links on the right */}
        <div className='header__nav'>

            {/* 1st link */}
            <Link to="/login" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>

            {/* 2nd link */}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
             
        </div>


        {/* basket icon with number */}
        <Link to="/cheakout" className='header__link'>
            <div className='header__optionBasket'>
                
                //shopping basket icon
                <ShoppingBasketIcon />
                // number of items in the basket
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>

            </div>
        </Link>

    </nav>  
  )
}

export default Header