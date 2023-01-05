import './Profile.css';
import { useSelector, useDispatch} from 'react-redux';

function Profile(props) {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const incrementHandler = () =>  {
        dispatch({ type: 'increment' });
    };

    const decrementHandler = () =>{
        dispatch({ type: 'decrement' });
    };

    const userProfileData = props.userProfileData;
    
    return (
        <div className="left-container">
            <img className='avatar' src={userProfileData.avatar_url} alt='avatar'></img>
            <div className='avatar-profile'>
                <div className='avatar-name'>{userProfileData.name}</div>
                <div className='avatar-login'>{userProfileData.login}</div>
            </div>
            <button className='follow-button' onClick={incrementHandler}>Follow</button>
            <button className='follow-button' onClick={decrementHandler}>Unfollow</button>
            <div className='followers-following'>
                <span>{counter} followers </span>
                <span>. {userProfileData.following} following</span>
            </div>
            <div className='location'>{userProfileData.location}</div>
            <div className='block'>Block or Report</div>
        </div>
    );
}

export default Profile;