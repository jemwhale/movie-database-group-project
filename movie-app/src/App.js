import React, {useEffect, useState} from 'react';
import { MovieCard } from './components/MovieCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {

  const [movieList, setMovieList] = useState();

  useEffect(() => { 
      fetch(`https://i-m-d-b.herokuapp.com?q=the`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
    }, []);

    if (!movieList) {
      return(
        <Container>
          <Row xs={1}  md={2} lg={3} xxl={4} className="g-4">
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          <Col><MovieCard/></Col>
          </Row>
        </Container>
      )
  }

  return(
    <Container>
          <Row xs={1}  md={2} lg={3} xxl={4} className="g-4">
          {Object.keys(movieList).map((movie, index)=>{
            if(index >0 && index <=Object.keys(movieList).length-4){
              return <Col>
               <MovieCard key={index} movie={movieList[index]}/>
               </Col>
            }})}
            </Row>
        </Container>
  )
};

export default App;
