import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';



export default async function Login(){
    const history = useHistory();
    const location = useLocation();
    const { formState, handleFormChange } = useForm({ email: '', password: ''});
    const [error, setError] = useState(null);
    const { login } = useUser();

    const { from } = location.state || {from: {pathname: '/' }};

    const handleLogin = (e) => {
        try{
            e.preventDefault();
           login(email, password)

        }catch(error){
            setError(error.message)
        }
    };

    return(
        <><>
            <h3>You must log in to view the page at {from.pathname}</h3>
            </>
            <form 
            onSubmit={handleLogin}
            onChange={handleFormChange}>
                <label htmlfor='email'>Email</label>
                <input 
                id='email'
                name='email'
                type='email'
                value={formState.email}
                />{' '}
                <label htmlfor='password'>Password</label>
                <input
                id='password'
                name='password'
                type='password'
                value={formState.password}
                />
                <button type='submit' aria-label='Sign-in'>Sign In</button>
            </form>
            </>
    )


}