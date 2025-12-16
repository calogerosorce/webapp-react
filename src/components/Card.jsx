import { Link } from "react-router-dom"


export default function Card(props) {



    return (
        <Link to={`/movie/${props.id}`} className="card col-12 col-md-6 col-lg-2 text-center m-3">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            {props && <strong><p>{props.title}</p></strong>}
            <p>{props.genre}</p>
        </Link>
    )
}
