import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/user';


export default function Header() {
    const { user, setUser } = useUser();

    const signOut = async () => {
        setUser('');
        await signOutUser();
    };

    return (
        <><div>
            <Link to='/'>GuestBook</Link>
        </div>
        <div>
        {user?.email ?(
            <>
            <h3>Signed in with {user.email}</h3>
            <button onClick={signOut}>Sign Out</button>
            </>
        ) : (
            <Link to='/login'>
                Sign In
            </Link>
        )}
            </div></>
    )
}