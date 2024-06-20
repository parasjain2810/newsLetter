import axios from 'axios';
import { useState,useEffect } from 'react'
const useNewsData = (category,searchTerm) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const week=today.getDate()-7;
    useEffect(() => {
        async function fetchNewsData() {
          // this is handle news api
          try {
            setLoading(true);
            const apiUrl=`https://newsapi.org/v2/top-headlines?apiKey=db2379e0c4d6449ca25ef5987dd3e4ff&from=${year}+${month}+${week}&to=${year}+${month}+${date}&country=us`;
            const categoryParam = category ? `&category=${category}` : "";
            const searchParam = searchTerm ? `&q=${searchTerm}` : "";
            const url = apiUrl + categoryParam + searchParam;
            const response = await axios.get(url);
            const data = response.data.articles;
            setNewsData(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
    
        fetchNewsData();
      }, [category, searchTerm]);
      return { newsData, loading, error };
}
export default useNewsData
