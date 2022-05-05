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

    const { from } = 

}