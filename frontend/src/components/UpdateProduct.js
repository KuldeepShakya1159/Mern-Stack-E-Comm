import React,{useEffect, useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    let getProduct;

    useEffect(()=>{
    
        getProduct();
       },[getProduct]);
   

     getProduct = async () =>{

        let result = await fetch(`http://localhost:5000/product/${params.id}`,
        {
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();

        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }


    const Updatedata=async ()=>{

        console.log(name , price, company , category);

        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,company,category}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        })

        result = await result.json();
        console.log(result);
        navigate('/')

    }




    

    return (

        <div className="product">
            <h1 >Update Product</h1>
            <input type="text" placeholder='Enter Name' value={name} className='inputbox'
                onChange={(e) => { setName(e.target.value) }} ></input>



            <input type="text" placeholder='Enter Price' value={price} className='inputbox'
                onChange={(e) => { setPrice(e.target.value) }} ></input>




            <input type="text" placeholder='Enter Category' value={category} className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }} ></input>




            <input type="text" placeholder='Enter Company' value={company} className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }} ></input>




            <button onClick={Updatedata} className="inputbox submitbtn">Update Product</button>
        </div>

    )
}


export default UpdateProduct;