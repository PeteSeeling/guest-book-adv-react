import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <>
        <h1>Home Page</h1>
        <Link to='/dashboard'>View GuestBook</Link></>
    )
}