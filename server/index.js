const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatadase',
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/api/get", (require, response) => {
    const sqlSelect = "SELECT * FROM movie_review"
    db.query(sqlSelect, (err, result) => {
        response.send(result)
    })
})

app.post("/api/insert", (require, response)=>{
    const movieName = require.body.movieName;
    const movieReview = require.body.movieReview;

    const sqlInsert = "INSERT INTO movie_review (movieName, movieReview) VALUES (?, ?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
    });
});

app.delete("/api/delete/:movieName", (require, response)=>{
    const name = require.params.movieName;
    const sqlDelete = "DELETE FROM movie_review WHERE movieName = ?";

    db.query(sqlDelete, name, (err, result) =>{
        err && console.log(err);
        
    })
})

app.put("/api/update", (require, response)=>{
    const name = require.body.movieName;
    const review = require.body.movieReview;
    const sqlUpdante = "UPDATE movie_review SET movieReview = ? WHERE movieName = ? "
    db.query(sqlUpdante, [review, name], (err, result) =>{
        err && console.log(err);

    })
})




app.listen(3005, () => {
    console.log('Server is running on port 3005');
})