import axios from "axios";

const API_KEY = '42494029-89ffd91f8b64ac9b988c0500e';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchingImages = async (searchName, page = 1) => {
  const response = await axios.get(`?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  
  return response.data.hits;
};

export default {
  fetchingImages,
};
