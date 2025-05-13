import { useState } from "react";
import './LogIn.css'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp({setIsRegistered}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    async function handleAddUser(){
        try{
            await createUserWithEmailAndPassword(auth, email,password);
            setMessage("Zarejestrowano")
            setIsRegistered(true)

        }
        catch(error){
            setMessage("Coś poszło nie tak")
            }
    }
    return(

        <>
        <div className="SignUpContainer">
            <h2>Zarejestruj się</h2>
            <input type="text" placeholder="E-mail" onChange={event=>setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" onChange={event=>setPassword(event.target.value)}/>
            <button onClick={handleAddUser}>Zarejestruj</button>
            <p onClick={()=>setIsRegistered(true)}>Masz już konto? Zaloguj się</p>
            {message&&
                        <h2>{message}</h2>

            }

        </div>
        </>
    );
}
export default SignUp