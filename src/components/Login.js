import React, {useState} from 'react'
import '../css/Login.css'
import axios from 'axios'
export default function Login({setUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    
  
    const newUser = () => {
        
        return alert('Completing the login form will register and log you in')

    }


    const register = (e) => {
        e.preventDefault()       

        const user = {  email: email, password: password, userImage: image, username: name  }
        // const url = "http://localHost:9000/login"
        const url = process.env.REACT_APP_LOGIN


            axios.post(url, user).then(res => {
                
                console.log('user loaded into database')
                const userData = res.data;                
                console.log("Posted to Database")

                setEmail('')
                setPassword('')
                setName('')
                setImage('')
               
                setUser(userData);
               
              })  

    };
   
    return (
        <div className="login">
            <div className='login_design'>
            <h1>You are not logged{" "} </h1>

< img className="login_design_img"
src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
/>

            </div> 
           

            <form>
                <input placeholder="Full name or username 
                (required )" 

                 onChange={(e) => {
                     setName(e.target.value)                   
                } }

                value={name}
                 type="text" />

                <input placeholder="Profile Pic URL (required)" 
                
                onChange={(e) => {
                    setImage(e.target.value)
                } }
                value={image}
                
                 />


                <input placeholder="Email" 
                onChange={(e) => {
                        setEmail(e.target.value)
                } }
                value={email}

                 type='email'  />

                <input placeholder="Password" 
                onChange={(e) => setPassword(e.target.value) }
                value={password}
                type='password' />

                
                <button onClick={register} type="submit"> Sign In</button>

            </form>

            <p>Not a member?{" "}
                <span className="login__register"
                onClick={newUser}
                >Register Now</span>
            </p>

        </div>
    )
}
