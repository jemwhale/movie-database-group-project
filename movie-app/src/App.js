import React, {useEffect, useState} from 'react';
import { Home } from './routes/Home'
import { MovieCard } from './components/MovieCard';
import { RickMortyCard } from './components/RickMortyCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Navigation } from './components/Navigation';

function App() {

  const [movieList, setMovieList] = useState();

  // MOVIES 

  useEffect(() => { 
      fetch(`https://i-m-d-b.herokuapp.com?q=the`) // MOVIES 
      // fetch(`https://rickandmortyapi.com/api/character`) // RICK AND MORTY
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const movieArray = Object.values(data)
        const filteredArray = movieArray.filter((movie, index)=>{
            if(movie.title){
            return movie;
          }
        })
        setMovieList(filteredArray);
      });
    }, []);

    return(
      <Home movieList={movieList}/>
    )

    // RICK AND MORTY

    // return(
    //   <Container>
    //     {console.log(movieList)}
    //         <Row xs={1}  md={2} lg={3} xxl={4} className="g-4">
    //           {movieList.map((character, index)=>{
    //             if(index >0 && index <=Object.keys(movieList).length-4){
    //               return <Col>
    //               <RickMortyCard key={index} character={character}/>
    //               </Col>
    //             }})}
    //           </Row>
    //       </Container>
    // )
};

export default App;
