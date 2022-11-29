// RICK AND MORTY App render

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


// ORIGINAL MOVIE API and RICK & MORTY API useEffect

// MOVIES 

// useEffect(() => { 
//     fetch(`https://i-m-d-b.herokuapp.com?q=the`) // MOVIES 
//     // fetch(`https://rickandmortyapi.com/api/character`) // RICK AND MORTY
//     .then((res) => res.json())
//     .then((data) => {
//       const movieArray = Object.values(data)
//       const filteredArray = movieArray.filter((movie, index)=>{
//           if(movie.title){
//           return movie;
//         }
//       })
//       setMovieList(filteredArray);
//       console.log(filteredArray);
//     });
//   }, []);