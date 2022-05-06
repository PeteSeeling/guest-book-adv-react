export default function GuestBookEntry({ writer, message, date }) {
    return (
        <div>
            <h3>{writer}</h3>
            <p>{message}</p>
            <p>on {new Date(date).toLocaleString('en-us')}</p>
        </div>
    )
}