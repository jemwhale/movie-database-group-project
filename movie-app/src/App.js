import React, {useEffect, useState, createContext} from 'react';
import Container from 'react-bootstrap/Container';
import { Navigation } from './components/Navigation';
import { Home } from './routes/Home'
import { MovieDetails } from './routes/MovieDetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const MoviesContext = createContext();

function App() {

  const [movieList, setMovieList] = useState([]);

    useEffect(() => { 

      let mergedResults = []

      for(let i = 1; i <= 6; i ++){
        // setTimeout(() => {
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=58b2bb2d117bc09545331acc1269e792&page=${i}`) // GET POPULAR
          .then((res) => res.json())
          .then((data) => {
          mergedResults = [...mergedResults, ...data.results];
          setMovieList(mergedResults);
          }) 
        // }, 3000);
      };
    }, []);

    return(
      <>
      <MoviesContext.Provider value = {{movieList, setMovieList}}>
        <Navigation/>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Navigate to="/movies/popular" /> }/>
              <Route path='/movies/popular' element={<Home/>}/>
              <Route path='/movie/:id' element={<MovieDetails/>}/>
            </Routes>
          </BrowserRouter>
        </Container>
        </MoviesContext.Provider>
      </>
      
    )
};

export default App;
