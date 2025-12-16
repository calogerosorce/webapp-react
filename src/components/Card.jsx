import { Link } from "react-router-dom"


export default function Card(props) {



    return (
        <Link to={`/movie/${props.id}`} className="card col-12 col-md-6 col-lg-3 align-items-center p-3 m-3">
            <div className="img-container">
                <img src={props.image} alt="" />
            </div>
            {props && <p>{props.title}</p>}
            <p>{props.genre}</p>
            <p>{props.abstract}</p>
        </Link>
    )
}