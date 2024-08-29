//Login and registeration form

import React, { useState } from "react";

function Twelve() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([])

  const handleAuth = () =>{
    if(isRegistered){
        if(isRegistered){
            const user = users.find((u)=> u.email === email && u.password === password)
            if(user){
                setIsLogged(true)
            }
            else{
                alert("Login Failed.")
            }
        }
        
    }
    else{
        const newUser = {email, password}
        setUsers([...users, newUser])
        localStorage.setItem('users', JSON.stringify([...users, newUser]))
        setIsLogged(true)
    }
  }

  const handleLogout = ()=>{
    setIsLogged(false)
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      {isLogged ? (
        <div>
          <h2>Welcome {email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{isRegistered ? "Login" : "Register"}</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account? Register!"
              : "Already have an account? Login!"}
          </p>
          <button onClick={()=> setIsRegistered(!isRegistered)}>{!isRegistered ? "Login" : "Register"}</button>
        </div>
      )}
    </div>
  );
}

export default Twelve;
