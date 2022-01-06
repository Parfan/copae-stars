import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/draw"><span style={{fontSize: '2rem'}}>COPAE</span></Link>
      </div>
      <div className="navbar-nav-container">
        <ul className="navbar-nav">
          <li><Link to="/draw/league">League of Legends</Link></li>
          <li><Link to="/draw/counter">Counter-Strike</Link></li>
          <li><Link to="/draw/number">Numbers</Link></li>
          <li><Link to="/draw/names">Names</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
