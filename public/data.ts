import axios from "axios";
const API_URL = process.env.BACKEND_URL;
export const fetchMovies = async (page: number = 1) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { currentPage: 1, hasNextPage: false, results: [] };
  }
};
