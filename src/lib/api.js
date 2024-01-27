import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItemListApi = () => axios.get(BASE_URL);
export const fetchItemDetailApi = (itemId) =>
  axios.get(`${BASE_URL}/${itemId}`);
export const delteItemApi = (itemId) => axios.delete(`${BASE_URL}/${itemId}`);
export const addItemApi = (item) => axios.post(BASE_URL, item);
