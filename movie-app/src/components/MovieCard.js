import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function MovieCard(props){
    return(
        <p>
        {props.movie.title}
        </p>
    )
}

export { MovieCard };