import React, {useEffect, useState} from 'react';
import { MovieCard } from './components/MovieCard';


function App() {

  const [movieList, setMovieList] = useState();

  
  useEffect(() => { 
      fetch(`https://i-m-d-b.herokuapp.com?q=marvel&s=2`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
    }, []);

    if (!movieList) {
      return <>loading...</>
  }



  return(
    <>
    {console.log(movieList)}
    {console.log(Object.keys(movieList).length)}
    {Object.keys(movieList).map((movie, index)=>{
      if(index >0 && index <=Object.keys(movieList).length-4){
        return <MovieCard key={index} movie={movieList[index]}/>
      }})}
    </>
  )
};

export default App;
