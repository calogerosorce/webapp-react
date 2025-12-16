import FormAddMovie from "../components/FormAddMovie";

export default function Admin() {

    return (
        <div className="container py-3">
            <div className="log">
                <div className="lore d-flex justify-content-between">
                    <h2>Aggiungi un Film</h2>
                    <h1>Admin</h1>
                </div>
                <FormAddMovie />
            </div>
        </div>
    )
}