import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Movies from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import WatchList from './pages/WatchList'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MovieDetails/>} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;