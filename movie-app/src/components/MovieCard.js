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
   
  return(
      <Card >
        <Card.Img 
          style={{objectFit: 'cover', objectPosition: '50% 0%'}}
          height="350px"
          bg='dark'
          variant='top' 
          src={props.movie.poster}/>
        <Card.Body>
          <Card.Title className="text-truncate">{props.movie.title}</Card.Title>
          <Card.Text className="text-truncate">
              {props.movie.short_imdb_description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  )
}

export { MovieCard };