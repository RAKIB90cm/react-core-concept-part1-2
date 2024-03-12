import { useState } from "react"

export default function HookPrac() {
    const [count, setCount] = useState(11);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handelRemove = () => {
        setCount(count - 1);
    }

    const hookStyle = {
        border: '2px solid purpel',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={hookStyle}>
            <h5>Player: {count}</h5>
            <button onClick={handelRemove}>Remove</button>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}