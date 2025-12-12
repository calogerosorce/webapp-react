import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function MoviePage() {

    let { id } = useParams()
    const [movie, setMovie] = useState({})

    function getApi() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getApi()
    }, [])

    return (

        <>
            <div className="container">
                <div className="single my-4">
                    <img src={`http://localhost:3000/movies_cover/${movie.image}`} alt="" />
                    <div className="col m-4">
                        <h2>{movie.title}</h2>
                        <p>{movie.abstract}</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container">
                <h1>RECENZIONI</h1>
            </div>
            {
                movie && movie.tag?.map(item => (
                    <div key={item.id} className="container">
                        <div className="card_rating">
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                            <p>{item.vote}</p>
                        </div>
                    </div>
                ))
            }


        </>
    )
}