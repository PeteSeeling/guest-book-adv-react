import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';



export default function Login(){
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();
    const { formState, handleFormChange } = useForm({ email: '', password: ''});
    const [error, setError] = useState(null);

    const { from } = location.state || {from: {pathname: '/' }};

    const handleLogin = (e) => {
        e.preventDefault();

        const loginSuccess = auth.login(formState.email, formState.password);
        !loginSuccess ? setError('Login Unsuccessful') : history.replace(from);
    };

    return(
        <><>
            <h3>You must log in to view the page at {from.pathname}</h3>
            </>
            <form 
            onSubmit={handleLogin}
            onChange={handleFormChange}>
                <label for='email'>Email</label>
                <input 
                id='email'
                name='email'
                type='email'
                value={formState.email}
                />{' '}
                <label for='password'>Password</label>
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