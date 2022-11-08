import React, {useEffect, useState} from 'react';
import { MovieCard } from './components/MovieCard';


function App() {

  const [movieList, setMovieList] = useState();

  async function getMovies(){
    try{
      const res = await fetch('https://i-m-d-b.herokuapp.com?q=toy%20story&l=5');
      const data = await res.json();
      setMovieList(data);
    }catch{
      console.log('Error fetching movies');
    }
  };
    
  
  useEffect(() => {
      getMovies();
    }, []);


    console.log(movieList);
    if (!movieList) {
      return <>loading...</>;
  }
  return (
    <>
      {movieList.map((movie, index)=>{
        return <MovieCard key={index} movie={movie}/>
      })}
      </>
  );
}

export default App;
