
import  {useState,useContext} from "react";

import UserContext from "../context/UserContext";


 function Login() {
    const [username,setusername]=useState("")
    const [password, setpasswoed] = useState("");
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <div>  </div>
      <input type="text" placeholder="password" value={password} onChange={(e)=>{setpasswoed(e.target.value)}} />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login