import React from 'react'
import { Input, Menu, Icon, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {signOut } from '../redux/user/userSlice'  

const Header = () => {
  const { currentUser } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSignOut = async (e) => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch(error){
      console.log(error)
    }
  } 

	return (
		<Menu
			secondary
      className='header-bar'
		>
				<Menu.Item>
          <Link to="/" className="logo">Grade Book</Link>
				</Menu.Item>
        {currentUser ? (
			    <Menu.Menu position="right">
					  <Menu.Item
							className="uk-margin-large-left"
              active={location.pathname === '/class'}
						> 
              <Link to="/class" className="nav-link">My class</Link>
            </Menu.Item>
            <Menu.Item
							className="uk-margin-large-left"
              active={location.pathname === '/class-schedules'}
						>
							<Link to="/class-schedules" className="nav-link">Class Schedules</Link>
            </Menu.Item>
            <Menu.Item
							className="uk-margin-large-left"
              active={location.pathname === '/subject-schedules'}
						>
							<Link to="/subject-schedules" className="nav-link">Subject Schedules</Link>
            </Menu.Item>
            <Menu.Item
							className="uk-margin-large-left"
              active={location.pathname === '/profile'}
						>
							<Link to="/profile" className="nav-link" >Profile</Link>
            </Menu.Item>
            <Menu.Item
							className="uk-margin-large-left nav-link"
							onClick={handleSignOut}
						>
							<Link className="nav-link">Sign Out</Link>
            </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item
              className="uk-margin-large-left"
              active={location.pathname === '/'}
            >
                <Link to="/" className="nav-link">Home</Link>
              </Menu.Item>
      
              <Menu.Item
                className="uk-margin-large-left nav-link"
                // onClick={handleSignIn}
              >
               <Link className="nav-link">Sign In</Link>
              </Menu.Item>
          </Menu.Menu> 
        )
      }
		</Menu>
     
	);
}

export default Header