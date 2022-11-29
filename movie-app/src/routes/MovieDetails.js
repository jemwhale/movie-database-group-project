import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails(props){

    const [movie, setMovie] = useState(null);

    const params = useParams();

    useEffect((props)=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=58b2bb2d117bc09545331acc1269e792`)
        .then((res)=>res.json())
        .then((data)=>{
            setMovie(data);
        })
        .catch((error)=>{
            console.error(error);
        }); 
    },[params.id]);

    if(!movie){
        return(
            <>Loading...</>
        )
    }

    return(
        <>
        {movie.title}
        </>
    )
}

export { MovieDetails };