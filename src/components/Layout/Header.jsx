import { Link } from 'react-router-dom';
import { signOutUser, getUser } from '../../services/user';

import { useUser } from '../../context/UserContext';


export default function Header() {
    const currentUser = getUser()
    const { user, setUser } = useUser(currentUser || { email: null });
 
    const handleSignOut = async () => {
        setUser();
        await signOutUser();
    };

    return (
        <>
        <div>
            <Link to='/dashboard'><p aria-label='guestbook'>GuestBook</p></Link>
        </div>
        <div>
        {user?.email ?(
            <>
            <h3>Signed in with {user.email}</h3>
            <button onClick={handleSignOut}>Sign Out</button>
            </>
        ) : (
            <Link to='/login'>
                Sign In
            </Link>
        )}
            </div></>
    )
}