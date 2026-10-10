import {useState} from "react";

function Login(){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username is ${username} and password is ${password}`);
    }


    return (
        <>
        <form className="login">
            <label htmlFor="first-name">Username:: </label>
            <input type="text"
                   id="first-name"
                   value={username}
                   onChange={e => setUserName(e.target.value)}
                   name="username" /><br/>

            <label htmlFor="password">Password:: </label>
            <input type="password"
                   id="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   name="password" /><br/>

            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        </>
    )
}

export default Login