import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function LogIn({setIsLogged,setIsRegistered}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function LogInUser(){
        try{
            await signInWithEmailAndPassword(auth, email,password);
            setMessage(`Zalogowano jako ${email}`)
            setIsLogged(true)

        }
        catch(error){
            setMessage("Coś poszło nie tak")
            }
    }
    return(

        <>
        <div className="LogInContainer">
            <h2>Zaloguj się</h2>
            <input type="text" placeholder="E-mail" onChange={event=>setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" onChange={event=>setPassword(event.target.value)}/>
            <button onClick={LogInUser}>Zaloguj</button>
            <button onClick={()=>setIsRegistered(false)}>Nie masz konta? Zarejestruj się</button>
            <h2>{message} </h2>
        </div>
        </>
    );
}
export default LogIn