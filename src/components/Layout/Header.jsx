import { Link } from 'react-router-dom';
import { signOutUser, getUser } from '../../services/user';
import { useState } from 'react';


export default function Header() {
    const currentUser = getUser();
    const [user, setUser] = useState(currentUser || { email: null });

    const handleSignOut = async () => {
        setUser({ email: null });
        await signOutUser();
    };

    return (
        <>
        <div>
            <Link to='/'><p>GuestBook</p></Link>
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