import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlist.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='product-catalog-container'>
            <div className='catalog-header'>
                <h1>Product Catalog</h1>
                <p>Browse all available products</p>
                <div className='product-count'>{products.length} Products</div>
            </div>
            
            <div className='product-grid'>
                {loading ? (
                    <div className='loading-state'>
                        <div className='spinner'></div>
                        <p>Loading products...</p>
                    </div>
                ) : products.length > 0 ? (
                    products.map(product => (
                        <div className='product-card' key={product.id}>
                            {product.image_url && (
                                <div className='product-image-container'>
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className='product-image'
                                    />
                                    <div className='product-id-badge'>ID: {product.id}</div>
                                </div>
                            )}
                            <div className='product-info'>
                                <h3 className='product-name'>{product.name}</h3>
                                <p className='product-description'>{product.description}</p>
                                <div className='product-meta'>
                                    <div className='product-price'>${product.price}</div>
                                    <div className='product-category'>{product.category}</div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='empty-state'>
                        <div className='empty-icon'>📦</div>
                        <h3>No products available</h3>
                        <p>Add your first product to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;