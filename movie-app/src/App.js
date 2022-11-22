import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { Navigation } from './components/Navigation';
import { Home } from './routes/Home'
import { MovieDetails } from './routes/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [movieList, setMovieList] = useState([]);

    useEffect(() => { 

      let mergedResults = []

      for(let i = 1; i <= 6; i ++){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=58b2bb2d117bc09545331acc1269e792&page=${i}`) // GET POPULAR
        .then((res) => res.json())
        .then((data) => {
        mergedResults = [...mergedResults, ...data.results];
        setMovieList(mergedResults);
        }) 
      };
    }, []);

    return(
      <>
      <Navigation/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home movieList={movieList}/>}/>
            <Route path='/:id' element={<MovieDetails movieList={movieList}/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      </>
      
    )
};

export default App;
