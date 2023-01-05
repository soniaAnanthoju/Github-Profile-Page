import './HeaderRightComponent.css';

function HeaderRightComponent() {
    return (
        <div className="header-right-container">
            <input className="header-elements" type="text" placeholder="Search" name="search"></input>
            <span className="header-elements">Sign in</span>
            <span className="header-elements sign-up">Sign up</span>
        </div>
    );
}

export default HeaderRightComponent;