import React, {useEffect, useState} from 'react';
import { MovieCard } from './components/MovieCard';


function App() {

  const [movieList, setMovieList] = useState();

  
  useEffect(() => { 
      fetch(`https://i-m-d-b.herokuapp.com?q=marvel`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
    }, []);

    if (!movieList) {
      return(
        <div className="d-flex justify-content-around">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>
      )
  }



  return(
    <div className="d-flex justify-content-around">
    {console.log(movieList)}
    {console.log(Object.keys(movieList).length)}
    {Object.keys(movieList).map((movie, index)=>{
      if(index >0 && index <=Object.keys(movieList).length-4){
        return <MovieCard key={index} movie={movieList[index]}/>
      }})}
    </div>
  )
};

export default App;
