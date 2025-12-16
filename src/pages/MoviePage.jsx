import { useState } from "react";
import FormReviews from "../components/FormReviews";
import SingleCard from "../components/SingleCard";
import Reviews from "../components/Reviews";

export default function MoviePage() {


    const [movie, setMovie] = useState({})




    return (

        <>
            <div className="container">
                <SingleCard movie={movie} />
            </div>

            <hr />

            <div className="container">
                <h1>RECENSIONI</h1>
            </div>
            <Reviews movie={movie} />

            <hr />

            <div className="container py-3">
                <div className="log">
                    <h2>LASCIA UNA RECENSIONE</h2>
                    <FormReviews setMovie={setMovie} />
                </div >
            </div>
        </>
    )
}