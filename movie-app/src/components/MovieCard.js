import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function MovieCard(props){

  if (!props.movie) {
    return(         
      <Card>
        <Card.Img 
            style={{objectFit: 'cover', objectPosition: '50% 0%'}}
            height="350px"
            bg='dark'
            variant='top' 
            src="https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg"/>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> 
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    )
  }
   
  let poster = ''
  if(!props.movie.poster_path){poster = 'https://www.charitycomms.org.uk/wp-content/uploads/2019/02/placeholder-image-square.jpg'}
  else{poster = 'https://image.tmdb.org/t/p/w400' + props.movie.poster_path}
  

  return(
      <Card className="my-card">
        <div className="my-card-image-container">
        <Card.Img 
          className="my-card-image"
          style={{objectFit: 'cover', objectPosition: '50% 0%'}}
          height="450px"
          bg='dark'
          variant='top' 
          src={poster}/>
          </div>
        <Card.Body>
          <Card.Title className="text-truncate">{props.movie.title}</Card.Title>
            <Card.Text className="text-truncate">
                {props.movie.overview}
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  )
}

export { MovieCard };