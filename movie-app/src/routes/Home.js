import React, { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Navigation } from '../components/Navigation';

function Home(props){

    const [filteredMovieList, setFilteredMovieList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilteredMovieList(
          props.movieList.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, props.movieList]);

    if (!props.movieList) {
        return(
          <Container>
            <Navigation/>
            <Row className='mb-4'>
                <Col sm='8' md='6' className='mx-auto'>
                    <InputGroup>
                    <InputGroup.Text id='search'>Search</InputGroup.Text>
                    <FormControl
                        value={search}
                        aria-label='search'
                        aria-describedby='search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    </InputGroup>
                </Col>
            </Row>
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
            <Navigation/>
            <Row className='mb-4'>
                <Col sm='8' md='6' className='mx-auto'>
                    <InputGroup>
                    <InputGroup.Text id='search'>Search</InputGroup.Text>
                    <FormControl
                        value={search}
                        aria-label='search'
                        aria-describedby='search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    </InputGroup>
                </Col>
            </Row>
            <Row xs={1}  md={2} lg={3} xxl={4} className="g-4">
            {filteredMovieList.map((movie, index)=>{
                return <Col>
                <MovieCard key={index} movie={filteredMovieList[index]}/>
                </Col>
                })}
            </Row>
        </Container>
      )

}

export { Home };
