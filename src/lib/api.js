import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItemListApi = () => axios.get(BASE_URL);
