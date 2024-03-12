export default function New9({ user }) {
    return (
        <div className="box">
            <h5>ID: {user.id}</h5>
            <h6>Title: {user.title}</h6>
            <h6>Body: {user.body}</h6>
        </div>
    )
}