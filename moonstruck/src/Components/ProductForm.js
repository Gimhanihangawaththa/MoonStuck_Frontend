
import React, { useState } from 'react';
import axios from 'axios';
import './productform.css';

const ProductForm = () => {
    const [activeTab, setActiveTab] = useState('add');
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);

    const [updateId, setUpdateId] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');
    const [updatePrice, setUpdatePrice] = useState('');
    const [updateCategory, setUpdateCategory] = useState('');
    const [updateStock, setUpdateStock] = useState('');
    const [updateImage, setUpdateImage] = useState(null);

    const [deleteId, setDeleteId] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('stock', stock);
        if (image) formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Product added successfully');
            // Reset form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setStock('');
            setImage(null);
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    const fetchProductDetails = async () => {
        if (!updateId) {
            alert("Please enter a product ID.");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/products/${updateId}`);
            const product = response.data;

            setUpdateName(product.name);
            setUpdateDescription(product.description);
            setUpdatePrice(product.price);
            setUpdateCategory(product.category);
            setUpdateStock(product.stock);
        } catch (error) {
            console.error('Error fetching product:', error);
            alert("Product not found!");
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', updateName);
        formData.append('description', updateDescription);
        formData.append('price', updatePrice);
        formData.append('category', updateCategory);
        formData.append('stock', updateStock);
        if (updateImage) formData.append('image', updateImage);

        try {
            await axios.put(`http://localhost:5000/products/${updateId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product');
        }
    };

    const handleDeleteProduct = async (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete this product?')) {
            return;
        }
        try {
            await axios.delete(`http://localhost:5000/products/${deleteId}`);
            alert('Product deleted successfully');
            setDeleteId('');
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        }
    };
    return (
        <div className='admin-container'>
            <div className='admin-header'>
                <h1>Product Management</h1>
                <p>Manage your product inventory</p>
            </div>

            <div className='admin-tabs'>
                <button 
                    className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`}
                    onClick={() => setActiveTab('add')}
                >
                    <span className='tab-icon'>+</span>
                    Add Product
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'update' ? 'active' : ''}`}
                    onClick={() => setActiveTab('update')}
                >
                    <span className='tab-icon'>✎</span>
                    Update Product
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'delete' ? 'active' : ''}`}
                    onClick={() => setActiveTab('delete')}
                >
                    <span className='tab-icon'>✕</span>
                    Delete Product
                </button>
            </div>

            <div className='admin-content'>
                {activeTab === 'add' && (
                    <div className='form-card'>
                        <div className='card-header'>
                            <h2>Add New Product</h2>
                            <p>Fill in the details to add a new product</p>
                        </div>
                        <form onSubmit={handleAddProduct} className='modern-form'>
                            <div className='form-group'>
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter product name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <textarea 
                                    placeholder="Enter product description" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required 
                                    rows="3"
                                />
                            </div>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Price ($)</label>
                                    <input 
                                        type="number" 
                                        placeholder="0.00" 
                                        value={price} 
                                        onChange={(e) => setPrice(e.target.value)} 
                                        required 
                                        step="0.01"
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Stock</label>
                                    <input 
                                        type="number" 
                                        placeholder="0" 
                                        value={stock} 
                                        onChange={(e) => setStock(e.target.value)} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Category</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter category" 
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Product Image</label>
                                <input 
                                    type="file" 
                                    onChange={(e) => setImage(e.target.files[0])} 
                                    accept="image/*"
                                    className='file-input'
                                />
                            </div>
                            <button type="submit" className='submit-btn'>Add Product</button>
                        </form>
                    </div>
                )}
                
                {activeTab === 'update' && (
                    <div className='form-card'>
                        <div className='card-header'>
                            <h2>Update Product</h2>
                            <p>Search and update existing product details</p>
                        </div>
                        <form onSubmit={handleUpdateProduct} className='modern-form'>
                            <div className='search-section'>
                                <div className='form-group'>
                                    <label>Product ID</label>
                                    <div className='input-with-button'>
                                        <input 
                                            type="text" 
                                            placeholder="Enter product ID" 
                                            value={updateId} 
                                            onChange={(e) => setUpdateId(e.target.value)} 
                                            required 
                                        />
                                        <button type="button" onClick={fetchProductDetails} className='fetch-btn'>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    placeholder="New product name" 
                                    value={updateName} 
                                    onChange={(e) => setUpdateName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <textarea 
                                    placeholder="New description" 
                                    value={updateDescription} 
                                    onChange={(e) => setUpdateDescription(e.target.value)} 
                                    required 
                                    rows="3"
                                />
                            </div>
                            <div className='form-row'>
                                <div className='form-group'>
                                    <label>Price ($)</label>
                                    <input 
                                        type="number" 
                                        placeholder="0.00" 
                                        value={updatePrice} 
                                        onChange={(e) => setUpdatePrice(e.target.value)} 
                                        required 
                                        step="0.01"
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Stock</label>
                                    <input 
                                        type="number" 
                                        placeholder="0" 
                                        value={updateStock} 
                                        onChange={(e) => setUpdateStock(e.target.value)} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Category</label>
                                <input 
                                    type="text" 
                                    placeholder="New category" 
                                    value={updateCategory} 
                                    onChange={(e) => setUpdateCategory(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label>New Product Image</label>
                                <input 
                                    type="file" 
                                    onChange={(e) => setUpdateImage(e.target.files[0])} 
                                    accept="image/*"
                                    className='file-input'
                                />
                            </div>
                            <button type="submit" className='submit-btn update-btn'>Update Product</button>
                        </form>
                    </div>
                )}
                
                {activeTab === 'delete' && (
                    <div className='form-card delete-card'>
                        <div className='card-header'>
                            <h2>Delete Product</h2>
                            <p className='warning-text'>⚠️ This action cannot be undone</p>
                        </div>
                        <form onSubmit={handleDeleteProduct} className='modern-form'>
                            <div className='form-group'>
                                <label>Product ID</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter product ID to delete" 
                                    value={deleteId} 
                                    onChange={(e) => setDeleteId(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type="submit" className='submit-btn delete-btn'>Delete Product</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductForm;