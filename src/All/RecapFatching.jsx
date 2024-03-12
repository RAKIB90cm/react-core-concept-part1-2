import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Rexap() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h5>User: {user.length}</h5>
            {
                user.map(i => <Friend name={i}></Friend>)
            }
        </div>
    )
}