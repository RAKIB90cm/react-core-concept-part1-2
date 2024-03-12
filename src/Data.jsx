import { useState } from "react"

export default function Data() {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const Reduce = () => {
        const reduce = count - 1;
        setCount(reduce)
    }
    return (
        <div style={{ border: '2px solid black' }}>
            <li>Counter: {count}</li>
            <button onClick={handleAdd}>Add</button>
            <button onClick={Reduce}>Remove</button>
        </div>
    )
}