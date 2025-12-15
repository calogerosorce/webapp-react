import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"
export default function HomePage() {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                setMovies(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h1 className="text-center">BENVENUTO NEL MONDO MOVIES</h1>

            <div className="container">
                <div className="row">
                    {movies.map(movie => (
                        <Card key={movie.id} title={movie.title} image={`http://localhost:3000/uploads/${movie.image}`} genre={movie.genre} abstract={movie.abstract} id={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}