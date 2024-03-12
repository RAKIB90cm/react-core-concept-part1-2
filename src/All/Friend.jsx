
export default function Friend({name}) {
    return (
        <div className=".box">
            <h4>Name: {name.name}</h4>
            <h5>Email: {name.email}</h5>
            <h5>Des..: {name.username}</h5>
        </div>
    )
}