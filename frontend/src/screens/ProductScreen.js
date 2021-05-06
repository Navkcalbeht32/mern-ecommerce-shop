import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import './product.screen.scss'
import Rating from '../components/Rating/Rating'
import Button from '../components/Button/Button'

const ProductScreen = ({match}) => {
    const product = products.find((p) => p._id === match.params.id)

    const productStock = `${product.countInStock}`

    return (
        <>
            <div className='page-wrapper'>
                <div className='back-btn'>
                    <Link to='/'> &#x2190; Go Back</Link>
                </div>
                
                <div className='product-screen'>
                    <div className='product-screen-image-container'>
                        <img src={product.image} />
                    </div>
                    <div className='product-screen-info'>
                        <h1>{product.name}</h1>
                        <div className='product-screen-info-review'>
                            <Rating  value={product.rating} /> 
                            <h4>{product.numReviews} Reviews</h4>
                        </div>
                        <h1>${product.price}</h1>
                        <div className='product-screen-stock'>
                            <h3>
                                {product.countInStock > 0 
                                ? <h4 className='in'>{product.countInStock} in Stock</h4> 
                                : <h4 className='out'>Out of Stock</h4>
                                }
                            </h3>
                        </div>
                        <h5>{product.description}</h5>
                        <div className='product-screen-info-buttons'>
                            <button 
                                className='btn solid' 
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart - ${product.price}
                            </button>
                            <h6><i class="fas fa-check" /> FREE 3-5 day shipping on orders over $30</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductScreen
