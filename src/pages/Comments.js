import { useState } from "react"

export default function Comments() {
    const [users, setUsers] = useState([
        { Name: "Bobby", Message: "J'ai rien a dire" },
        { Name: "LeChef", Message: "Vous êtes tous virés" },
        { Name: "SylvieDeLaCompta", Message: "Y'a plus de café!" }
    ])

    const [Name, setName] = useState("")
    const [Message, setMessage] = useState("")

    function handleName(event) {
        setName(event.target.value)
    }
    function handleMessage(event) {
        setMessage(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newUser = { Name: Name, Message: Message }
        setUsers([...users, newUser])
    }

    return (
        <div className="comments">
            <div className="form">
                <h1>Ajouter un commentaire   </h1>
                <form onSubmit={handleSubmit}>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={Name} onChange={handleName} required />
                    <label for="message">Message</label>
                    <input type="text" name="message" value={Message} onChange={handleMessage} required />
                    <button type="submit">OK</button>
                </form>
            </div>

            <div className="CommentList">
                <h1>Commentaires</h1>
                <ul>
                    {users.map(user => <li>{user.Name} dit : {user.Message}</li>)}
                </ul>
            </div>
        </div>
    )
}
