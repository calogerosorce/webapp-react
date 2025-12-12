import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Star from "../components/Star";

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
                <h1>RECENSIONI</h1>
            </div>
            {
                movie && movie.tag?.map(item => (
                    <div key={item.id} className="container">
                        <div className="card_rating">
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                            <Star vote={item.vote} />
                        </div>
                    </div>
                ))
            }

            <hr />

            <div className="container my-3">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Recensione</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                        <option selected>Voto</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button className="btn btn-dark">Submit</button>
                </form>
            </div >
        </>
    )
}