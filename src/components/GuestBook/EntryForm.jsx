import { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { createEntry } from '../../services/entries'
import Entry from '../GuestBook/Entry'

export default function EntryForm({ onAddEntry }) {
    const [content, setContent] = useState('');
    const { user } = useUser();

    const addEntryToGuestbook = async (e) => {
        e.preventDefault();
        const entry = await createEntry({ userId: user.id, content });
        onAddEntry(entry);
        setContent('')
    };
    return (
        <div>
            <form onSubmit={addEntryToGuestbook}>
                <textarea
                aria-label='add entry'
                value={content}
                id='content'
                onChange={({ target }) => setContent(target.value)} />
                <button 
                aria-label='add entry button' type='submit'> Add Entry </button>
            </form>
        </div>
    )
}
