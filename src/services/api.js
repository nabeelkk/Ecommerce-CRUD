import axios from "axios";

const API_BASE = 'https://fakestoreapi.com'

const apiService = {
    getAllProducts : async()=>{
        try {
            const response = await axios.get(`${API_BASE}/products`);
            return response.data
        } catch (error) {
            console.log(error.message)
            throw new Error("failed to fetch products")
        }
    },
    getProduct:async(id)=>{
        try {
            const response = await axios.get(`${API_BASE}/products/${id}`)
            return response.data            
        } catch (error) {
            console.log(error.message)
            throw new Error('failed to fetch the product')
        }
    },
    createProduct:async(product)=>{
        try {
            const response = await axios.post(`${API_BASE}/products`,product,{
            headers:{'Content-Type':'application/json'},
        });
            return response.data
        } catch (error) {
            console.log(error.message)
            throw new Error("Failed to add product")
        }
    },
    updateProduct: async(id,product)=>{
        try {
            const response = await axios.put(`${API_BASE}/products/${id}`,product,{
            headers:{'Content-Type':'application/json'},
        });
            return response.data
        } catch (error) {
            console.log(error.message)
            throw new Error("Failed to Edit Product")
        }
    },
    deleteProduct: async(id)=>{
        const response = await axios.delete(`${API_BASE}/products/${id}`)
        return response.data
    }

}

export default apiService