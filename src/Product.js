import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css';
import './Product.css'
import Button from 'react-bootstrap/Button';
export default function Product(){
    const [data, setData] = useState([])
    const [number, setNumber]= useState()
    const [title, setTitle] = useState([])
    const [image, setImage] = useState([])
    // const [copy, setCopy] = useState([])
    // console.log(data, "data1")
    // const ndata = Object.values(data)
    // console.log(Object.values(data), "ndata")
    // const [checked, setChecked] = useState([])
    
    async function getData(){
        const response = await axios.get(`https://dummyjson.com/products/category/${number}`)
        // console.log(response, "ashdad");
        
        // console.log(response.data.products, "title")
        setTitle(response.data.products)
        console.log(title, 'tt')
        // setCopy([...response.data.products])
        // console.log(copy, "copy")
    }
    
    useEffect(()=>{
        getData()
        console.log(getData(), "ddjkassmd")
        // setData(info)
    }, [number])
      
    return(
        <>
        <h1>Products</h1>
        <h3>Filter</h3>
        <select value={number} onChange={(e)=>{setNumber(e.target.value)}} className="select" aria-hidden="true">
            <optgroup label="Categories">
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
            <option value="fragrances">Fragrances</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home-decoration</option>
            <option value="furniture">Furniture</option>
            <option value="tops">Tops</option>
            <option value="womens-dresses">Womens-dresses</option>
            <option value="womens-shoes">Womens-shoes</option>
            <option value="mens-shirts">Mens-shirts</option>
            <option value="mens-shoes">Mens-shoes</option>
            <option value="mens-watches">Mens-watches</option>
            <option value="womens-watches">Womens-watches</option>
            <option value="womens-jewellery">Womens-jewellery</option>
            <option value="womens-bags">Womens-bags</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="automotive">Automotive</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="lighting">Lighting</option>
        
            </optgroup>
        </select>
     

        {title.map((ele, index)=>{
            return(
                <div className="cd"  style={{display:"inline-grid", width: "20rem"}} key={index}>
                    {/* <h2>{ele.title}</h2> */}
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <p className="card-text">Price: {ele.price} /-</p>
                            <p className="card-text">Discount: {ele.discountPercentage}%</p>
                            <p className="card-text">Rating:⭐{ele.rating}</p>
                            <Button variant="primary">Details..</Button>
                            
                        </div>
                    </div>
                </div>
            )
        })}
        {/* {data[0].map((item, id)=>{
            return(
                <div key={id}>
                <input ele={item} type="checkbox" />
                <span>{item}</span>
                </div>
            )
        })}
         */}
        </>
    )
}