import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItemListApi = () => axios.get(BASE_URL);
export const fetchItemDetailApi = (itemId) =>
  axios.get(`${BASE_URL}/${itemId}`);
