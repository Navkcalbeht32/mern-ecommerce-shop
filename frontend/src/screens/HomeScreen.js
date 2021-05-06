import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import products from '../products'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

            fetchProducts()
    }, [])

    return (
        <>
            <h2>Latest Products</h2>
            <div>
            {products.map((product) => (
                <Product product={product}/>
            ))}
        </div>
        </>
    )
}

export default HomeScreen
