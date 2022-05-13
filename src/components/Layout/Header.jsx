import { Link } from 'react-router-dom';
import { signOutUser, getUser } from '../../services/user';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';


export default function Header() {
    const { user, setUser } = useUser();
    // const [user, setUser] = useState(currentUser || { email: null });

    const handleSignOut = async () => {
        setUser();
        await signOutUser();
    };

    return (
        <>
        <div>
            <Link to='/'><p aria-label='guestbook'>GuestBook</p></Link>
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