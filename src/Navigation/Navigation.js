import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <span><NavLink to='/overview' activeClassName="active" className="navigation-element">Overview</NavLink></span>
            <span><NavLink to='/repositories' className="navigation-element">Repositories</NavLink></span>
            <span><NavLink to='/projects' className="navigation-element">Projects</NavLink></span>
            <span><NavLink to='/packages' className="navigation-element">Packages</NavLink></span>
            <span><NavLink to='/stars' className="navigation-element">Stars</NavLink></span>
        </div>
    );
}

export default Navigation;