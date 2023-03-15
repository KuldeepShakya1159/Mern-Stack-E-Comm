import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Signup=()=>{

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }

    })
    


    const getData= async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/signup',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                //Authorization: `Bearer: ${token}`,
                'content-type':'application/json'
            }
        });
        result= await result.json();
        console.warn(result);

        localStorage.setItem('user',JSON.stringify(result.result));
        localStorage.setItem('token',JSON.stringify(result.auth));


        if(result)
        {
            navigate('/');
        }

    }

    return(
        <div className="signupbox">
            <h2>Register</h2>
            <input type="text" className="inputbox" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter name"/>

            <input type="text" className="inputbox" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter email"/>

            <input type="password" className="inputbox" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter password"/>

            <input type='button' className="inputbox submitbtn" onClick={getData} value="submit" />




        </div>
    )
    
}

export default Signup;