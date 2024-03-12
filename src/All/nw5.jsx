import { useEffect, useState } from "react"
import New9 from "./RecapNew5";

export default function TodoReacp() {
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setCount(data))
    }, [])
    return (
        <div>
            <h2>User: {count.length}</h2>
            {
                count.map(i => <New9 user={i}></New9>)
            }
        </div>
    )
}