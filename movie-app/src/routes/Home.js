import React, { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Navigation } from '../components/Navigation';

function Home(props){

    const [filteredMovies, setFilteredMovies] = useState();
    const [search, setSearch] = useState();

    if (!props.movieList) {
        return(
          <Container>
            <Navigation />
            <Row xs={1}  md={2} lg={3} xl={4} xxl={4} className="g-4">
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
          <Navigation />
              <Row xs={1}  md={2} lg={3} xxl={4} className="g-4">
                {props.movieList.map((movie, index)=>{
                    return <Col>
                    <MovieCard key={index} movie={props.movieList[index]}/>
                    </Col>
                  })}
                </Row>
            </Container>
      )

}

export { Home };
