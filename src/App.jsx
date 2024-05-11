
import {lazy, Suspense} from "react"
import { Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => import("./Page/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./Page/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("./Page/MovieDetailsPage/MovieDetailsPage"))
const NotFoundPage = lazy(() => import("./Page/NotFoundPage/NotFoundPage"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"))
const Navigation = lazy(() => import("./components/Navigation/Navigation"))
function App() {
  return <>
   
    <Suspense fallback={null}>
       <Navigation />
      <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/movies' element={<MoviesPage />} />
    <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
      <Route path='/movies/:movieId/cast'  element={<MovieCast />} />
      <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
    </Route>
    <Route path='*' element={<NotFoundPage />} />
 </Routes>
    </Suspense>
    </>
  
  
}

export default App
