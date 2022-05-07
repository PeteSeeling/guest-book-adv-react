export default function GuestBookEntry({ writer, content, date }) {
    return (
        <div>
            <h3>{writer}</h3>
            <p>{content}</p>
            <p>on {new Date(date).toLocaleString('en-us')}</p>
        </div>
    )
}