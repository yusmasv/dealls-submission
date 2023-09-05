import { BASE_URL } from "../constants";
import axios from "axios";

function getAllProducts(skip: number, limit: number, keyword: string) {

    const config = {
        method: 'get',
        url: `${BASE_URL}/products/search?q=${keyword}&skip=${skip}&limit=${limit}`
        };
        console.log(`${BASE_URL}/products/search?q=${keyword}&skip=${skip}&limit=${limit}`)
        return axios(config);
}

function getCategories() {

    const config = {
        method: 'get',
        url: `${BASE_URL}/products/categories`
        };
        return axios(config);
}

function getProductByCategory(category: string) {

    const config = {
        method: 'get',
        url: `${BASE_URL}/products/category/${category}`
        };
        console.log(axios(config))
        return axios(config);
}

function getAllCart(skip: number, limit: number) {

    const config = {
        method: 'get',
        url: `${BASE_URL}/carts?skip=${skip}&limit=${limit}`
        };
        return axios(config);
}

function getUserById(id: number) {

    const config = {
        method: 'get',
        url: `${BASE_URL}/user/${id}`
        };
        return axios(config);
}

function getCartById(id: number) {

    const config = {
        method: 'get',
        url: `${BASE_URL}/cart/${id}`
        };
        return axios(config);
}

export {
    getAllProducts,
    getCategories,
    getProductByCategory,
    getAllCart,
    getUserById,
    getCartById
}




