

import { Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage/HomePage'
import MoviesPage from './Page/MoviesPage/MoviesPage'
import MovieDetailsPage from './Page/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './Page/NotFoundPage/NotFoundPage'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
import Navigation from './components/Navigation/Navigation'

function App() {
  return <>
    <Navigation />
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/movies' element={<MoviesPage />} />
    <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
      <Route path='/movies/:movieId/cast'  element={<MovieCast />} />
      <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
    </Route>
    <Route path='*' element={<NotFoundPage />} />
 </Routes></>
  
  
}

export default App
