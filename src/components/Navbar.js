import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ColorPalette from './ColorPalette';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <ColorPalette toggleColor={props.toggleColor}/>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleMode}/>
              <label class={ props.mode === 'light'? "form-check-label" : "form-check-label text-light"} for="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
    );
}


//Used to ensure that the title proptype must be a string
//basically ensuring the datatype of the props
Navbar.propTypes = {title: PropTypes.string.isRequired}
//here .isRequired means the title must not be empty but since at the bottom we have provided default prop, so here the value will always be provided

//default props: what it does it that if we do not pass any prop value, then it will provide this value.
Navbar.defaultProps = {
    title: 'Set Title here'
}
 
export default Navbar;