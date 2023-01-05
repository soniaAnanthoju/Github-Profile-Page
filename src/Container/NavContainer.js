import { Route, Redirect } from 'react-router-dom';
import './NavContainer.css';
import Overview from './NavContainer/Overview/Overview';
import Packages from './NavContainer/Packages';
import Projects from './NavContainer/Projects';
import Repositories from './NavContainer/Repositories/Repositories';
import Stars from './NavContainer/Stars/Stars';

function NavContainer() {
    return (
        <div className='right-container'>
            <switch>
                <Route path="/" exact>
                    <Redirect to="/overview"></Redirect>
                </Route>
                <Route path="/overview">            
                    <Overview></Overview>
                </Route>
                <Route path="/repositories">
                    <Repositories></Repositories>
                </Route>
                <Route path="/projects">
                    <Projects></Projects>
                </Route>
                <Route path="/packages">
                    <Packages></Packages>
                </Route>
                <Route path="/stars">
                    <Stars></Stars>
                </Route>
            </switch>
        </div>
    );
}

export default NavContainer;