import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signUpUser } from '../../services/user';




export default function Login(){
    // const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [error, setError] = useState(null);
    const context = useUser();
  
  

    async function handleLogin(e){
        try{
            e.preventDefault();
           context.login(email, password)

           const url = location.state.from ? location.state.from.pathname : '/';
           history.replaceState(url);

        }catch(error){
            setError(error.message)
        }
    };

    async function handleSignup(e){
        try{
            e.preventDefault();
            await context.signUpUser(email, password);

            const url = location.state.from ? location.state.from.pathname : '/';
            history.replaceState(url);

         }catch(error){
             setError(error.message)
         }
        }
    

    return(
        <>
            <h3>Sign In/Sign Up</h3>
            
            <form 
            onSubmit={handleLogin}
            // onChange={handleFormChange}
            >
                <label htmlFor='email'>
                    <p>Email</p></label>
                <input 
                id='email'
                name='email'
                type='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                />{''}
                <label htmlFor='password'>Password</label>
                <input
                id='password'
                name='password'
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                />
                  <button type='submit' aria-label='Sign-Up' onClick={handleSignup}>Sign Up</button>
                <button type='submit' aria-label='Sign-in' onClick={handleLogin}>Sign In</button>
              
            </form>
            </>
    )


}