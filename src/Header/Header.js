import './Header.css';
import HeaderLeftComponent from './HeaderLeftComponent';
import HeaderRightComponent from './HeaderRightComponent';

function Header() {
    return (
        <div className='header-container'>
            <HeaderLeftComponent></HeaderLeftComponent>
            <HeaderRightComponent></HeaderRightComponent>
        </div>
    );
}

export default Header;