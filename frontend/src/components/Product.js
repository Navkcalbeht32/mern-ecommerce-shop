import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating/Rating'


const Product = ({ product }) => {
    return (
        <>
            <div className='product'>
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} />
                    <h2>{product.name}</h2>
                    <h3>$ {product.price}</h3>
                </Link>
            </div>

            <div>
                <Rating value={product.rating} color="#FF9900" text={`${product.numReviews} reviews`} />
            </div>
        </>
    )
}

export default Product
