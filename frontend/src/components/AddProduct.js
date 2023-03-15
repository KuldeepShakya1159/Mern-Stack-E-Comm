import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const handeldata = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }


        console.warn(name, price, category, company);
        let userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = await fetch("http://localhost:5000/add-products", {
            method: "POST",
            body: JSON.stringify({ name, price, category, userId, company }),
            headers: {
                "Content-Type": "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/');
    }

    return (

        <div className="product">
            <h1 >Add Product</h1>
            <input type="text" placeholder='Enter Name' value={name} className='inputbox'
                onChange={(e) => { setName(e.target.value) }} ></input>

            {error && !name && <span className="invaild-input" >Enter valid name</span>}


            <input type="text" placeholder='Enter Price' value={price} className='inputbox'
                onChange={(e) => { setPrice(e.target.value) }} ></input>

            {error && !price && <span className="invaild-input" >Enter valid price</span>}



            <input type="text" placeholder='Enter Category' value={category} className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }} ></input>


            {error && !category && <span className="invaild-input" >Enter valid category</span>}


            <input type="text" placeholder='Enter Company' value={company} className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }} ></input>


            {error && !company && <span className="invaild-input" >Enter valid company</span>}


            <button onClick={handeldata} className="inputbox submitbtn">Add Product</button>
        </div>

    )
}


export default AddProduct;