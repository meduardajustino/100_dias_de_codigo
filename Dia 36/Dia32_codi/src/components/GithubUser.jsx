import {useState, useEffect} from "react";
import axios from "axios";

function GithubUser(props){
    const [user, setUser] = useState(false);

    useEffect(() => {
        async function fetchUser(){
            const response = await axios.get(`https://api.github.com/users/${props.userName}`)
            const data = response.data;
            setUser(data);
        }
        fetchUser();
    }, [])

    if (!user) return <p>Carregando...</p>

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={user.name} width="200"/>
        </div>
    );
}

export default GithubUser;