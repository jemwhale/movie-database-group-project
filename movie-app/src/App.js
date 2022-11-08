import React, {useEffect, useState} from 'react';


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

  return (
    <div>
      <p>Hello, the first movie found is {movieList}</p>
    </div>
  );
}

export default App;
