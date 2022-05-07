
import EntryForm from '../../../components/GuestBook/EntryForm';
import { useEffect, useState } from 'react';
import { useUser } from '../../../context/UserContext';
import { getEntries } from '../../../services/entries';
import Entry from '../../../components/GuestBook/Entry'

export default function EntryList() {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    const fetchEntries = () => {
        getEntries()
            .then(setEntries)
            .finally(() => setLoading(false))
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return(
        <>
        <EntryForm onAddEntry={fetchEntries} />
       <div>
           <ul>
               {entries.length ? (
                   entries.map(({ id, content, created_at }) => {
                       return(
                           <li key={id}>
                               <Entry
                               content={content}
                               author={user.email}
                               date={created_at} />
                           </li>
                       );
                   })
               ) : (
                   <div>
                       <p>Guest Book is Empty</p>
                   </div>
               )}
           </ul>
       </div>

        
        </>
    )
}