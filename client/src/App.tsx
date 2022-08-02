import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonDelete, ButtonSubmit, ButtonUpdate, Formulario, List } from './StyleApp'


interface IMovieReviewListValue {
  id?: number,
  movieName: string,
  movieReview: string
  }

interface IMovieReviewList extends Array<IMovieReviewListValue> {}

function App(props: IMovieReviewList) {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState<IMovieReviewList>([]); 
  //const [movieReviewList, setMovieReviewList] = useState<Array<{id: number, movieName: string, movieReview: string}>>([]); 
  
  const [newReview, setNewReview] = useState('')

  useEffect(() => {
    Axios.get("http://localhost:3005/api/get").then((response) => {
      setMovieReviewList(response.data)
    })
  }, [] )

  const submitReview = () => {
    Axios.post("http://localhost:3005/api/insert", {
      movieName: movieName,
      movieReview: review,
      })

      setMovieReviewList([...movieReviewList, {movieName: movieName, movieReview: review}])
  };

  const deleteReview = (movie:string) => {
    Axios.delete(`http://localhost:3005/api/delete/${movie}`)
    }
  
  const updateReview = (movie:string)=> {
    Axios.put("http://localhost:3005/api/update/", {
      movieName: movie,
      movieReview: newReview,
      })
      setNewReview('');
  };

  return (
    <>
    <Formulario>
      <h1>CRUD Aplication</h1>
      
      <label>Movie Name:</label>
      <input onChange={(e) => setMovieName(e.target.value)} type="text" name="Movie Name"/>
      <label>Review:</label>
      <input onChange={(e) => setReview(e.target.value)}  type="text" name="Review"/>
      
      <ButtonSubmit onClick={submitReview} type="button">Submit</ButtonSubmit>

      <List>

         {
           movieReviewList.map((movie ) => {
             return (
               <ul>
                <li>
                  <div>
                    <p>{movie.movieName} - {movie.movieReview}</p>
                    <input onChange={(event) => {setNewReview(event.target.value)}} type="text" placeholder='Edit' />
                    <ButtonUpdate onClick={()=> {updateReview(movie.movieName)}} >Update</ButtonUpdate> 
                    <ButtonDelete onClick={()=> {deleteReview(movie.movieName)}}>Delete</ButtonDelete>
                  </div>
                </li>
              </ul>
            )})
          }
        
        </List>
      
    </Formulario>

    </>
  )
}

export default App
