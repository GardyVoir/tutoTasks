import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetails() {
    let params = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users/' + params.userid)
            .then(res => { setUser(res.data) })
    }, [params.userid]);

    if (user.length === 0) {
        return (<span>Chargement...</span>)
    }

    return (
        <div>
            <h1>A propos de {user.name}</h1>
            <div className="">
                <p>Contact à <a href={`mailto:${user.email}`}>{user.email}</a><br />
                    ou par téléphone au {user.phone}</p>
                <p>Habite {user.address.suite}, rue {user.address.street} à {user.address.city}</p>
                <h2>Visitez son site <a href={`https:\\www.${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></h2>
            </div>
        </div >
    )
}