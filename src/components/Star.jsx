export default function Star({ vote }) {

    function getStar(rating) {


        let stars = []
        for (let i = 1; i <= rating; i++) {
            stars.push(<i className="bi bi-star-fill" key={`fil-${i}`}></i>)
        }
        for (let i = 1; i <= 5 - rating; i++) {
            stars.push(<i className="bi bi-star" key={`${i}`}></i>)
        }

        return stars
    }

    return (
        <div className="star">
            {getStar(vote)}
        </div>
    )
}