import React ,{useEffect,useState} from 'react'
import jwt_decode from "jwt-decode"
import "./Login.css"



const Login = () => {

  const[user,setUser]=useState({})

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" +response.credential);
    var userObject = jwt_decode(response.credential);
    setUser(userObject)
    document.getElementById("signInDiv").hidden =true;
  }

  function handleSignOut(){
     setUser({});
     document.getElementById("signInDiv").hidden=false
  }

useEffect(() => {
  
google.accounts.id.initialize({
  client_id:"636788221000-ur3agv75n19at4pd3bf6fbmls98147r0.apps.googleusercontent.com",
  callback:handleCallbackResponse
});

google.accounts.id.renderButton(document.getElementById("signInDiv"),
{theme:"outline" ,size:"large"})


  google.accounts.id.prompt();
}, [])

  return (
    <div className="App">
      <div id="signInDiv"> </div>

      
      <div className="main_profile_info">
        { user && 
        <div className="profile_info"> 
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
          </div>}
          {Object.keys(user).length !=0 &&
      <button  onClick={(e)=>handleSignOut(e) }>sign out</button>
      }
      </div>
     
      </div>
  )
}

export default Login
    




