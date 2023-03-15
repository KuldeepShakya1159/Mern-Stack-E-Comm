import React,{useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const[email,setEmail] = React.useState("");
    const[password,setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })

    const handellogin = async ()=>{
        console.log(email,password);

        let result =  await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'content-type':'application/json'
            }
    });

    result = await result.json(); //this returns readable stream , so convert it to json;
    console.warn(result);

    if(result.auth)
    {
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));

        navigate('/')
    }
    else{
        alert("please enter vaild details")
    }

    } 

    return (
        <div className = "login ">
            <h1>Login page</h1>
            <input type="text" placeholder="Enter Email" className='inputbox'
                onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type="password" placeholder="Enter password" className='inputbox'
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <input type='button' className="inputbox submitbtn" 
            onClick={handellogin} value="login" />
        </div>
    )
}

export default Login;