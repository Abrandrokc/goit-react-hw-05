import axios from "axios";

export const popularFilmList = async () => {
   const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
    const params = {
       headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFhOTYzNzczODk1YzAxMzczMzllNTBkMzAwMGFiZiIsInN1YiI6IjY2Mzc1MzViOTU5MGUzMDEyY2JjYTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYzHaIkzIa8dTqfJuR2LNiFEJuXzzQJ7aEI5LQwBc_w'
  }
};
       
    
    const response = await axios.get(url,  params )
    return response.data.results
}
export const filmInfo = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    
    const params = {
       headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFhOTYzNzczODk1YzAxMzczMzllNTBkMzAwMGFiZiIsInN1YiI6IjY2Mzc1MzViOTU5MGUzMDEyY2JjYTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYzHaIkzIa8dTqfJuR2LNiFEJuXzzQJ7aEI5LQwBc_w'
  }
};
     
    const response = await axios.get(url, params )
    return response.data
    
    }
export const castInfo = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    
    const params = {
       headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFhOTYzNzczODk1YzAxMzczMzllNTBkMzAwMGFiZiIsInN1YiI6IjY2Mzc1MzViOTU5MGUzMDEyY2JjYTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYzHaIkzIa8dTqfJuR2LNiFEJuXzzQJ7aEI5LQwBc_w'
  }
};
     
    const response = await axios.get(url, params )
    return response.data.cast
    
}
    export const reviewsInfo = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
    
    const params = {
       headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFhOTYzNzczODk1YzAxMzczMzllNTBkMzAwMGFiZiIsInN1YiI6IjY2Mzc1MzViOTU5MGUzMDEyY2JjYTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYzHaIkzIa8dTqfJuR2LNiFEJuXzzQJ7aEI5LQwBc_w'
  }
};
     
    const response = await axios.get(url, params )
    return response.data.results
    
}
    export const searchFilmList = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1'`
    
    const params = {
       headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFhOTYzNzczODk1YzAxMzczMzllNTBkMzAwMGFiZiIsInN1YiI6IjY2Mzc1MzViOTU5MGUzMDEyY2JjYTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYzHaIkzIa8dTqfJuR2LNiFEJuXzzQJ7aEI5LQwBc_w'
  }
};
     
    const response = await axios.get(url, params )
    return response.data.results
    
    }