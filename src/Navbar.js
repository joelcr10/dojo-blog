import {Link} from 'react-router-dom';
import logo from './assets/images/DB.png';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt=""  className='logo'/>
                <h1>Dojo Blog</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/user">User</Link>
                {/* <a href="/create" style={{color:"white",backgroundColor: '#f1356d',borderRadius: '8px'}}>New Blog</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;