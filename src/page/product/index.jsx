import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/modules/product/productAction';
import { Product } from './style'

function Products() {
const dispatch= useDispatch()

      const submitProduct=(e)=>{
e.preventDefault();


const {name, price}= e.target;

const form={
    name:name.value,
    price:price.value,
};
dispatch(addProduct(form))
console.log(form);
}
const products = useSelector(state => state.product);

useEffect(() => {
console.log(products);
}, [products])
    return (
        <>
        <Product>
            <form onSubmit={submitProduct}>
                <input type="text" name="name" placeholder='Product Name' />
                <input type="number" name="price" placeholder='Product Price' />
                <button>submit</button>
            </form>
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {
      products.map(({name, price}, index)=>(
         <tr>
    <td>{index}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>update/Delete</td>
        </tr>
))
}
            </table>
        </Product>
        </>
    )
}

export default Products
