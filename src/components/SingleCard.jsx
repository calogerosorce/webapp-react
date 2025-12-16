export default function SingleCard({ movie }) {

    return (
        <div className="single py-4">
            <img src={`http://localhost:3000/uploads/${movie.image}`} alt="" />
            <div className="col m-4">
                <h2>{movie.title}</h2>
                <p>{movie.abstract}</p>
            </div>
        </div>
    )
}