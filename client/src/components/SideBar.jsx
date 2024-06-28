import React from 'react';
import { Menu, Icon,Sidebar } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

const SideBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSignOut = async (e) => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <Sidebar
      as={Menu}
      icon='labeled'
      inverted
      vertical
      visible
      width='very thin'
      className='side-bar'
      
    >
      <Menu.Item className="nav-link">
        <Link to="/" className="logo">
        <Icon name='area graph' color="grey" size='large'/>
          Grade Book
        </Link>
      </Menu.Item>

      
      {currentUser ? (

        <Menu.Menu position="right">
          
        <Menu.Item as={Link} to="/" active={location.pathname === '/'} className="nav-link">
          
        <Icon name='th large'/>
     Dashboard
        </Menu.Item>
        <Menu.Item as={Link} to="/class" active={location.pathname === '/class'} className="nav-link">
        <Icon name='users'/>
          Class
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/subjects"
          active={location.pathname === '/subject-schedules'}
          className="nav-link"
        >
          <Icon name='clipboard'/>
          Subjects
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/class-schedules"
          active={location.pathname === '/class-schedules'}
          className="nav-link"
        >
          <Icon name='history'/>
          History
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/profile"
          active={location.pathname === '/profile'}
          className="nav-link"
        >
          <Icon name='user'/>
          Profile
        </Menu.Item>

       
          <Menu.Item className="nav-link" onClick={handleSignOut}>
          <Icon name='sign-out'/>
            Sign Out
          </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
        <Menu.Item as={Link} to="/" active={location.pathname === '/'} className="nav-link">
        <Icon name='th large'/>
          Home
        </Menu.Item>
          <Menu.Item as={Link} to="/sign-in" className="nav-link">
          <Icon name='sign-in'/>
            Sign In
          </Menu.Item>
        
      </Menu.Menu> )}
    </Sidebar>
  );
};

export default SideBar;
