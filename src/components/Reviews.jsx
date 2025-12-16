import Star from "../components/Star";

export default function Reviews({ movie }) {

    return (
        <>
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
        </>
    )
}