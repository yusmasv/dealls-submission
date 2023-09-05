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

function getAllCart() {

    const config = {
        method: 'get',
        url: `${BASE_URL}/carts`
        };
        return axios(config);
}

export {
    getAllProducts,
    getCategories,
    getProductByCategory,
    getAllCart
}




